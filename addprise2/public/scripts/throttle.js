//设置1s节流，快速点击则清楚上一次的事件，只保留最后一次的事件
// function throttle(fn){
//     if(fn.isclear){
//         fn.timeoutID &&  clearTimeout(fn.timeoutID);
//         fn.isclear=false;
//     }else{
//         fn.isclear=true;
//         //清除延迟事件
//         throttle(fn);
//         //异步执行
//         fn.timeoutID=setTimeout(function(){
//             fn.isclear=false;
//             fn();
//         },1000);
//     }
// }

//默认函子
class Functor {
  constructor(val) { 
    this.val = val; 
  }
  map(f) {
    return new Functor(f(this.val));
  }
}
Functor.of=function (val) {
  return new this(val);
};

//IO函子
class IO extends Functor {
    constructor(val){
        super(val);
    }
    map(f) {
        return new IO(f(this.val));
    }
    join() {
        return this.val;
    }
    flatMap(f) {
        return this.map(f).join();
    }
}
//清除延迟函数
function clearFnTimeout(fn){
    fn.timeoutID && clearTimeout(fn.timeoutID);
    return fn;
}
//设置延迟函数(使用IO因子把setTimeout提纯)
function setFnTimeout(fn){
  return IO.of(function() {
    return fn.timeoutID= setTimeout(function(){
        fn();
    },1000);
  });
}
//节流方法
/*
    1、先清除事件执行
    2、然后延迟1s执行事件
    3、多次1s内连续点击，会不断清除上一次的事件执行，故只会保留最后一次事件，实现节流
*/
function throttle(fn){
    setFnTimeout(fn).flatMap(function(click){
            clearFnTimeout(fn);
            click();
       });
}
