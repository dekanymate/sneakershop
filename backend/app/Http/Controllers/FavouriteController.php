<?php

namespace App\Http\Controllers;
use App\Models\Favourite;
use Illuminate\Http\Request;

class FavouriteController extends Controller
{
    public function index(){
        $favourites =  Favourite::all();
        return $favourites;
    }
    
    public function show($id)
    {
        $favourites = Favourite::find($id);
        return $favourites;
    }
    public function destroy($id)
    {
        Favourite::find($id)->delete();
    }
    public function store(Request $request)
    {
        $favourites = new Favourite();
        $favourites->sneaker_id = $request->sneaker_id;
        $favourites->user_id = $request->user_id;
        $favourites->save();
    }

    public function update(Request $request, $id)
    {
        $favourites = Favourite::find($id);
        $favourites->favourite = $request->favourite;
    }
}
