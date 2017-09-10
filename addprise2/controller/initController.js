var indexController= require('./indexController.js');
var initController={
	init(app,router){
		app.use(router(_ => {
		  _.get('/index/index',indexController.index());
		  _.get('/praise/add',indexController.addpraise());
		  _.get('/praise/select',indexController.selectpraise());
		}));
	}
};

module.exports=initController;