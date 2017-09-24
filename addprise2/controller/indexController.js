var praiseModel=  require('../models/praiseModel.js');

var indexController={
	index(){
		return async(ctx, next) => {
		    ctx.body=await ctx.render('index',{title:'点赞项目'});
		  }
	},
	addpraise(){
		return async(ctx, next) => {
			const data = await praiseModel.addpraise();
			console.log(data);
			ctx.body = data;
		  }
	},
	selectpraise(){
		return async(ctx, next) => {
			const data = await praiseModel.selectpraise();
			console.log(data);
			ctx.body = data;
		  }
	}
};

module.exports=indexController;