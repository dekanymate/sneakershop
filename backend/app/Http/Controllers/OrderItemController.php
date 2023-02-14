<?php

namespace App\Http\Controllers;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){
        $orderitems =  OrderItem::all();
        return $orderitems;
    }
    
    public function show($id)
    {
        $orderitem = OrderItem::find($id);
        return $orderitem;
    }
    public function destroy(Request $request)
    {
        OrderItems::find($request->id)->delete();
    }
    public function store(Request $request)
    {
        $OrderItem = new Order();
        $OrderItem->id = $request->id;
        $OrderItem->save();
    }

    public function update(Request $request, $id)
    {
        $OrderItem = OrderItem::find($id);
        $OrderItem->orderitem = $request->orderitem;
    }
}


