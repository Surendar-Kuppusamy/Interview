<?php


abstract class Singleton {
    
    public static $inc=[];

    public static function getInstance() {
        $getObj=get_called_class();
        if(array_key_exists($getObj, self::$inc)) {
            return self::$inc[$getObj];
        } else {
            $tempObj = new $getObj;
            self::$inc = array_merge(self::$inc, array($getObj => $tempObj));
            return $tempObj;
        }
    }
}


?>