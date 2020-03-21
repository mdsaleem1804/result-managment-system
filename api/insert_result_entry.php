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
if( isset($data->student_rollno) 
    && isset($data->exam_type)
    && isset($data->subject1)
    && isset($data->subject2)
    && isset($data->subject3)
    && isset($data->subject4)
    && isset($data->subject5)
    && isset($data->subject6)
    ){
    // CHECK DATA VALUE IS EMPTY OR NOT
    if(!empty($data->student_rollno) 
    && !empty($data->exam_type)
    && !empty($data->subject1)
    && !empty($data->subject2)
    && !empty($data->subject3)
    && !empty($data->subject4)
    && !empty($data->subject5)
    && !empty($data->subject6)
    ){
        $total=$data->subject1  +$data->subject2+$data->subject3+$data->subject4+$data->subject5+$data->subject6;
        $insert_query = "INSERT INTO `result_entry`(student_rollno,exam_type,subject1,subject2,subject3,subject4,subject5,subject6,total)
         VALUES(:student_rollno,:exam_type,:subject1,:subject2,:subject3,:subject4,:subject5,:subject6,$total)";
        
        $insert_stmt = $conn->prepare($insert_query);
        // DATA BINDING
        $insert_stmt->bindValue(':student_rollno', htmlspecialchars(strip_tags($data->student_rollno)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':exam_type', htmlspecialchars(strip_tags($data->exam_type)),PDO::PARAM_STR);       
        $insert_stmt->bindValue(':subject1', htmlspecialchars(strip_tags($data->subject1)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':subject2', htmlspecialchars(strip_tags($data->subject2)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':subject3', htmlspecialchars(strip_tags($data->subject3)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':subject4', htmlspecialchars(strip_tags($data->subject4)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':subject5', htmlspecialchars(strip_tags($data->subject5)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':subject6', htmlspecialchars(strip_tags($data->subject6)),PDO::PARAM_STR);

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