/**
 * 功能描述: 使用Connect实现demo01
 * @author: liuguanbang
 * 2017/9/26
 */

const connect = require('connect');
const http = require('http');
const serveStatic = require('serve-static');

const app = connect();

// 中间件
app.use(function (req, res, next) {
	// 记录日志
	console.error('  %s %s', req.method, req.url);
	next();
});

app.use(function (req, res, next) {
	if (req.method === 'GET' && req.url.substr(0, 7) === '/images') {
		// 托管图片
	} else {
		// 交给其他的中间件去处理
		next();
	}
});

app.use(function (req, res, next) {
	if (req.method === 'GET' && req.url === '/') {
		// 响应index文件
	} else {
		next();
	}
});

app.use(function (req, res, next) {
	// 最后一个中间件，如果到了这里，就意味着无能为力，只能返回404
	res.writeHead(404);
	res.end('Not Found');
});




//create node.js http server and listen on port
http.createServer(app).listen(3000);
