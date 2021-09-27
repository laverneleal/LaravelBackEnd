<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\SRSTextureResource as SRSTextureResource;

use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\PlanInfoController;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\iCADMaster\PorchTextureController;
use App\Http\Controllers\iCADMaster\RoofController;
use App\Http\Controllers\iCADMaster\ParapetCopingController;
use App\Http\Controllers\iCADMaster\NokitenMizukiriController;
use App\Http\Controllers\iCADMaster\NokitoiController;
use App\Http\Controllers\iCADMaster\TatetoiController;
use App\Http\Controllers\iCADMaster\MizukiriController;
use App\Http\Controllers\iCADMaster\RoofCeilingController;
use App\Http\Controllers\iCADMaster\SashController;
use App\Http\Controllers\iCADMaster\SashGlassController;
use App\Http\Controllers\iCADMaster\BalconyTesuriController;
use App\Http\Controllers\iCADMaster\BalconyFlooringController;
use App\Http\Controllers\iCADMaster\BalconyGlassController;
use App\Http\Controllers\iCADMaster\WoodDeckTextureController;
use App\Http\Controllers\iCADMaster\GenkanTextureController;
use App\Http\Controllers\iCADMaster\GenkanHandleController;
use App\Http\Controllers\iCADMaster\GenkanHandleAdditionalController;
use App\Http\Controllers\iCADMaster\GenkanItemController;
use App\Http\Controllers\iCADMaster\FasciaBoardController;
use App\Http\Controllers\iCADMaster\FormItemsController;
use App\Http\Controllers\iCADMaster\HouseTypeController;
use App\Http\Controllers\iCADMaster\DeliveryBoxController;
use App\Http\Controllers\MaintenanceToolController;

use App\Http\Controllers\API\VersionController;

//Internal
use App\Http\Controllers\iCADMaster\FlooringController;
use App\Http\Controllers\iCADMaster\SymbolMasterController;

use App\Http\Controllers\ShiyoushoMasterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/test', function () {
    return config('app.security');
});

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);


Route::get('shiyoushoMaster/', [ShiyoushoMasterController::class, 'index']);
Route::get('shiyoushoMaster/{req}/{req2}/{req3}', [ShiyoushoMasterController::class, 'getShioRequest']);

///9255306-2020/2-0/1

