<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RP_SearchController;
use App\Http\Controllers\RP_DocumentsController;

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

<<<<<<< HEAD
Route::get('/registros/documents', [RP_DocumentsController::class, 'regpro'])->name('regpro.nissei');
Route::get('/registros', [RP_DocumentsController::class, 'regProHomepage'])->name('regpro.homepage');
Route::post('/regpro/store', [RP_DocumentsController::class, 'store'])->name('regpro.store');
Route::post('/regpro/update', [RP_DocumentsController::class, 'update'])->name('regpro.update');
Route::get('/regpro/search', [RP_SearchController::class, 'autocomplete'])->name('regpro.autocomplete');
Route::get('/regpro/cargadopor', [RP_SearchController::class, 'cargadopor'])->name('regpro.cargadopor');
Route::get('/search/grupo', [RP_SearchController::class, 'searchGrupoSKU'])->name('regpro.grupoSKU');
Route::get('/regpro/verificar', [RP_SearchController::class, 'verificar'])->name('regpro.verificar');
=======
Route::get('/reca', [RecaRecordController::class, 'reca'])->name('reca.nissei');
Route::get('/reca/records', [RecaRecordController::class, 'recaHomepage'])->name('reca.homepage');
Route::get('/reca/search', [SearchController::class, 'autocomplete'])->name('search.autocomplete');
Route::get('/reca/search/grupo', [SearchController::class, 'searchGrupoSKU'])->name('search.grupoSKU');
Route::post('/reca/store', [RecaRecordController::class, 'store'])->name('reca.store');
Route::post('/reca/update', [RecaRecordController::class, 'update'])->name('reca.update');
>>>>>>> 00cda4acb3797cb18199c6ecee158af8581fe52d
