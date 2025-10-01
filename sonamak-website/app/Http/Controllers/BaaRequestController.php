<?php

namespace App\Http\Controllers;

use App\Models\BaaRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BaaRequestController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'clinic_name' => 'required|string|max:255',
            'contact_title' => 'nullable|string|max:255',
        ]);

        BaaRequest::create($validated);

        return Redirect::route('request-baa')->with('success', 'Thank you! Your BAA request has been submitted. Our compliance team will be in touch shortly.');
    }
}