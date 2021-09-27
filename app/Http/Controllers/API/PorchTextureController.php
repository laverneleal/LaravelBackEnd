<?php

namespace App\Http\Controllers\API;

//use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\PorchTexture;
use Validator;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;

class PorchTextureController extends BaseController
{
    //
    
    public function index(Request $request){
  
        $items = PorchTexture::all();
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];
        foreach($itemsDecode as $item){
          switch($requestURI){
            case 'porch':
              $item['RowIndex'] = 18;
              break;
            case 'porch2':
              $item['RowIndex'] = 40;
              break;
            case 'doma': 
              $item['RowIndex'] = 19;
              break; 
            case 'doma2': 
              $item['RowIndex'] = 46;
              break; 			  
          }   
          switch( $item['SortNo'] ){
            case 1: 
            case 2:
            case 3:
            case 4: 
              $item['KindId'] = '1'; 
              break;
            default:
              $item['KindId'] = '2'; 
              break;            
          }
            $newArray[$i] = $item;
            $i = $i + 1;
        }


       return $this->sendResponse(SRSTextureResource::collection($newArray), 'Products retrieved successfully.');
  

    }

    



}
