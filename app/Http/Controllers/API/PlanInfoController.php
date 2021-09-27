<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\PlanInfo;
use App\Models\GaibuInfo;
use Validator;


class PlanInfoController extends Controller
{


    public function index(){

    }

    public function show($request){
      $requestURI = explode('/api/checkPlanIfExist/',$_SERVER['REQUEST_URI'])[1];

    	if( stripos($requestURI, '_') ){
    	  $ConstructionCode = explode(',', $requestURI)[0]; 
    	  $RevisionNumber   = rtrim(explode(',', $requestURI)[1], "_"); 	
 
        $items = PlanInfo::select('unique_id', 'construction_code', 'plan_no', 'house_type', 'shio_no')
          ->where('construction_code', '=', $ConstructionCode )
          ->where('plan_no', '=', $RevisionNumber )
          ->OrderBy('shio_no', 'Desc')
          ->Limit(1)
          ->get();

    	}else{ //Modified Line 2021.04.19
        $items = PlanInfo::select('unique_id', 'construction_code', 'plan_no', 'house_type', 'shio_no')
          ->where('construction_code', '=', $request )
          ->OrderBy('plan_no', 'Desc')
          ->get();
    	}
      return $items;
    }


   public function store(Request $requests){ 
      $unique = $requests['ConstructionCode'].$requests['RevisionNumber'].$requests['RequestNumber'].$requests['HouseType'];

      // //insert plan information 
      $uniqueId = ['unique_id' => $unique ];
      $PlanInfo = [
                    'unique_id'         => $unique,
                    'construction_code' => $requests['ConstructionCode'],  
                    'plan_no'           => $requests['RevisionNumber'],
                    'shio_no'           => $requests['RequestNumber'],
                    'house_type'        => $requests['HouseType'],
                    'created_at'        => \Carbon\Carbon::now()
                  ];

      PlanInfo::updateOrInsert( $uniqueId, $PlanInfo ); 

      //gaibulist column names
      $tableColumns = collect(GaibuInfo::first())->keys();
      $updated_at   = ['updated_at'  => \Carbon\Carbon::now() ];
      $hiddenItems  = ['hiddenitems' => $requests['HiddenItemIndex'] ]; 
      $fieldItems   = [];

      GaibuInfo::updateOrInsert( $uniqueId, $updated_at); 
       
      foreach($tableColumns as $column){
        $field = $column;

        foreach($requests['SelectedItems'] as $items ){
          if($items['ColumnName'] == $column){
            $tableColumn = [ $field => $items ];
            $fieldItems += $tableColumn; //add arrays including specified keys
          }
        }
      }

      $fieldItems += $hiddenItems; //add hidden items

      GaibuInfo::updateOrInsert($uniqueId, $fieldItems);
      PlanInfo::updateOrInsert( $uniqueId, $updated_at ); 
    }


    public function getallitems($req){
      $newArray    = [];
      $resultArray = [];

      //added line 2021.04.29
      //check if the request is by plan or by uniqueid and get the latest shio number to load to icad
      if(stripos($req, ',') ){
        $requestURI       = explode('/',explode('/api/',$_SERVER['REQUEST_URI'])[1])[1];
        $constructionCode = explode(',', $requestURI)[0];
        $revisionNumber   = explode(',', $requestURI)[1];

        //get the unique id based on given plan number and revision number
        $uniqueid = (PlanInfo::select('unique_id') 
                    ->where('construction_code', '=', $constructionCode )
                    ->where('plan_no', '=', $revisionNumber )
                    ->OrderBy('shio_no', 'Desc')  
                    ->Limit(1)
                    ->get())[0]['unique_id'];

        $planItems   = json_decode(GaibuInfo::where('unique_id', $uniqueid)->get(), true);
        $planInfo    = (PlanInfo::where('unique_id', $uniqueid)->get())[0];
        $planInfoArr = [
                         'ConstructionCode' => $planInfo['construction_code'],
                         'RevisionNumber'   => $planInfo['plan_no'],
                         'HouseType'        => $planInfo['house_type'],
                         'RequestNumber'    => $planInfo['shio_no'],
                        ];

        foreach($planItems as $item){
          foreach($item as $obj){
            array_push($newArray, json_decode($obj, true));
          }
        }

        foreach(json_decode(json_encode($newArray), true) as $textureSelected){
          if(!empty($textureSelected)){
            $result = array_merge($planInfoArr, $textureSelected);
            array_push($resultArray, $result);
          }
        }

        return $resultArray;

      }else{
        $planItems   =  GaibuInfo::where('unique_id', $req)->get();
        $planInfo    = PlanInfo::where('unique_id', $req)->get();
        $hiddenitems = GaibuInfo::select('hiddenitems')->where('unique_id', $req)->get();
        $itemsDecode = json_decode($planItems, true);

        $newArray = [];
       
        foreach($itemsDecode as $item){
          foreach($item as $obj){
            array_push($newArray, json_decode($obj));
          }
        }

        $obj              = json_decode($planInfo, true);
        $ConstructionCode = $obj[0]['construction_code'];
        $PlanNo           = $obj[0]['plan_no'];
        $HouseType        = $obj[0]['house_type'];
        $RequestNumber    = $obj[0]['shio_no'];

        $hiddenitems = json_decode($hiddenitems[0]['hiddenitems']);

        return [
          'ConstructionCode'=> $ConstructionCode,
          'RevisionNumber'  => $PlanNo,
          'HouseType'       => $HouseType,
          'RequestNumber'   => $RequestNumber,
          'HiddenItemIndex' => $hiddenitems,
          'SelectedItems'   => $newArray
        ];
      }
    }

  







}