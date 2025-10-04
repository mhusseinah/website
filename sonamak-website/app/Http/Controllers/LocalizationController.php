<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

class LocalizationController extends Controller
{
    public function setLocale($locale)
    {
        if (in_array($locale, array_keys(LaravelLocalization::getSupportedLocales()))) {
            app()->setLocale($locale);
            session()->put('locale', $locale);
        }

        return Redirect::back();
    }
}