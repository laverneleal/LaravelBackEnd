<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\PorchTexture;
use Validator;

class PorchTextureController extends BaseController
{
    //
    public function index(){
 
        $items = PorchTexture::select('Id as TextureId', 'JapaneseName', 'EnglishName', 'SortNo')
                   ->get();


        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];
        foreach($itemsDecode as $item){
          switch($requestURI){
            case 'teracotta':
              $item['RowIndex'] = '73';
              break;
            case 'teracotta2':
              $item['RowIndex'] = '74';
              break;
            case 'porch':
              $item['RowIndex'] = '18';
              break;
            case 'porch2':
              $item['RowIndex'] = '40';
              break;
            case 'genkanDomaTeracotta':
              $item['RowIndex'] = '76';
              break;
            case 'genkanDomaTeracotta2':
              $item['RowIndex'] = '77';
              break;
            case 'doma': 
              $item['RowIndex'] = '19';
              break; 
            case 'doma2': 
              $item['RowIndex'] = '46';
              break; 
            case 'slopePorchTeracotta':
              $item['RowIndex'] = '78';
              break;
            case 'slopePorchTeracotta2':
              $item['RowIndex'] = '79';
              break;
            case 'slopePorch':
              $item['RowIndex'] = '29';
              break;
            case 'slopePorch2':
              $item['RowIndex'] = '51';
              break;
            case 'terasuTeracotta':
              $item['RowIndex'] = '80';
              break; 
            case 'terasuTeracotta2':
              $item['RowIndex'] = '81';
              break; 
            case 'terasu':
              $item['RowIndex'] = '28';
              break; 
            case 'terasu2':
              $item['RowIndex'] = '42';  
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

    public function show($req){
      $items = PorchTexture::all()->where('Id',$req);
      return $this->sendResponse(SRSTextureResource::collection($items), 'Products retrieved successfully.');
    }
    



}
