<?php

namespace App\Http\Controllers;

use App\Models\ContactSalesRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class ContactSalesController extends Controller
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
            'company_name' => 'nullable|string|max:255',
            'phone_number' => 'nullable|string|max:20',
            'message' => 'nullable|string|max:2000',
        ]);

        ContactSalesRequest::create($validated);

        return Redirect::route('contact-sales')->with('success', 'Thank you! Your message has been sent to our sales team.');
    }
}