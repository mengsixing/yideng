<?php
 $mysqli = new mysqli("localhost", "root", "", "yideng");
    if(!$mysqli)  {
        echo"database error";
    }else{
        echo"php env successful";
    }
//查询当前数据库中的count数量
$result = $mysqli->query("SELECT praiseCount FROM addprise");
$currentCount=0;
//判断查询结果
if ($result->num_rows > 0) {
    // 输出数据（这里只有一行数据，所以循环只执行一次）
    while($row = $result->fetch_assoc()) {
        $currentCount=$row["praiseCount"]+1;
    }
	mysqli_query($mysqli,"UPDATE addprise SET praiseCount=".$currentCount);
} else {
    echo "没有查询到相关的数据";
}
$mysqli->close();
?>