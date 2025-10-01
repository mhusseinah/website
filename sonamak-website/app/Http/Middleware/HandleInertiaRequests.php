<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\File;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = $request->session()->get('locale', 'en');
        App::setLocale($locale);

        $translationsPath = lang_path($locale . '/translations.php');
        $translations = File::exists($translationsPath) ? include $translationsPath : [];

        return [
            ...parent::share($request),
            'auth' => [
                // Even without full auth scaffolding, it's good practice
                // to have the user object available for potential future use.
                'user' => $request->user(),
            ],
            'locale' => $locale,
            'translations' => $translations,
        ];
    }
}