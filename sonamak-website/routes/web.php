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

// Solutions by Specialty
Route::get('/solutions/dentistry', fn() => Inertia::render('Solutions/Dentistry'))->name('solutions.dentistry');
Route::get('/solutions/oncology', fn() => Inertia::render('Solutions/Oncology'))->name('solutions.oncology');
Route::get('/solutions/ob-gyn', fn() => Inertia::render('Solutions/ObGyn'))->name('solutions.ob-gyn');
Route::get('/solutions/multi-specialty', fn() => Inertia::render('Solutions/MultiSpecialty'))->name('solutions.multi-specialty');
Route::get('/solutions/diagnostics', fn() => Inertia::render('Solutions/Diagnostics'))->name('solutions.diagnostics');

// Solutions by Role
Route::get('/solutions/owner-ceo', fn() => Inertia::render('Solutions/OwnerCeo'))->name('solutions.owner-ceo');
Route::get('/solutions/clinic-manager', fn() => Inertia::render('Solutions/ClinicManager'))->name('solutions.clinic-manager');

// ROI Page
Route::get('/solutions/roi', fn() => Inertia::render('Solutions/Roi'))->name('solutions.roi');

Route::get('/pricing', function () {
    return Inertia::render('Pricing/Index');
})->name('pricing.index');

Route::get('/resources', function () {
    return Inertia::render('Resources/Index');
})->name('resources.index');

// Blog Routes
Route::get('/blog', function () {
    return Inertia::render('Resources/Blog/Index');
})->name('blog.index');

Route::get('/blog/{slug}', function ($slug) {
    // In a real app, you would fetch the post from the database based on the slug
    return Inertia::render('Resources/Blog/Show', ['slug' => $slug]);
})->name('blog.show');

// Case Studies Routes
Route::get('/case-studies', function () {
    return Inertia::render('Resources/CaseStudies/Index');
})->name('case-studies.index');

Route::get('/case-studies/{slug}', function ($slug) {
    return Inertia::render('Resources/CaseStudies/Show', ['slug' => $slug]);
})->name('case-studies.show');

// Other Resource Routes
Route::get('/help', fn() => Inertia::render('Resources/HelpCenter'))->name('help-center');

Route::get('/company', function () {
    // Redirect to the 'About' page as the default company page
    return redirect()->route('company.about');
})->name('company.index');

Route::get('/company/about', fn() => Inertia::render('Company/About'))->name('company.about');
Route::get('/company/timeline', fn() => Inertia::render('Company/Timeline'))->name('company.timeline');
Route::get('/company/leadership', fn() => Inertia::render('Company/Leadership'))->name('company.leadership');
Route::get('/company/careers', fn() => Inertia::render('Company/Careers'))->name('company.careers');
Route::get('/company/partners', fn() => Inertia::render('Company/Partners'))->name('company.partners');
Route::get('/company/press', fn() => Inertia::render('Company/Press'))->name('company.press');
Route::get('/company/events', fn() => Inertia::render('Company/Events'))->name('company.events');
Route::get('/contact-us', fn() => Inertia::render('Company/Contact'))->name('contact-us');

Route::post('/contact-sales', [\App\Http\Controllers\ContactSalesController::class, 'store'])->name('contact-sales.store');

Route::get('/trust', function () {
    return Inertia::render('Trust/Index');
})->name('trust.index');

Route::get('/trust/hipaa', function () {
    return Inertia::render('Trust/Hipaa');
})->name('trust.hipaa');

Route::get('/trust/security', function () {
    return Inertia::render('Trust/Security');
})->name('trust.security');

Route::get('/trust/privacy', function () {
    return Inertia::render('Trust/Privacy');
})->name('trust.privacy');

Route::get('/trust/dpa', function () {
    return Inertia::render('Trust/Dpa');
})->name('trust.dpa');

Route::get('/trust/baa', function () {
    return Inertia::render('Trust/Baa');
})->name('trust.baa');

Route::get('/trust/subprocessors', function () {
    return Inertia::render('Trust/Subprocessors');
})->name('trust.subprocessors');

Route::get('/trust/sla', function () {
    return Inertia::render('Trust/Sla');
})->name('trust.sla');

Route::get('/trust/responsible-disclosure', function () {
    return Inertia::render('Trust/ResponsibleDisclosure');
})->name('trust.responsible-disclosure');

Route::get('/accessibility', function () {
    return Inertia::render('Accessibility');
})->name('accessibility');


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

// BAA Request Form
Route::get('/request-baa', fn() => Inertia::render('RequestBaa'))->name('request-baa');
Route::post('/request-baa', [\App\Http\Controllers\BaaRequestController::class, 'store'])->name('request-baa.store');

// Legal Pages
Route::prefix('legal')->name('legal.')->group(function () {
    Route::get('/terms', fn() => Inertia::render('Legal/Terms'))->name('terms');
    Route::get('/privacy', fn() => Inertia::render('Legal/Privacy'))->name('privacy');
    Route::get('/cookies', fn() => Inertia::render('Legal/Cookies'))->name('cookies');
});

// Language Switcher Route
Route::get('/language/{locale}', [\App\Http\Controllers\LocalizationController::class, 'setLocale'])->name('language.switch');

// For now, we will keep the auth routes file but it can be removed if not needed.
// If a login is needed for an admin dashboard, it would be separate.
// require __DIR__.'/auth.php';