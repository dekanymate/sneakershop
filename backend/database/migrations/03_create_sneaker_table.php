<?php

use App\Models\Sneaker;
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
        Schema::create('sneakers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->integer('price');
            $table->string('description');
            $table->binary('image');
            $table->integer('article_number');
            $table->foreignId('brand_id')->references('id')->on('brands');
        });

        Sneaker::create(['name'=>"Balenciaga Triple S", 'price'=>"259990", 'description'=>'A cipőben az S a talpat jelenti. Ennek a cipőnek pedig három talpa van.', 'image'=>"triples.png",'article_number'=>'135234','brand_id'=>3]);
        Sneaker::create(['name'=>"Nike Dunk Low Panda", 'price'=>"119990", 'description'=>'A cipőben az S a talpat jelenti. Ennek a cipőnek pedig három talpa van.', 'image'=>"panda.png",'article_number'=>'584273','brand_id'=>1]);
        Sneaker::create(['name'=>"Jordan 1 Low Purple Mocha", 'price'=>"169990", 'description'=>'A fehér és a mokkabarna meglehetősen egyszerű megoldását a felső végén élénk lila színű popsokkal rázzák fel.', 'image'=>"purple_mocha.png",'article_number'=>'673217','brand_id'=>2]);
        Sneaker::create(['name'=>"Yeezy Slide", 'price'=>"59990", 'description'=>'A Yeezy Slide papucs teljesen letisztult, gyakorlatilag egyetlen EVA anyagdarabból áll.', 'image'=>"slide.png",'article_number'=>'654217','brand_id'=>4]);
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sneaker');
    }
};
