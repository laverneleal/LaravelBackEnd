<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\GenkanTexture;
use Validator;

class GenkanTextureController extends BaseController
{
    //
    public function index(){
        $items = GenkanTexture::All();
        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];

        foreach($itemsDecode as $item){
          switch($requestURI){
            case 'genkantextures':
              $item['RowIndex'] = 24;
              break;
            case 'genkantextures2':
              $item['RowIndex'] = 44;
              break;
          }
          $item['SortNo'] = $item['Id']; 
          $newArray[$i] = $item;
          $i = $i + 1; 
        }
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'genkanTexture Texture retrieved successfully.');  
     }
    public function show($req){
        $items = GenkanTexture::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($items), 'Genkan Texture retrieved successfully.');
    }

}
