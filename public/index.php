<?php

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

if (file_exists($maintenance = __DIR__.'/../CDDAM/storage/framework/maintenance.php')) {
    require $maintenance;
}

require __DIR__.'/../CDDAM/vendor/autoload.php';

$app = require_once __DIR__.'/../CDDAM/bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$response = $kernel->handle(
    $request = Request::capture()
)->send();

$kernel->terminate($request, $response);