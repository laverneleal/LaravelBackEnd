<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\CLItems;
use Validator;

class FormItemsController extends BaseController
{
    //ADDED LINE 2021.05.05 //JAZZ
    public function index(){
        if (stripos($_SERVER['HTTP_USER_AGENT'], 'Indy')){
          $condition = 'isAvailableInICAD'; 
        }else{
          $condition = 'isAvailableInWeb';
        }

        $items = CLItems::select()
                    ->where($condition, 1)
                    ->orderBy('SortNo','Asc')
                    ->get();


    if (stripos($_SERVER['HTTP_USER_AGENT'], 'Indy')){
      $i = 0;
      $newArray = [];
      $itemsDecode = json_decode($items, true); //add value to existing api

      foreach($itemsDecode as $item){
        $item['excludedItems'] = json_decode($item['excludedItems']);  
      
        $newArray[$i] = $item;
        $i = $i + 1;
      }
      return $newArray;
    }else{
      return $this->sendResponse(SRSTextureResource::collection($items), 'Items retrieved successfully.');
    }

    }

    public function show($req){
        $items = CLItems::where('Id',$req)->get();
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $newArray[$i] = $item;
          $i = $i + 1;
        }      
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Form Items retrieved successfully.');        
    }
}

