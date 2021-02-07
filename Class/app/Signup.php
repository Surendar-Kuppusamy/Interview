<?php

namespace App;

use azi\Envalid;
use DB\DB;

class Signup extends \Singleton {
    
    public $con;

    function __construct() {
        $db = DB::getInstance();
        $this->con = $db->getConnection();
    }

    public function insertUser($data) {
        $data = (array)$data;
        $validator = new Envalid();
        $validator->validate($data, [
            'email'            => 'required|email',
            'password'         => 'required|password:normal',
            'confirmpassword' => 'same:password'
        ]);

        if($validator->failed()) {
            //$azi_error = $validator->getErrors();
            /* foreach($azi_error as $value) {
                error_log('Key =>' $key);
                error_log('Value =>' $value);
            } */
            return [
                    'status'  => 'error',
                    'message' => $validator->getErrors()
                ];
        }

        $query = "INSERT INTO users (email, password) values('".$data['email']."', '".$data['password']."')";
        $this->con->query($query);
        $error = $this->con->error();
        error_log($this->con->last());
        if($error[0]=='0000') {
            return [
                'status'  => 'success',
                'message' => 'User added'
            ];
        } else {
            return [
                'status'  => 'error',
                'message' => $error[2]
            ];
        }
    }
}


?>