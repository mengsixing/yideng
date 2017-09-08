var indexRouter={
	init(router){
		router.get('/index/index',async function (ctx, next) {
		    ctx.body=await ctx.render('index',{title:'点赞项目'});
		});
	}
};


module.exports=indexRouter;
 