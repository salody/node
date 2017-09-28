/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/28
 */

const jwt = require('jsonwebtoken');
const config = require('../config');

const verifyToken = function (req, res, next) {
	let token = req.headers['x-access-token'];
	if (!token) {
		res.status(401).send({
			auth: false,
			token: null
		})
	}
	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			res.status(500).send({
				auth: false,
				message: 'failed to authenticate token'
			})
		}
		req.userId = decoded.id;
		next();
	})
};

module.exports = verifyToken;