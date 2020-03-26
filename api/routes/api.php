<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("v1/theme/by/names", "Apicontroller@themes");
Route::get("v1/banner/name", "Apicontroller@banner");
Route::get("v1/category/grid/all", "Apicontroller@grid");
Route::get("v1/activity/name/a-2", "Apicontroller@activity");
Route::get("v1/theme/name/{name}/with_spu", "Apicontroller@themeSpu");
Route::get('v1/spu/latest', 'Apicontroller@spu');
