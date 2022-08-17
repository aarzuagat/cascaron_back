<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LoteController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StockController;
use App\Http\Controllers\StockOperationController;
use App\Http\Controllers\TagController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('me2', [AuthController::class, 'me2']);

});
Route::group([
    'middleware' => 'auth:api',
    'prefix' => '',

], function ($router) {
    Route::apiResource('categories', CategoryController::class)->except('index');
    Route::apiResource('tags', TagController::class)->except('index');
    Route::apiResource('roles', RoleController::class)->except('index');
    Route::apiResource('orders', OrderController::class)->except('index');
    Route::apiResource('products', ProductController::class)->except('index');
    Route::apiResource('notifications', NotificationController::class)->except('index');
    Route::apiResource('lotes', LoteController::class);
    Route::apiResource('stock-operation', StockOperationController::class);
    Route::post('stock-operation-all', [StockOperationController::class, 'find']);
    Route::post('sellProduct', [ProductController::class, 'sellProduct']);
    Route::post('tag-download', [ProductController::class, 'downloadTag']);
    Route::post('stock-operation-cancel', [StockOperationController::class, 'cancel']);
    Route::post('filter-operations', [StockOperationController::class, 'filterOperations']);
});

Route::get('categories', [CategoryController::class, 'index']);
Route::get('tags', [TagController::class, 'index']);
Route::get('roles', [RoleController::class, 'index']);
Route::get('orders', [OrderController::class, 'index']);
Route::get('products', [ProductController::class, 'index']);
Route::get('notifications', [NotificationController::class, 'index']);
Route::apiResource('stocktraces', 'StockTraceController');
