import praiseModel from '../models/praiseModel.js';

var indexController={
	index(){
		return async(ctx, next) => {
		    ctx.body=await ctx.render('index',{title:'点赞项目'});
		  }
	},
	thumb(){
		return async(ctx, next) => {
		    ctx.body=await ctx.render('thumb',{title:'大拇指'});
		  }
	},
	star(){
		return async(ctx, next) => {
				console.log(ctx.request);
		    ctx.body=await ctx.render('star',{title:'星星'});
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
		return async(ctx, next) => {
			const data = await praiseModel.selectpraise();
			console.log(data);
			ctx.body = data;
		  }
	}
};

export default indexController;