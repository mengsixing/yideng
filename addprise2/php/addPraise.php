<?php
header('Access-Control-Allow-Origin:*');
//根据操作符判断是查询还是写入
$operation= $_GET["operation"];
 $mysqli = new mysqli("localhost", "root", "", "yideng");
    if(!$mysqli)  {
        echo"database error";
    }else{
        //查询当前数据库中的count数量
        $result = $mysqli->query("SELECT praiseCount FROM addprise");
        $currentCount=0;
        //判断查询结果
        if ($result->num_rows > 0) {
            // 输出数据（这里只有一行数据，所以循环只执行一次）
            while($row = $result->fetch_assoc()) {
                $currentCount=$row["praiseCount"];
            }
            switch($operation){
                case "select":
                    echo $currentCount;break;
                case "insert":
                    $currentCount++;
                    mysqli_query($mysqli,"UPDATE addprise SET praiseCount=".$currentCount);
                    echo $currentCount;break;
            }
        } else {
            echo "没有查询到相关的数据";
        }
        $mysqli->close();
    }
?>