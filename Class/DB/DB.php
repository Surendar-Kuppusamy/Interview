<?php

namespace DB;

use Medoo\Medoo;

class DB {
    
    protected static $databasetype='mysql';
    protected static $databasename='demo';
    protected static $server='localhost';
    protected static $username='root';
    protected static $password='kuppusamy';
    protected static $instance;
    protected static $con;

    function __construct() {
        $this->connect();
    }

    public function connect() {
        try {
            self::$con=new Medoo([
                'database_type' => self::$databasetype,
                'database_name' => self::$databasename,
                'server' => self::$server,
                'username' => self::$username,
                'password' => self::$password,
            ]);
        } catch(\PDOException $e) {
            die($e->getMessage());
        }
    }


    public static function getInstance() {
        if(!@self::$instance) {
            self::$instance = new DB();
        }
        return self::$instance;
    }

    public function getConnection() {
        return self::$con;
    }

}


?>