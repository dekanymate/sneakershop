<?php

namespace App\Http\Controllers;
use App\Models\Sneaker;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index(){
        $sneakers =  Sneaker::all();
        return $sneakers;
    }
    
    public function show($id)
    {
        $sneaker = Sneaker::find($id);
        return $sneaker;
    }
    public function destroy(Request $request)
    {
        Sneaker::find($request->id)->delete();
    }
    public function store(Request $request)
    {
        $Snekaer = new Sneaker();
        $Sneaker->name = $request->sneaker;
        $Sneaker->price = $request->price;
        $Sneaker->description = $request->description;
        $Sneaker->article_number = $request->desctiption;
        $Sneaker->image = $request->image;
        $Sneaker->brand_id = $request->brand_id;
        $Sneaker->save();
    }

    public function update(Request $request, $id)
    {
        $Sneaker = Sneaker::find($id);
        $Sneaker->name = $request->sneaker;
        $Sneaker->price = $request->price;
        $Sneaker->description = $request->description;
        $Sneaker->article_number = $request->desctiption;
        $Sneaker->image = $request->image;
        $Sneaker->brand_id = $request->brand_id;

        
    }
}


