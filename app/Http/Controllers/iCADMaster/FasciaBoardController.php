<?php

namespace App\Http\Controllers\iCADMaster;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Models\FasciaBoard;
use Validator;

class FasciaBoardController extends BaseController
{
    //
    public function index(){
    
       $items = FasciaBoard::select('Id','JapaneseName','EnglishName','FilePath','DeletedDate')->whereNull('DeletedDate')->get();

       $i = 0;
       $newArray = [];
       $itemsDecode = json_decode($items, true); //add value to existing api
       $requestURI = explode('/api/',$_SERVER['REQUEST_URI'])[1];
 
       foreach($itemsDecode as $item){
         switch ($requestURI) {
           case 'fasciaAluminum': 
             $item['RowIndex'] = 75; 
             $item['MergeId'] = 1; 
             break;
           default:
             $item['RowIndex'] = 6;
             break;
         }

         $item['TextureId'] = $item['Id'];
         $item['SortNo'] = $i + 1 . '';        
         $newArray[$i] = $item;
         $i = $i + 1;
       }
 
       $items = [
         'TextureId'    => '-1',
         'EnglishName'  => 'Same as Roof',
         'JapaneseName' => '屋根材色合せ',
         'RowIndex'     => 6,
         'TypeId'       => '0',
         'RowIndex'     => $newArray[1]['RowIndex'],
         'SortNo'       => '0'
       ];
 
       array_unshift($newArray, $items); 

       return $this->sendResponse(SRSTextureResource::collection($newArray), 'Fascia Board Textures retrieved successfully.');  
    }

    public function show($req){
        $items = FasciaBoard::where('Id', $req)->get();

        $i = 0;
        $newArray = [];
        $itemsDecode = json_decode($items, true); //add value to existing api
  
        foreach($itemsDecode as $item){
          $newArray[$i] = $item;
          $i = $i + 1;
        }
        return $this->sendResponse(SRSTextureResource::collection($newArray), 'Fascia Board Textures retrieved successfully.');  
    }

}
