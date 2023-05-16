<?php

use App\Models\Stock;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->foreignId('sneaker_id')->references('id')->on('sneakers');
            $table->integer('size');
            $table->integer('amount');
            $table->integer('current_price');
            $table->primary(['sneaker_id','size']);
            $table->timestamps(false);
        });

        Stock::create(['sneaker_id'=>"1", 'size'=>'42', 'amount'=>'15', 'current_price'=>'168000']);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('stock');
    }
};
