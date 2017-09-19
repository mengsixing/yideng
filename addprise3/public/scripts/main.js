import addone from './addone.js';
import throttle from './throttle.js';

import Thumb from './index.js';


//绑定插件
jQuery.fn.extend({
	initPraise: function (limit,callback) {
		return new Thumb({
			element: this,
			limit: limit,
			callback:callback
		});
	}
});
//使用插件
$('#hand-wrapper').initPraise(10,function(){
	axios.get('/praise/add')
	.then(function (response) {
		if(response.data.success){
			var currentNum= parseInt( $("#currentPraise").text() );
			$("#currentPraise").text(currentNum+1);
		}else{
			console.log(response.data);
		}
		
	});
});

