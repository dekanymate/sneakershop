<?php

namespace App\Http\Controllers;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
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
        $Cart->sneaker_id = $request->sneaker_id;
        $Cart->user_id = $request->user_id;
        $Cart->save();
    }

    public function update(Request $request, $id)
    {
        $Cart = Cart::find($id);
        $Cart->cart = $request->cart;
    }
}


