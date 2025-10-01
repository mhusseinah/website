<?php

use App\Http\Controllers\BaaRequestController;
use App\Http\Controllers\ContactSalesController;
use App\Http\Controllers\DemoRequestController;
use App\Http\Controllers\LocalizationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// --- CORE MARKETING PAGES ---
Route::get('/', fn() => Inertia::render('Welcome'))->name('home');
Route::get('/product', fn() => Inertia::render('Product/Index'))->name('product.index');
Route::get('/solutions', fn() => Inertia::render('Solutions/Index'))->name('solutions.index');
Route::get('/pricing', fn() => Inertia::render('Pricing/Index'))->name('pricing.index');
Route::get('/resources', fn() => Inertia::render('Resources/Index'))->name('resources.index');

// --- PRODUCT SUB-PAGES ---
Route::get('/product/scheduling', fn() => Inertia::render('Product/Scheduling'))->name('product.scheduling');
Route::get('/product/ehr', fn() => Inertia::render('Product/EHR'))->name('product.ehr');
Route::get('/product/billing', fn() => Inertia::render('Product/Billing'))->name('product.billing');
// Add other module routes as they are built...

// --- SOLUTIONS PAGES ---
Route::get('/solutions/dentistry', fn() => Inertia::render('Solutions/Dentistry'))->name('solutions.dentistry');
Route::get('/solutions/oncology', fn() => Inertia::render('Solutions/Oncology'))->name('solutions.oncology');
Route::get('/solutions/owner-ceo', fn() => Inertia::render('Solutions/OwnerCeo'))->name('solutions.owner-ceo');
Route::get('/solutions/clinic-manager', fn() => Inertia::render('Solutions/ClinicManager'))->name('solutions.clinic-manager');
// Add other solution routes...

// --- RESOURCES HUB ---
Route::get('/blog', fn() => Inertia::render('Resources/Blog/Index'))->name('blog.index');
Route::get('/blog/{slug}', fn($slug) => Inertia::render('Resources/Blog/Show', ['slug' => $slug]))->name('blog.show');
Route::get('/case-studies', fn() => Inertia::render('Resources/CaseStudies/Index'))->name('case-studies.index');
Route::get('/case-studies/{slug}', fn($slug) => Inertia::render('Resources/CaseStudies/Show', ['slug' => $slug]))->name('case-studies.show');
Route::get('/help', fn() => Inertia::render('Resources/HelpCenter'))->name('help-center'); // Placeholder

// --- COMPANY PAGES ---
Route::get('/company', fn() => redirect()->route('company.about'))->name('company.index');
Route::get('/company/about', fn() => Inertia::render('Company/About'))->name('company.about');
Route::get('/company/careers', fn() => Inertia::render('Company/Careers'))->name('company.careers');
Route::get('/company/partners', fn() => Inertia::render('Company/Partners'))->name('company.partners');
Route::get('/contact-us', fn() => Inertia::render('Company/Contact'))->name('contact-us');
// Add other company routes...

// --- TRUST & COMPLIANCE CENTER ---
Route::get('/trust', fn() => Inertia::render('Trust/Index'))->name('trust.index');
Route::get('/trust/hipaa', fn() => Inertia::render('Trust/Hipaa'))->name('trust.hipaa');
Route::get('/trust/security', fn() => Inertia::render('Trust/Security'))->name('trust.security');
Route::get('/trust/privacy', fn() => Inertia::render('Trust/Privacy'))->name('trust.privacy');
Route::get('/trust/dpa', fn() => Inertia::render('Trust/Dpa'))->name('trust.dpa');
Route::get('/trust/baa', fn() => Inertia::render('Trust/Baa'))->name('trust.baa');
Route::get('/trust/subprocessors', fn() => Inertia::render('Trust/Subprocessors'))->name('trust.subprocessors');
Route::get('/trust/sla', fn() => Inertia::render('Trust/Sla'))->name('trust.sla');
Route::get('/trust/responsible-disclosure', fn() => Inertia::render('Trust/ResponsibleDisclosure'))->name('trust.responsible-disclosure');
Route::get('/accessibility', fn() => Inertia::render('Accessibility'))->name('accessibility');

// --- LEGAL PAGES ---
Route::prefix('legal')->name('legal.')->group(function () {
    Route::get('/terms', fn() => Inertia::render('Legal/Terms'))->name('terms');
    Route::get('/privacy', fn() => Inertia::render('Legal/Privacy'))->name('privacy');
    Route::get('/cookies', fn() => Inertia::render('Legal/Cookies'))->name('cookies');
});

// --- CONVERSION & FORM SUBMISSIONS ---
Route::get('/demo', fn() => Inertia::render('Demo'))->name('demo');
Route::post('/demo', [DemoRequestController::class, 'store'])->name('demo.store');

Route::get('/contact-sales', fn() => Inertia::render('ContactSales'))->name('contact-sales');
Route::post('/contact-sales', [ContactSalesController::class, 'store'])->name('contact-sales.store');

Route::get('/request-baa', fn() => Inertia::render('RequestBaa'))->name('request-baa');
Route::post('/request-baa', [BaaRequestController::class, 'store'])->name('request-baa.store');


// --- UTILITY ROUTES ---
Route::get('/language/{locale}', [LocalizationController::class, 'setLocale'])->name('language.switch');