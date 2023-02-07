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
    public function destroy($id)
    {
        User::find($id)->delete();
    }
    public function store(Request $request)
    {
        $User = new User();
        $User->name = $request->name;
        $User->email = $request->email;
        $User->password = $request->password;
        $User->city = $request->city;
        $User->zipcode = $request->zipcode;
        $User->address_details = $request->addressDetails;
        $User->save();
    }

    public function update(Request $request, User $user)
    {
        $user->update($request->all());
        return $user;
    }
}


