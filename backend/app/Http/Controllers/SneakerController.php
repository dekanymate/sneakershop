<?php

namespace App\Http\Controllers;
use App\Models\Sneaker;
use Illuminate\Http\Request;

class SneakerController extends Controller
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
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'article_number' => 'nullable',
            'image' => 'nullable|url',
            'brand_id' => 'required|exists:brands,id',
        ]);

        $sneaker = Sneaker::create($validatedData);

        return response()->json([
            'message' => 'Sneaker created successfully.',
            'sneaker' => $sneaker,
        ], 201);
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


