<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\DB; ///sample only

class RegisterController extends BaseController
{
    
   //
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
	 
      
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name'       => 'required',
            'email'      => 'required|email',
            'password'   => 'required',
            'c_password' => 'required|same:password',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $input             = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user              = User::create($input);
        $success['token']  = $user->createToken('MyApp')->accessToken;
        $success['name']   = $user->name;
   
        return $this->sendResponse($success, 'User register successfully.');
    }
   
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
       if(Auth::attempt(['email' => $request->email, 'password' => $request->password]))
       { 
          $user        = Auth::user(); 
          $credentials = request(['email', 'password']); 
          $token       = $user->createToken('SRS')->accessToken;
          $cookie      = $this->getCookieDetails($token);

          //ADDED LINE 2021.05.05 //JAZZ
          $addToken = array("token" => $token);
          $loginInfo = json_decode($user, true);
          $loginInfo = array_merge($loginInfo, $addToken);
  
          return response()->json(['logged_user' => $loginInfo], 200)
            ->cookie(
              $cookie['name'], 
              $cookie['value'], 
              $cookie['minutes'], 
              $cookie['path'], 
              $cookie['domain'], 
              $cookie['secure'], 
              $cookie['httponly'], 
              $cookie['samesite']
            );
        } 
        else{ 
          return response()->json(['error' => 'invalid-credentials'], 422);
        } 
    }

    public function serverCookie(Request $request){    
      return $request->cookie('srs_session');
    }


    private function getCookieDetails($token)
    {
        return [
            'name'     => 'srs_session',
            'value'    => $token,
            'minutes'  => 3000,
            'path'     => null,
            'domain'   => null,
            // 'secure' => true, // for production
            'secure'   => null, // for localhost
            'httponly' => true,
            'samesite' => true,
        ];
    }


    public function logout(Request $request)
    {
     //if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
      //$request->user()->token()->revoke(); // revoked the token

      //$request->user()->token()->revoke(); 

      $id = User::Select('id')->where('email',$request->email)->get();
      $post = DB::table('oauth_access_tokens');
      $post->orderBy('updated_at', 'DESC')->first();
      $post->delete(); //$post->update(['revoked' => 1 ]);
         
      \Cookie::queue(\Cookie::forget('srs_session'));
      return ['isLogged' => false]; 
     //}


    }
}
