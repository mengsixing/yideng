//第三方中间件
const serve = require('koa-better-serve');
var co = require('co');
var render = require('koa-swig');
var router = require('koa-router')();
var axios=require('axios');
// The server
let Koa = require('koa') 
let app = new Koa()




app.context.render = co.wrap(render({
  root: __dirname+'/views',
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));


router.get('/index/index',async function (ctx, next) {
    ctx.body=await ctx.render('index',{title:'点赞项目'});
  })
  .get('/addpraise',async function (ctx, next) {
    await axios.get('http://localhost/addPraise.php?operation=insert').then(function (response) {
      ctx.body = response.data;
    });
  });

//注册中间件

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(__dirname+'/public'));

//监听端口
app.listen(5000, () => {
  console.log('server started on 5000')
})