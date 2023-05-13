<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

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
        $User = new User();
        $User->name = $request->name;
        $User->email = $request->email;
        $user->password = Hash::make($request->password);
        $User->city = $request->city;
        $User->zipcode = $request->zipcode;
        $User->address_details = $request->addressDetails;
        $User->save();
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


