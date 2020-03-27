<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();
// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
//CHECKING, IF ID AVAILABLE ON $data
if(isset($data->email))
{
    $post_email = $data->email;
    $post_password = $data->password;
}
// CHECK GET ID PARAMETER OR NOT

// MAKE SQL QUERY
// IF GET POSTS ID, THEN SHOW POSTS BY ID OTHERWISE SHOW ALL POSTS
$sql = "SELECT * FROM `admin_login` WHERE email='$post_email' and password='$post_password'"; 
//echo $sql;
$stmt = $conn->prepare($sql);

$stmt->execute();

//CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE POSTS ARRAY
    $posts_array = [];
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
        $post_data = [
            'id' => $row['id'],
            'token' => $row['token']
        ];
        // PUSH POST DATA IN OUR $posts_array ARRAY
        array_push($posts_array, $post_data);
    }
    //SHOW POST/POSTS IN JSON FORMAT
   // echo json_encode($posts_array);
    echo json_encode("success");
 }
else{
    //IF THER IS NO POST IN OUR DATABASE
   //http_response_code(404);
    echo json_encode("failure");
}
?>