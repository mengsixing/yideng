// function throttle(){
//     var isClear=arguments[0],fn;
//     if(typeof isClear ==='boolean'){
//         fn=arguments[1];
//         fn.__throttleID && clearTimeout(fn.__throttleID);
//     }else{
//         fn=isClear;
//         throttle(true,fn);
//         fn.__throttleID=setTimeout(function(){
//             fn();
//         },1000);
//     }
// }

//设置1s节流，快速点击则清楚上一次的事件，只保留最后一次的事件
function throttle(fn){
    if(fn.isclear){
        fn.timeoutID &&  clearTimeout(fn.timeoutID);
        fn.isclear=false;
    }else{
        fn.isclear=true;
        throttle(fn);
        fn.timeoutID=setTimeout(function(){
            fn.isclear=false;
            fn();
        },1000);
    }
}
