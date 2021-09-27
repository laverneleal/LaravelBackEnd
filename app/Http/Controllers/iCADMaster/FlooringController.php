<?php

namespace App\Http\Controllers\iCADMaster;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\Flooring;
use Validator;

  //ADDED LINE 2021.05.06 //JAZZ
class FlooringController extends BaseController
{
    //
    public function index(){
      $items = Flooring::select('PartId','PatternId', 'SortNo', 'ValueId As TextureId','JapaneseName', 'EnglishName')
      					 ->where('PartId', 2)
      					 ->where('PatternId', 1)
      					 ->whereNull('DeletedDate')
      					 ->OrderBy('SortNo')
      					 ->get();
       
      $i = 0;
      $newArray = [];
      $itemsDecode = json_decode($items, true); //add value to existing api
   
      $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];

      foreach($itemsDecode as $item){
        switch($requestURI){
          case 'flooring':
            $item['RowIndex'] = 65;
            break;
          case 'flooring2':
            $item['RowIndex'] = 66;
            break;
          case 'flooring3': 
            $item['RowIndex'] = 67;
            break; 		  
        }
        
        $newArray[$i] = $item;
        $i = $i + 1;
      }
      
      return $this->sendResponse(SRSTextureResource::collection($newArray), 'Flooring Textures retrieved successfully.'); 
    }



}
