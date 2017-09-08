var axios=require('axios');
var addpraiseRouter = {
	init(router) {
		router.get('/addpraise',async function(ctx, next) {
			await axios.get('http://localhost/addPraise.php?operation=insert').then(function(response) {
				ctx.body = response.data;
			});
		});
	}
};


module.exports = addpraiseRouter;