/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/25
 */

const path = require('path');
const express = require('express');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Parse Cookie header and populate req.cookies with an object keyed by the cookie names
// session1.5版本以后不需要用，详见readme
//app.use(cookieParser());

app.use(session({ secret: 'my secret' }));

// 指定模板引擎
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

// 路由
app.get('/', (req, res) => {
	res.render('index', { authenticate: false });
});
app.get('/login', (req, res) => {
	res.render('login');
});
app.get('/signup', (req, res) => {
	res.render('signup');
});

app.listen(3000);