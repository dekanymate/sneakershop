<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'new-brand',
        'delete-brand',
        'new-user',
        'update-user',
        'delete-user',
        'new-sneaker',
        'login',
        'delete-sneaker',
        'register',
        'delete-order',
        'update-stocks'
    ];
    
}
