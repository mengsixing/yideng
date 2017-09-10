<?php
 $operation= $_GET["operation"];
//封装数据库操作方法
class DBhelper {
    public $host;
    public $dbUsername;
    public $dbPassword;
    public $dbName;
    public $dsn;
    public $con;
    function __construct($host,$dbUsername,$dbPassword,$dbName){
        $this->host=$host;
        $this->dbUsername=$dbUsername;
        $this->dbPassword=$dbPassword;
        $this->dbName=$dbName;
    }
    function connect(){
        $dsn="mysql:host=$this->host;dbname=$this->dbName";
        $this->con = new PDO($dsn, $this->dbUsername, $this->dbPassword);
    }
    function select($sql){
        if($this->con==null){
            $this->connect();
        }
        foreach ($this->con->query($sql) as $row) {
            print_r($row[0]); 
        }  
    }
    function update($sql){
        if($this->con==null){
            $this->connect();
        }
        $res=$this->con->exec($sql);
        $this->closesql();
        return $res;
    }
    function delete(){

    }
    function insert(){

    }
    function closesql(){
        $this->con=null;
    }
}

class DBpraise extends DBhelper{
    function __construct($host,$dbUsername,$dbPassword,$dbName) {
        parent::__construct($host,$dbUsername,$dbPassword,$dbName);
    }
    function selectPraise(){
        echo $this->select('SELECT praiseCount FROM addprise');
    }
    function updatePraise(){
        $result= $this->update('update addprise set praiseCount=praiseCount+1');
        if($result>0){
            echo json_encode(array('success'=>true,'msg'=>'success!'));
        }else{
            echo json_encode(array('success'=>false,'msg'=>'faild!'));
        }
    }

}

$praise= new DBpraise('localhost','root','','yideng');

switch($operation){
    case "select":
        $praise->selectPraise();break;
    case "insert":
        $praise->updatePraise();break;
}



?>