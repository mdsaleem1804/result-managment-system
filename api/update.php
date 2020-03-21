<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));

//CHECKING, IF ID AVAILABLE ON $data
if(isset($data->id)){
    
    $msg['message'] = '';
    $post_id = $data->id;
    
    //GET POST BY ID FROM DATABASE
    $get_post = "SELECT * FROM `student` WHERE id=:post_id";
    $get_stmt = $conn->prepare($get_post);
    $get_stmt->bindValue(':post_id', $post_id,PDO::PARAM_INT);
    $get_stmt->execute();
    
    
    //CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
    if($get_stmt->rowCount() > 0){
        
        // FETCH POST FROM DATBASE 
        $row = $get_stmt->fetch(PDO::FETCH_ASSOC);
        
        // CHECK, IF NEW UPDATE REQUEST DATA IS AVAILABLE THEN SET IT OTHERWISE SET OLD DATA
        $post_student_name = isset($data->student_name) ? $data->student_name : $row['student_name'];
        $post_student_rollno = isset($data->student_rollno) ? $data->student_rollno : $row['student_rollno'];
        $post_student_gender = isset($data->student_gender) ? $data->student_gender : $row['student_gender'];
        $post_student_email= isset($data->student_email) ? $data->student_email : $row['student_email'];
        
        $update_query = "UPDATE `student` SET 
        student_name = :student_name, 
        student_rollno = :student_rollno, 
        student_gender = :student_gender, 
        student_email = :student_email 
        WHERE id = :id";
        
        $update_stmt = $conn->prepare($update_query);
        
        // DATA BINDING AND REMOVE SPECIAL CHARS AND REMOVE TAGS
        $update_stmt->bindValue(':student_name', htmlspecialchars(strip_tags($post_student_name)),PDO::PARAM_STR);
        $update_stmt->bindValue(':student_rollno', htmlspecialchars(strip_tags($post_student_rollno)),PDO::PARAM_STR);     
        $update_stmt->bindValue(':student_gender', htmlspecialchars(strip_tags($post_student_gender)),PDO::PARAM_STR);
        $update_stmt->bindValue(':student_email', htmlspecialchars(strip_tags($post_student_email)),PDO::PARAM_STR);
        $update_stmt->bindValue(':id', $post_id,PDO::PARAM_INT);
        
        
        if($update_stmt->execute()){
            $msg['message'] = 'Data updated successfully';
        }else{
            $msg['message'] = 'data not updated';
        }   
        
    }
    else{
        $msg['message'] = 'Invlid ID';
    }  
    
    echo  json_encode($msg);
    
}
?>