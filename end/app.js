/**
 *入口模块
 *作用:
 *	创建服务
 *	做一些相关配置
 *  提供静态资源服务
 *	挂载路由
 *	监听端口，启动服务
 */
//加载框架
var express = require('express');

//加载body-parser模块，用于处理post提交方式的参数获取问题
var bodyParser = require('body-parser');

//加载路由模块
var router = require('./router');

//创建服务器
var app = express();

//配置body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//挂载路由
app.use(router);

//公开静态资源目录
/*app.use('/node_modules/',express.static('./node_modules/'));*/
app.use('/static/',express.static('./static/'));

app.listen(2007,function(){
	console.log('app is running...');
});