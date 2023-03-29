<?php

namespace App\Http\Controllers;
use App\Models\Stock;
use Illuminate\Http\Request;

class StockController extends Controller
{
    public function index(){
        $stocks =  Stock::all();
        return $stocks;
    }

    public function update(Request $request, $id)
{
    $stock = Stock::find($id);
    $stock->size = $request->size;
    $stock->amount = $request->amount;
    $stock->current_size = $request->current_size;
    $stock->save();
}

}
