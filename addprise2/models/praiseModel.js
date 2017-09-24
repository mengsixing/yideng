var rp = require('request-promise');	

var praiseModel={
	 addpraise(){
	 	return new Promise((resolve,reject)=>{
	 		rp('http://localhost/addPraise.php?operation=insert')
		    .then(function (result) {
		    	const info = JSON.parse(result);
		        if(info.success){
		        	resolve(info);
		        }else{
		        	reject(info);
		        }
		    })
		    .catch(function (err) {
		        reject(err); 
		    });
	 	});
		
	},
	selectpraise(){
		return new Promise((resolve,reject)=>{
	 		rp('http://localhost/addPraise.php?operation=select')
		    .then(function (result) {
		        if(result>0){
		        	resolve(result);
		        }else{
		        	reject(result);
		        }
		    })
		    .catch(function (err) {
		        reject(err); 
		    });
	 	});
	}
};

module.exports=praiseModel;



