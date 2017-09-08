//第三方中间件
const serve = require('koa-better-serve');
var co = require('co');
var render = require('koa-swig');
// The server
let Koa = require('koa') 
let app = new Koa()
//controller
var router=require('./controller/base.js');

//包裹中间件
app.context.render = co.wrap(render({
  root: __dirname+'/views',
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

//注册路由
router.init(app);

app.use(async ctx => {
  ctx.body = '默认路由';
});

//静态资源中间件
app.use(serve(__dirname+'/public'));

//监听端口
app.listen(5000, () => {
  console.log('server started on 5000')
})