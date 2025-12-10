<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's route middleware groups.
     */
    protected $middlewareGroups = [
        'web' => [
            // Add web middleware here if needed
        ],

        'api' => [
            \App\Http\Middleware\Cors::class,  // your CORS middleware
        ],
    ];

    /**
     * The application's route middleware.
     */
    protected $routeMiddleware = [
        // You can add route-specific middleware here if needed
    ];
}
