<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Route; //ADDED LINE 2021.03.15

class SRSAuthentication extends BaseController
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */

    public function handle(Request $request, Closure $next)
    {
        if( config('app.security') == $request->header('SRS-Key') ){   
            return $next($request);
        }
        else {
            return response()->json(['error' => 'Unauthorized'], 403);
            // $user = Auth::user(); 
            // $success['name'] =  $user->name;
            // return $this->sendResponse($success, 'User login successfully.');

        }
    }
}
