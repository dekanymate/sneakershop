<?php

use App\Models\Order;
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
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('user_id')->references('id')->on('users');
            $table->date('date');
            $table->integer('total');
            $table->timestamps(false);
        });

        Order::create(['user_id'=>1, 'date'=>'2023-01-01', 'total'=>'120000']);
        Order::create(['user_id'=>2, 'date'=>'2023-01-01', 'total'=>'70000']);


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order');
    }
};
