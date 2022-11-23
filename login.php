<?php
session_start();
// include "dbConnect.php";
$connect = mysqli_connect("localhost", "root", "000129","swsecsql");
$input_id=$_POST['id'];
$input_pw=$_POST['password'];

$query="select * from user_info where id='$input_id'";
$result=$connect ->query($query);
if(mysqli_num_rows($result) == 1){
    $row=mysqli_fetch_assoc($result);
    if($row['password' == $input_pw]) {
        $_SESSION['id']=$input_id;
        if(isset($_SESSION['id'])){
            echo "로그인 성공<br>";
        }else{
            echo "로그인 실패<br>";
        }
    }
} else {
    echo "아이디 다름";
}
//   if($userId != null)    
//   {
//     $sql = "insert into user_info (id, , password, )";
//     $sql = $sql."values('$userId', '$userPw', '$title', '$content')";
     
//     if($mysqli->query($sql)){
//         echo "<script>alert('Success'); location.href='index.html';</script>";
// ​
//     }else{
//         echo "<script>alert('Failed');location.href='index.html';</script>";
//     }
//   }
//   else {
//         echo "<script>alert('no match');location.href='board.html';</script>";
//   }
?>