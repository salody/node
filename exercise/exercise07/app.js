/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/27
 */

const express = require('express');
const app = express();
const db = require('./db');
const userController = require('./user/UserController');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

// 中间件处理
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 添加路由
app.use('/users', userController);

app.listen(port, function () {
	console.log('Express server listening on port' + port);
});