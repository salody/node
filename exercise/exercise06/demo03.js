/**
 * 功能描述: 测试request-time中间件
 * @author: liuguanbang
 * 2017/9/26
 */

const connect = require('connect');
const http = require('http');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const time = require('./request-time');

const app = connect();

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'r+'});
// 记录请求情况
app.use(morgan('combined', {stream: accessLogStream}));

// 实现时间中间件
app.use(time({ time: 500 }));

app.use(function (req, res, next) {
	if (req.url === '/a') {
		res.writeHead(200);
		res.end('Fast!');
	} else {
		next();
	}
});

app.use(function (req, res, next) {
	if (req.url === '/b') {
		setTimeout(function () {
			res.writeHead(200);
			res.end('Slow!');
		}, 1000);
	} else {
		next();
	}
});

http.createServer(app).listen(3000);