//Route for Web Application //All Routes Here Need SRS-Key
 Route::middleware('auth:api', 'isAuthorize')->group( function () {
	
	
 Route::post('logout', [RegisterController::class, 'logout']);
 Route::get('serverCookie', [RegisterController::class, 'serverCookie']);

 Route::get('getversioninfo', [VersionController::class, 'getversioninfo']);


 Route::resource('checkPlanIfExist', PlanInfoController::class); //ADDED LINE 2021.03.18

  Route::resource('roof', RoofController::class);
  Route::resource('parapet', ParapetCopingController::class);
  Route::resource('balconyCeiling', NokitenMizukiriController::class);
  Route::resource('gutter', NokitoiController::class);
  
  Route::resource('fascia', FasciaBoardController::class);
  Route::resource('fasciaAluminum', FasciaBoardController::class);



  Route::resource('groundduct', TatetoiController::class);
  Route::resource('mizukiri', MizukiriController::class);
  Route::resource('porch', PorchTextureController::class);
  
  Route::resource('teracotta', PorchTextureController::class);
  Route::resource('teracotta2', PorchTextureController::class);


  Route::resource('genkanDomaTeracotta', PorchTextureController::class);
  Route::resource('genkanDomaTeracotta2', PorchTextureController::class);

  Route::resource('porch2', PorchTextureController::class);
  Route::resource('doma', PorchTextureController::class);
  Route::resource('doma2', PorchTextureController::class);
  Route::resource('slopePorch', PorchTextureController::class);
  Route::resource('slopePorch2', PorchTextureController::class);
  Route::resource('slopePorchTeracotta2', PorchTextureController::class);
  Route::resource('slopePorchTeracotta', PorchTextureController::class);

  Route::resource('terasuTeracotta2', PorchTextureController::class);
  Route::resource('terasuTeracotta', PorchTextureController::class);

  Route::resource('terasu', PorchTextureController::class);
  Route::resource('terasu2', PorchTextureController::class);

  Route::resource('roofCeiling', RoofCeilingController::class);

  Route::resource('sash', SashController::class);  
  Route::resource('sashglass', SashGlassController::class); 


  Route::resource('deliveryboxbodycolor', DeliveryBoxController::class); 
  Route::resource('deliveryboxdoor', DeliveryBoxController::class); 


  Route::resource('balconyTesuri', BalconyTesuriController::class);    
  Route::resource('balconyTesuri2', BalconyTesuriController::class);
  Route::resource('balconyTesuri3', BalconyTesuriController::class);
  Route::resource('balconyTesuri3F', BalconyTesuriController::class);
  Route::resource('balconyTesuri3F2', BalconyTesuriController::class);

  Route::resource('balconyCoping', BalconyTesuriController::class);    
  Route::resource('balconyCoping2', BalconyTesuriController::class);
  Route::resource('balconyCoping3', BalconyTesuriController::class);
  Route::resource('balconyCoping3F', BalconyTesuriController::class);
  Route::resource('balconyCoping3F2', BalconyTesuriController::class); 
    
  Route::resource('balconyGlass', BalconyGlassController::class);     
  Route::resource('balconyGlass2', BalconyGlassController::class);  
  Route::resource('balconyGlass3', BalconyGlassController::class);  
  Route::resource('balconyGlass3F', BalconyGlassController::class);  
  Route::resource('balconyGlass3F2', BalconyGlassController::class);   

  Route::resource('balconyFlooring', BalconyFlooringController::class);      
  Route::resource('balconyFlooring2', BalconyFlooringController::class);    
  Route::resource('balconyFlooring3', BalconyFlooringController::class);    
  Route::resource('balconyFlooring3F', BalconyFlooringController::class);    
  Route::resource('balconyFlooring3F2', BalconyFlooringController::class);
    
    
  Route::resource('roofGardenTesuri2F', BalconyTesuriController::class);
  Route::resource('roofGardenTesuri3F', BalconyTesuriController::class);
  Route::resource('roofGardenCoping2F', BalconyTesuriController::class); 
  Route::resource('roofGardenCoping3F', BalconyTesuriController::class); 
  Route::resource('roofGardenFlooring2F', BalconyFlooringController::class);    
  Route::resource('roofGardenFlooring3F', BalconyFlooringController::class);    


    Route::resource('wooddeck', WoodDeckTextureController::class);   
    Route::resource('wooddeck2', WoodDeckTextureController::class);   
    Route::resource('wooddeckFence', WoodDeckTextureController::class);   
    Route::resource('wooddeckFence2', WoodDeckTextureController::class);   


    Route::resource('genkantextures', GenkanTextureController::class);
    Route::resource('genkantextures2', GenkanTextureController::class); 
    
    Route::resource('genkanhandle', GenkanHandleController::class);
    Route::resource('genkanhandle2', GenkanHandleController::class);

    Route::resource('genkanhandleadditional', GenkanHandleAdditionalController::class);
    Route::resource('genkanitem', GenkanItemController::class);

    Route::resource('clItems', FormItemsController::class);
    Route::resource('houseTypes', HouseTypeController::class);

    Route::post('savePlans', [PlanInfoController::class, 'store']);

    //Internals
    Route::resource('flooring', FlooringController::class);
    Route::resource('internalDoor', SymbolMasterController::class); 
    Route::resource('stair', SymbolMasterController::class);

    Route::resource('systemkitchen', SymbolMasterController::class);
    Route::resource('systemkitchen2', SymbolMasterController::class);
    Route::resource('systemkitchen3', SymbolMasterController::class);

    //Maintenance
    Route::post('saveMaintenanceTool', [MaintenanceToolController::class, 'store' ]);   
    Route::post('saveMaintenanceTool2', [MaintenanceToolController::class, 'twocategory' ]);
    Route::post('saveMaintenanceTool3', [MaintenanceToolController::class, 'store2' ]);

    Route::resource('maintenanceShowAll', MaintenanceToolController::class );
    
});

//route for Delphi Application
Route::middleware('isAuthorize')->group( function () {
	Route::get('getPlansInfo/{req}', [PlanInfoController::class, 'getallitems']);
});


// Route::middleware('auth:api')->get('/user', function (Request $request) {
    
//     if ($request->hasHeader('SRS-Key')) {
//         if ($request->header('SRS-Key') == 'sample'){
//             return $request->user();
//         }else{
//             return 'Unauthenticated';
//         }
//     }else{
//         return $request->user();
//     }
    
// });

