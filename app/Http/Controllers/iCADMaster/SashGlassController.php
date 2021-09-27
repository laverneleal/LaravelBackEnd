<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\SashGlass;
use Validator;


class SashGlassController extends BaseController
{
    //
    public function index(){
        $items = SashGlass::all();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $item['RowIndex'] = '81';
          $item['SortNo'] = $i + 1;
          $newArray[$i] = $item;
          $i = $i + 1;
        }

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Sash Texture retrieved successfully.');
    }

    public function show($req){
        $items = SashGlass::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($items), 'Sash Texture retrieved successfully.');
    }

}
