<?php

namespace App\Http\Controllers;
use App\Models\Stock;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function index(){
        $stocks =  Stock::all();
        return $stocks;
    }
    
    public function show($id)
    {
        $stock = Stock::find($id);
        return $stock;
    }
    public function destroy(Request $request)
    {
        Stock::find($request->id)->delete();
    }
    public function store(Request $request)
    {
        $Stock = new Stock();
        $Stock->name = $request->name;
        $Stock->save();
    }

    public function update(Request $request, $id)
    {
        $Stock = Stock::find($id);
        $Stock->sneaker_id = $request->sneaker_id;
        $Stock->size = $request->size;
        $Stock->amount = $request->amount;
        $Stock->current_price = $request->current_price;
    }
}
