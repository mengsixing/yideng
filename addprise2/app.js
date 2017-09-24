//第三方中间件
const server = require('koa-static');
var co = require('co');
var render = require('koa-swig');
const router = require('koa-simple-router');
const config =require('./config/config.js');
// The server
let Koa = require('koa') 
let app = new Koa()
//controller
var controller=require('./controller/initController.js');

//包裹中间件
app.context.render = co.wrap(render({
  root: config.get('viewDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

//注册路由
controller.init(app,router);

//静态资源中间件
//app.use(server(__dirname + '/public'));
app.use(server( config.get('staticDir') ) );
//监听端口
app.listen(config.get('port'), () => {
  console.log('server started on '+config.get('port'))
})