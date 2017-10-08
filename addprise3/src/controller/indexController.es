import praiseModel from '../models/praiseModel.js';

console.log('praiseModel',praiseModel);

var indexController={
	index(){
		return async(ctx, next) => {
		    ctx.body=await ctx.render('index',{title:'点赞项目'});
		  }
	},
	addpraise(){
		return async(ctx, next) => {
			const data = await  praiseModel.addpraise();
			console.log(data);
			ctx.body = data;
		  }
	},
	selectpraise(){
	console.log('select点赞数量');
		return async(ctx, next) => {
			const data = await praiseModel.selectpraise();
			console.log(data);
			ctx.body = data;
		  }
	}
};

export default indexController;