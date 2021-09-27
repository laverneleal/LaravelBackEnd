<?php

namespace App\Http\Controllers\iCADMaster;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\SymbolMaster;
use Validator;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;

class SymbolMasterController extends BaseController
{
    //
    public function show($req){
    	$requestURI = explode('/', explode('/api/',$_SERVER['REQUEST_URI'])[1])[0];
    	$req = [$req];

	     switch($requestURI){
	       case 'stair':
	         $className = 'Stairlines';
	         break;
	       case 'internalDoor':
	         $className = 'Wood-Horizontal';
	         break;
	       case 'systemkitchen':
	       case 'systemkitchen2':
	       case 'systemkitchen3':  
	         $className = 'CabinetDoor'; 
	         $className2 = 'WOOD-HORIZONTAL';
	         $req = [1671, 20980, 17642];
	         break;
	     }

	      $items = SymbolMaster::select('MasterId','TextureId','Name As JapaneseName', 'ClassName As EnglishName')
	      						   ->whereIn('Symbol3DTextures.MasterId', $req)
	      						   ->where('Symbol3DTextures.ClassName', '=', $className)
								   ->whereNull('DeletedDate')
								   ->OrderBy('TextureId')
	      						   ->get();



	      if( stripos($requestURI, 'systemkitchen') > -1 ){
	        $items2 = SymbolMaster::select('MasterId','TextureId','Name As JapaneseName', 'ClassName As EnglishName')
							          ->whereIn('Symbol3DTextures.MasterId', $req)
							          ->Where('Symbol3DTextures.ClassName', '=', $className2) 
							          ->whereNull('DeletedDate')
								      ->OrderBy('TextureId')
								      ->get();

			$items = json_encode(array_merge(json_decode($items2), json_decode($items)));
	      }

      $i = 0;
      $newArray = [];
      $itemsDecode = json_decode($items, true); //add value to existing api

      foreach($itemsDecode as $item){
        switch($requestURI){
          case 'stair':
            $item['RowIndex'] = 69;
            break;
          case 'internalDoor':
            $item['RowIndex'] = 68;
            break; 
          case 'systemkitchen':
            $item['RowIndex'] = 70;

            switch($item['MasterId']){
              case 1671: 
                $item['Kind'] = 'KA';
                break;
              case 20980:
                $item['Kind'] = 'KF';
                break;
              case 17642:
                $item['Kind'] = 'KG';
                break; 
            }  
            break;  
          case 'systemkitchen2':
            $item['RowIndex'] = 71;

            switch($item['MasterId']){
              case 1671: 
                $item['Kind'] = 'KA';
                break;
              case 20980:
                $item['Kind'] = 'KF';
                break;
              case 17642:
                $item['Kind'] = 'KG';
                break; 
            }  
            break;
          case 'systemkitchen3':
            $item['RowIndex'] = 72;

            switch($item['MasterId']){
              case 1671: 
                $item['Kind'] = 'KA';
                break;
              case 20980:
                $item['Kind'] = 'KF';
                break;
              case 17642:
                $item['Kind'] = 'KG';
                break; 
            }  
            break;
         }

        $newArray[$i] = $item;
        $i = $i + 1;
      }   


      return $this->sendResponse(SRSTextureResource::collection($newArray), 'SymbolMaster Textures retrieved successfully.'); 
    }











}
