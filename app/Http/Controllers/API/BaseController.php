<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller as Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    //
    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($result, $message)
    {
    	$response = [
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ];

        //ADDED LINE 2021.05.05 //JAZZ
        //check if the user agent is delphi
        if (stripos($_SERVER['HTTP_USER_AGENT'], 'Indy')){
            $tmpArray = [];

            foreach($response['data'] as $itemData){
              array_push($tmpArray, $itemData);
            }
            return response()->json($tmpArray, 200);

        }else{
          return response()->json($response, 200);
        }
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages = [], $code = 404)
    {
    	$response = [
            'success' => false,
            'message' => $error,
        ];


        if(!empty($errorMessages)){
            $response['data'] = $errorMessages;
        }


        return response()->json($response, $code);
    }








        
}
