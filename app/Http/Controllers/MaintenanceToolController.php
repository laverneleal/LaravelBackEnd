<?php

namespace App\Http\Controllers;

use App\Models\MaintenanceTool;
use Illuminate\Http\Request;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\CLItems;

class MaintenanceToolController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (stripos($_SERVER['HTTP_USER_AGENT'], 'Indy')){
            $condition = 'isAvailableInICAD'; 
          }else{
            $condition = 'isAvailableInWeb';
          }
  
          $items = CLItems::select()
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

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request){

        $ids = $request[0];
        $houseType = $request[7];

        //excluded items
        $excludedItems = [];
        if (in_array("0", $houseType)){
            if($request[1]){
               $smile = [ "Items"=>$request[1], "HouseType"=>"0" ]; 
            }else{
               $smile = [ "Items"=>[], "HouseType"=>"0" ]; 
            }
            array_push( $excludedItems, $smile );
        }
        if (in_array("1", $houseType)){   
            if($request[2]){
                $smart = [ "Items"=> $request[2], "HouseType"=>"1" ];  
            }else{
                $smart = [ "Items"=> [], "HouseType"=>"1" ];
            }
            array_push( $excludedItems, $smart );
        }
        if (in_array("2", $houseType)){ 
            if($request[3]){
                $cube =  [ "Items"=> $request[3], "HouseType"=>"2" ];  
            }else{
                $cube =  [ "Items"=> [], "HouseType"=>"2" ];  
            }
            array_push( $excludedItems, $cube );
        }
        $a = json_encode($excludedItems ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES ); //;
 

        //default items
        $defaultItems = [];
        if (in_array("0", $houseType)){
            if( $request[4]['Material'] || $request[4]['Item'] ){
                $smileDefault = [ "HouseType"=>"0", "Material"=>$request[4]['Material'], "Item"=>$request[4]['Item'] ];
            }else{
                $smileDefault = [ "HouseType"=>"0", "Material"=>"", "Item"=>"" ];                
            }
            array_push( $defaultItems, $smileDefault );
        }
        if (in_array("1", $houseType)){
            if( $request[5]['Material'] || $request[5]['Item'] ){
                $smartDefault = [ "HouseType"=>"1", "Material"=>$request[5]['Material'], "Item"=>$request[5]['Item'] ];
            }else{
                $smartDefault = [ "HouseType"=>"1", "Material"=>"", "Item"=>"" ];               
            }                   

            array_push( $defaultItems, $smartDefault );
        }
        if (in_array("2", $houseType)){ 
            if( $request[6]['Material'] || $request[6]['Item'] ){
                $cubeDefault  = [ "HouseType"=>"2", "Material"=>$request[6]['Material'], "Item"=>$request[6]['Item'] ];
            }else{
                $cubeDefault  = [ "HouseType"=>"2","Material"=>"", "Item"=>"" ];                 
            }             
            array_push( $defaultItems,$cubeDefault );
        }

        $b = json_encode($defaultItems ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES );

        $id = [ 'Id' => $ids ];
        $items = [
            'Id' => $ids,
            'excludedItems' => $a,
            'preSelectedItem' => $b,
            'HouseType' => $houseType 
        ];
        MaintenanceTool::updateOrInsert( $id, $items );  
        
    }
    
    
    public function store2(Request $request){

        $ids = $request[0];
        $houseType = $request[9];

        //excluded items
        $excludedItems = [];
        if (in_array("0", $houseType)){
            if($request[1]){
               $smile = [ "Items"=>$request[1], "HouseType"=>"0" ]; 
            }else{
               $smile = [ "Items"=>[], "HouseType"=>"0" ]; 
            }
            array_push( $excludedItems, $smile );
        }
        if (in_array("1", $houseType)){   
            if($request[2]){
                $smart = [ "Items"=> $request[2], "HouseType"=>"1" ];  
            }else{
                $smart = [ "Items"=> [], "HouseType"=>"1" ];
            }
            array_push( $excludedItems, $smart );
        }
        if (in_array("2", $houseType)){ 
            if($request[3]){
                $cube =  [ "Items"=> $request[3], "HouseType"=>"2" ];  
            }else{
                $cube =  [ "Items"=> [], "HouseType"=>"2" ];  
            }
            array_push( $excludedItems, $cube );
        }
        if (in_array("3", $houseType)){ 
            if($request[4]){
                $pallete =  [ "Items"=> $request[4], "HouseType"=>"3" ];  
            }else{
                $pallete =  [ "Items"=> [], "HouseType"=>"3" ];  
            }
            array_push( $excludedItems, $pallete );
        }        
        $a = json_encode($excludedItems ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES ); //;
 

        //default items
        $defaultItems = [];
        if (in_array("0", $houseType)){
            if( $request[5]['Material'] || $request[5]['Item'] ){
                $smileDefault = [ "HouseType"=>"0", "Material"=>$request[5]['Material'], "Item"=>$request[5]['Item'] ];
            }else{
                $smileDefault = [ "HouseType"=>"0", "Material"=>"", "Item"=>"" ];                
            }
            array_push( $defaultItems, $smileDefault );
        }
        if (in_array("1", $houseType)){
            if( $request[5]['Material'] || $request[6]['Item'] ){
                $smartDefault = [ "HouseType"=>"1", "Material"=>$request[6]['Material'], "Item"=>$request[6]['Item'] ];
            }else{
                $smartDefault = [ "HouseType"=>"1", "Material"=>"", "Item"=>"" ];               
            }                   

            array_push( $defaultItems, $smartDefault );
        }
        if (in_array("2", $houseType)){ 
            if( $request[7]['Material'] || $request[7]['Item'] ){
                $cubeDefault  = [ "HouseType"=>"2", "Material"=>$request[7]['Material'], "Item"=>$request[7]['Item'] ];
            }else{
                $cubeDefault  = [ "HouseType"=>"2","Material"=>"", "Item"=>"" ];                 
            }             
            array_push( $defaultItems,$cubeDefault );
        }
        if (in_array("3", $houseType)){ 
            if( $request[8]['Material'] || $request[8]['Item'] ){
                $palleteDefault  = [ "HouseType"=>"3", "Material"=>$request[8]['Material'], "Item"=>$request[8]['Item'] ];
            }else{
                $palleteDefault  = [ "HouseType"=>"3","Material"=>"", "Item"=>"" ];                 
            }             
            array_push( $defaultItems,$palleteDefault );
        }
        $b = json_encode($defaultItems ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES );

        $id = [ 'Id' => $ids ];
        $items = [
            'Id' => $ids,
            'excludedItems' => $a,
            'preSelectedItem' => $b,
            'HouseType' => $houseType 
        ];
        MaintenanceTool::updateOrInsert( $id, $items );  
        
    }  

    public function twocategory(Request $request){

        $ids = $request[0];
        $houseType = $request[7];
        $excludedItems = [];

        $defaultItems = [];
        $smile = [ "Items"=>$request[1], "HouseType"=>"0" ]; 
        $smart = [ "Items"=> $request[2], "HouseType"=>"1" ];
        $cube =  [ "Items"=> $request[3], "HouseType"=>"2" ];
        array_push( $excludedItems, $smile, $smart, $cube );
        $excluded = json_encode($excludedItems ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES ); //;

        $defaultItems = [];
        $smileDefault = [ "HouseType"=>"0", "Material"=>$request[4]['Material'], "Item"=>$request[4]['Item'] ];
        $smartDefault = [ "HouseType"=>"1", "Material"=>$request[5]['Material'], "Item"=>$request[5]['Item'] ];
        $cubeDefault  = [ "HouseType"=>"2", "Material"=>$request[6]['Material'], "Item"=>$request[6]['Item'] ];
        array_push( $defaultItems, $smileDefault, $smartDefault, $cubeDefault );
        $default = json_encode($defaultItems ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES );
  
        $id = [ 'Id' => $ids ];
        $items = [
            'Id' => $ids,
            'excludedItems' => $excluded,
            'preSelectedItem' => $default,
            'HouseType' => $houseType
        ];
        MaintenanceTool::updateOrInsert( $id, $items );  

        $ids2 = $request[8];
        $houseType2 = $request[7];
        $excludedItems2 = [];
        $smile2 = [ "Items"=>$request[9], "HouseType"=>"0" ]; 
        $smart2 = [ "Items"=> $request[10], "HouseType"=>"1" ];
        $cube2 =  [ "Items"=> $request[11], "HouseType"=>"2" ];
        array_push( $excludedItems2, $smile2, $smart2, $cube2 );
        $excluded2 = json_encode($excludedItems2 ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES ); //;

        $defaultItems2 = [];
        $smileDefault2 = [ "HouseType"=>"0", "Material"=>$request[12]['Material'], "Item"=>$request[12]['Item'] ];
        $smartDefault2 = [ "HouseType"=>"1", "Material"=>$request[13]['Material'], "Item"=>$request[13]['Item'] ];
        $cubeDefault2  = [ "HouseType"=>"2", "Material"=>$request[14]['Material'], "Item"=>$request[14]['Item'] ];
        array_push( $defaultItems2, $smileDefault2, $smartDefault2, $cubeDefault2 );
        $default2 = json_encode($defaultItems2 ,JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES );
  
        $id2 = [ 'Id' => $ids2 ];
        $items2 = [
            'Id' => $ids2,
            'excludedItems' => $excluded2,
            'preSelectedItem' => $default2,
            'HouseType' => $houseType2
        ];
        MaintenanceTool::updateOrInsert( $id2, $items2 );         
      
    }  

    public function maintenance(){
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
          return $items;
        }        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MaintenanceTool  $maintenanceTool
     * @return \Illuminate\Http\Response
     */
    public function show(MaintenanceTool $maintenanceTool)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MaintenanceTool  $maintenanceTool
     * @return \Illuminate\Http\Response
     */
    public function edit(MaintenanceTool $maintenanceTool)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\MaintenanceTool  $maintenanceTool
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MaintenanceTool $maintenanceTool)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MaintenanceTool  $maintenanceTool
     * @return \Illuminate\Http\Response
     */
    public function destroy(MaintenanceTool $maintenanceTool)
    {
        //
    }
}
