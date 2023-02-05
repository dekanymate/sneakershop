<?php

use App\Http\Controllers\BrandController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {
    return view('index');
});

// Brands
Route::get('/brands', [BrandController::class, 'index']);
Route::post('/new-brand', [BrandController::class, 'store']);
Route::post('/delete-brand', [BrandController::class, 'destroy']);

Route::get('/api/brands/{id}', [BookController::class, 'show']);

// User

Route::post('/new-user', [UserController::class, 'store']);