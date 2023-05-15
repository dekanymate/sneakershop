<?php

namespace App\Http\Controllers;
use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index(){
        $brands =  Brand::all();
        return $brands;
    }

    public function show($id)
    {
        $book = Brand::find($id);
        return $book;
    }
    public function destroy(Request $request)
    {
        Brand::find($request->id)->delete();
    }
    public function store(Request $request)
    {
        $Brand = new Brand();
        $Brand->name = $request->name;
        $Brand->save();
    }

    public function update(Request $request, $id)
    {
        $Brand = Brand::find($id);
        $Brand->name = $request->name;
    }
}