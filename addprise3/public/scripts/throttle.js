function throttle(fn,timeout){
	var timer;
	return function(...args){
		if(!timer){
			timer=setTimeout(()=> {timer=null},timeout);
			return fn.apply(this,args);
		}
	}
}

export default throttle;

