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

//CREATE MESSAGE ARRAY AND SET EMPTY
$msg['message'] = '';

// CHECK IF RECEIVED DATA FROM THE REQUEST
if( isset($data->student_name) && isset($data->student_rollno)){
    // CHECK DATA VALUE IS EMPTY OR NOT
    if(!empty($data->student_name) && !empty($data->student_rollno)){
        
        $insert_query = "INSERT INTO `student`(student_name,student_rollno,student_gender,student_email) VALUES(:student_name,:student_rollno,:student_gender,:student_email)";
        
        $insert_stmt = $conn->prepare($insert_query);
        // DATA BINDING
        $insert_stmt->bindValue(':student_name', htmlspecialchars(strip_tags($data->student_name)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':student_rollno', htmlspecialchars(strip_tags($data->student_rollno)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':student_gender', htmlspecialchars(strip_tags($data->student_gender)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':student_email', htmlspecialchars(strip_tags($data->student_email)),PDO::PARAM_STR);
        
        if($insert_stmt->execute()){
            $msg['message'] = 'Data Inserted Successfully';
        }else{
            $msg['message'] = 'Data not Inserted';
        } 
        
    }else{
        $msg['message'] = 'Oops! empty field detected. Please fill all the fields';
    }
}
else{
    $msg['message'] = 'Please fill all the fields ';
}
//ECHO DATA IN JSON FORMAT
echo  json_encode($msg);
?>