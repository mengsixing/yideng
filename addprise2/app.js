//第三方中间件
const serve = require('koa-better-serve');
var co = require('co');
var render = require('koa-swig');
var router = require('koa-router')();
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
  .get('/addpraise', function (ctx, next) {
    ctx.body = '调用点赞接口进行点赞!'
  });

//注册中间件

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(__dirname+'/public'));

//监听端口
app.listen(5000, () => {
  console.log('server started on 5000')
})