<?php

return [


    'paths' => ['api/*', 'sanctum/csrf-cookie', 'csrf-token', 'admin/*'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
    'http://localhost:3000',
    'http://localhost:3001',

    ],

    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,


    'supports_credentials' => true,

];

