<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\BalconyGlass;
use Illuminate\Support\Facades\DB;
use Validator;


class BalconyGlassController extends BaseController
{
    //
    public function index(){
      $items = BalconyGlass::All();
      $i = 0;
      $newArray = [];
      $itemsDecode = json_decode($items, true); 
      $requestURI =  explode('/',explode('/api/',$_SERVER['REQUEST_URI'])[1])[0];

        foreach($itemsDecode as $item){
          switch($requestURI){
            case 'balconyGlass':
              $item['RowIndex'] = '14';
              break;
            case 'balconyGlass2':
              $item['RowIndex'] = '31';
              break;
            case 'balconyGlass3':
              $item['RowIndex'] = '35';
              break;
          }

          $item['SortNo'] = $item['Id']; 
          $newArray[$i] = $item;
          $i = $i + 1; 
        }

        return $this->sendResponse(SRSTextureResource::collection($items), 'Balcony Textures retrieved successfully.');
    }



    public function show($req){
        $items = [];
        return $this->sendResponse(SRSTextureResource::collection($items), 'Balcony Glass retrieved successfully.');
    }

}
