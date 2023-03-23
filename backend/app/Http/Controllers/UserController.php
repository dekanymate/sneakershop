<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(){
        $users =  User::all();
        return $users;
    }
    
    public function show($id)
    {
        $user = User::find($id);
        return $user;
    }
    public function destroy(Request $request)
    {
        User::find($request->id)->delete();
    }
    public function store(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string',
        'email' => 'required|email|unique:users,email',
        'password' => [
            'required',
            'string',
            'min:8',
            'regex:/^(?=.*[A-Z])(?=.*\d).+$/',
        ],
        'city' => 'required|string',
        'zipcode' => 'required|string',
        'addressDetails' => 'required|string',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'success' => false,
            'message' => 'Validation failed',
            'errors' => $validator->errors(),
        ], 422);
    }

    $User = new User();
    $User->name = $request->name;
    $User->email = $request->email;
    $User->password = $request->password;
    $User->city = $request->city;
    $User->zipcode = $request->zipcode;
    $User->address_details = $request->addressDetails;
    $User->save();

    return response()->json([
        'success' => true,
        'message' => 'User created successfully',
        'data' => $User,
    ], 201);
}

    public function update(Request $request)
    {
        $User = User::find($request->id);
        $User->name = $request->name;
        $User->email = $request->email;
        $User->city = $request->city;
        $User->zipcode = $request->zipcode;
        $User->address_details = $request->address_details;
        $User->save();
    }

    public function login(Request $request)
{
    $validatedData = $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    $credentials = [
        'email' => $validatedData['email'],
        'password' => $validatedData['password'],
    ];

    if (Auth::attempt($credentials)) {
        // Authentication passed...
        return redirect('/brands');
    }

    return redirect()->back()->withInput()->with('error', 'Incorrect email or password');
}

}


