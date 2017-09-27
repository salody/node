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
const router = express.Router();

router.post('/', (req, res) => {
	let hashedPassword = bcrypt.hashSync(req.body.password, 8);

	User.create({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	}, function (err, user) {
		if (err) {
			res.status(500).send("注册用户出错");
		}

		// 生成token
		let token = jwt.sign({ id: user._id }, config.secret, {
			expiresIn: 86400 // 24小时过期，以秒为单位
		});

		res.status(200).send({ auth: true, token });
	})
});




