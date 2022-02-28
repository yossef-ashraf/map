<?php
use Dcblogdev\PdoWrapper\Database;


class map {
public $db;
// coz can use in all funtions

public function __construct(){
// make a connection to mysql here
$options = [
//required
'username' => 'root',
'database' => 'map',
//optional
'password' => '',
'type' => 'mysql',
'charset' => 'utf8',
'host' => 'localhost',
'port' => '3306'
];
$this->db = new Database($options);
}
public function all(){
$data = $this->db->rows("SELECT * FROM loc ");
// print_r($data);
// $res=['status'=>200 ,'data'=>$data];
// print_r(json_encode($res));
return $data ;
}
public function add($data){
$data["lng"]=trim(stripslashes(htmlspecialchars($data["lng"])));
$data["lat"]=trim(stripslashes(htmlspecialchars($data["lat"])));
$data["title"]= stripslashes(trim(htmlspecialchars($data["title"])));
if (!empty($data["lng"]) && !empty($data["lat"]) && !empty($data["title"])) {
$data = $this->db->insert("loc" , $data );
return $data ;
}else{
    $data= 'error';
};
}
public function delete($id){
$id= $id;
$data = $this->db->delete("loc",$id );
return $data ;
}
}








