var indexRouter =require('./index.js');
var addpraiseRouter =require('./addpraise.js');

var router = require('koa-router')();


indexRouter.init(router);
addpraiseRouter.init(router);

var baseRouter={
	init(app){
		app.use(router.routes());
		app.use(router.allowedMethods());
	}
};


module.exports=baseRouter;