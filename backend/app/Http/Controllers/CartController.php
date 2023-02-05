<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index(){
        $carts =  Cart::all();
        return $carts;
    }
    
    public function show($id)
    {
        $cart = Cart::find($id);
        return $cart;
    }
    public function destroy($id)
    {
        Cart::find($id)->delete();
    }
    public function store(Request $request)
    {
        $Cart = new Cart();
        $Cart->cart = $request->cart;
        $Cart->save();
    }

    public function update(Request $request, $id)
    {
        $Cart = Cart::find($id);
        $Cart->cart = $request->cart;
    }
}

