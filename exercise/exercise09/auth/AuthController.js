/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/28
 */

const express = require('express');
const User = require('../user/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const verifyToken = require('./verifyToken');
const router = express.Router();

router.post('/', (req, res) => {
	// 密码加密存储
	let hashedPassword = bcrypt.hashSync(req.body.password, 12);

	User.create({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	}, function (err, user) {
		if (err) {
			res.status(500).send("注册用户出错");
		}

		// 生成token
		let token = jwt.sign({id: user._id}, config.secret, {
			expiresIn: 86400 // 24小时过期，以秒为单位
		});

		res.status(200).send({auth: true, token});
	})
});

router.get('/me', verifyToken, (req, res, next) => {
	User.findById(
		req.userId,
		{password: 0}, // 保护密码，不查找发送密码信息
		(err, user) => {
			if (err) res.status(500).send("查找用户出错");
			if (!user) res.status(404).send("没有该用户");
			//res.status(200).send(user);
			next(user);
		}
	);
});

router.post('/login', (req, res) => {
	User.findOne({ email: req.body.email }, (err, user) => {
		if (err) res.status(500).send("服务器出错");
		if (!user) res.status(404).send("没有该用户");

		// 比对密码
		let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			res.status(401).send({
				auth: false,
				token: null
			});
		}
		let token = jwt.sign({ id: user._id }, config.secret, {
			expiresIn: 86400
		});
		res.status(200).send({
			auth: true,
			token
		})
	})
});

router.get('/logout', (req, res) => {
	res.status(200).send({
		auth: false,
		token: null
	})
});

router.use(function (user, req, res, next) {
	res.status(200).send(user);
});

module.exports = router;