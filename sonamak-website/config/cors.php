<?php

return [

    /*
    |--------------------------------------------------------------------------
    | CORS Preflight Paths
    |--------------------------------------------------------------------------
    |
    | You can enable CORS for all paths by setting this value to `['*']`.
    | Or you can restrict CORS to specific paths/patterns by listing them
    | here. You may also use wildcards, such as `api/*` or `*`.
    |
    */

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Methods
    |--------------------------------------------------------------------------
    |
    | This value specifies the HTTP methods that are allowed to be used
    | when making a CORS request. You can list specific methods or
    | use `['*']` to allow all methods.
    |
    */

    'allowed_methods' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    |
    | This value specifies the origins that are allowed to make CORS
    | requests to your application. You can list specific origins
    | or use `['*']` to allow all origins.
    |
    */

    'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],

    /*
    |--------------------------------------------------------------------------
    | Allowed Origins Patterns
    |--------------------------------------------------------------------------
    |
    | This value specifies the origins that are allowed to make CORS
    | requests to your application using a regular expression.
    |
    */

    'allowed_origins_patterns' => [],

    /*
    |--------------------------------------------------------------------------
    | Allowed Headers
    |--------------------------------------------------------------------------
    |
    | This value specifies the HTTP headers that are allowed to be used
    | when making a CORS request. You can list specific headers or
    | use `['*']` to allow all headers.
    |
    */

    'allowed_headers' => ['*'],

    /*
    |--------------------------------------------------------------------------
    | Exposed Headers
    |--------------------------------------------------------------------------
    |
    | This value specifies the HTTP headers that are exposed to the browser
    | in a CORS response. You can list specific headers or use `[]` to
    | expose no headers.
    |
    */

    'exposed_headers' => [],

    /*
    |--------------------------------------------------------------------------
    | Max Age
    |--------------------------------------------------------------------------
    |
    | This value specifies the number of seconds that the browser can cache
    | a preflight request. A "preflight" request is an OPTIONS request
    | that is made before the actual request to check for CORS.
    |
    */

    'max_age' => 0,

    /*
    |--------------------------------------------------------------------------
    | Supports Credentials
    |--------------------------------------------------------------------------
    |
    | This value specifies whether the browser should send credentials
    | (cookies, HTTP authentication) with the CORS request.
    |
    */

    'supports_credentials' => true,

];