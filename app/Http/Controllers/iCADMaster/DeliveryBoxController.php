<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\DeliveryBox;
use Validator;

class DeliveryBoxController extends BaseController
{
    //
    public function index(){
        $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];

        if($requestURI == 'deliveryboxbodycolor'){
            $items = DeliveryBox::select()->where('KindId', '1')->get();
        }else{
            $items = DeliveryBox::select()->where('KindId', '2')->get();   
        }


        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api

        foreach($itemsDecode as $item){
          switch ($requestURI) {
            case 'deliveryboxbodycolor':
              $item['RowIndex'] = '83'; 
              break;
            default:
              $item['RowIndex'] = '84';
              break;
          }

          $newArray[$i] = $item;
          $i = $i + 1;
        }

        return $this->sendResponse(SRSTextureResource::collection($newArray), 'DeliveryBox Texture retrieved successfully.');
    
    }

    public function show($req){
        $items = DeliveryBox::where('Id',$req)->get();
        return $this->sendResponse(SRSTextureResource::collection($items), 'DeliveryBox Texture retrieved successfully.');
    }

}
