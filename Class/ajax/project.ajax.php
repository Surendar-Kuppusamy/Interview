<?php

use App\Signup;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;


$request = Request::createFromGlobals();
$content = (array) json_decode($request->getContent());
$header = $request->headers->get('Content-type');
//$token = $request->headers->get('X-CSRF-TOKEN');

if($content['command'] == 'signup') {
    $signup = Signup::getInstance();
    $res = $signup->insertUser($content['data']);
    $response = new JsonResponse();
    $response->setData($res);
    $response->send();
}


?>