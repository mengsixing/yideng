import indexController from './indexController';
const initController={
	init(app,router){
		app.use(router(_=>{
			_.get('/index/index',indexController.index());
			_.get('/index/star',indexController.star());
			_.get('/index/thumb',indexController.thumb());
		  _.get('/praise/add',indexController.addpraise());
		  _.get('/praise/select',indexController.selectpraise());
		}))
	}

}

export default initController;
