<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SneakerController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\OrderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('registerr'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


// Brands
Route::get('/brands', [BrandController::class, 'index']);
Route::post('/new-brand', [BrandController::class, 'store']);
Route::delete('/delete-brand', [BrandController::class, 'destroy']);

// User

Route::post('/new-user', [UserController::class, 'store']);
Route::get('/users',  [UserController::class, 'index']);
Route::put('/update-user', [UserController::class, 'update']);
Route::delete('/delete-user', [UserController::class, 'destroy']);

// Sneaker

Route::post('/new-sneaker', [SneakerController::class, 'store']);
Route::get('/sneakers', [SneakerController::class, 'index']);
Route::put('/update-sneaker',[SneakerController::class, 'update']);
Route::delete('delete-sneaker', [SneakerController::class, 'destroy']);


// Stock

Route::get('/stocks', [StockController::class, 'index']);
Route::put('/update-stocks', [StockController::class, 'update']);

// Order

Route::get('/orders', [OrderController::class, 'index']);
Route::delete('/delete-order', [OrderController::class, 'destroy']);

// Order Items

Route::get('/orders/${orderId}/items', [OrderItemController::class, 'index']);