<?php

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

// Static marketing pages
Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('/product', function () {
    return Inertia::render('Product/Index');
})->name('product.index');

Route::get('/solutions', function () {
    return Inertia::render('Solutions/Index');
})->name('solutions.index');

Route::get('/pricing', function () {
    return Inertia::render('Pricing/Index');
})->name('pricing.index');

Route::get('/resources', function () {
    return Inertia::render('Resources/Index');
})->name('resources.index');

Route::get('/company', function () {
    return Inertia::render('Company/Index');
})->name('company.index');

Route::get('/trust', function () {
    return Inertia::render('Trust/Index');
})->name('trust.index');


// Conversion pages
Route::get('/demo', function () {
    return Inertia::render('Demo');
})->name('demo');

Route::post('/demo', [\App\Http\Controllers\DemoRequestController::class, 'store'])->name('demo.store');

Route::get('/contact-sales', function () {
    return Inertia::render('ContactSales');
})->name('contact-sales');

// Placeholder for module-specific routes which can be expanded later
Route::get('/product/{module}', function ($module) {
    // This is a simplified example; in a real app, you'd have a controller
    // and validate the module exists.
    $page = 'Product/' . ucfirst($module);
    return Inertia::render($page);
})->name('product.module');

// Language Switcher Route
Route::get('/language/{locale}', [\App\Http\Controllers\LocalizationController::class, 'setLocale'])->name('language.switch');

// For now, we will keep the auth routes file but it can be removed if not needed.
// If a login is needed for an admin dashboard, it would be separate.
// require __DIR__.'/auth.php';