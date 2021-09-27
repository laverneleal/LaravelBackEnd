<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Version;

class VersionController extends Controller
{
    //
    public function getversioninfo(){
    	$items = Version::all();
    	return $items;
    }
}
