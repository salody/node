/**
 * 功能描述:
 * @author: liuguanbang
 * 2017/9/27
 */

const express = require('express');
const router = express.Router();
const User = require('./User');

// 添加用户
router.post('/', (req, res) => {
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}, (err, user) => {
		if (err) {
			res.status(500).send("数据库插入user失败");
		} else {
			res.status(200).send(user);
		}
	})
});

// 查找所有用户
router.get('/', (req, res) => {
	User.find({}, (err, users) => {
		if (err) {
			res.status(500).send('查找users失败');
		} else {
			res.status(200).send(users);
		}
	})
});

// 根据id查找用户
router.get('/:id', (req, res) => {
	User.findById(req.params.id, (err, user) => {
		if (err) {
			res.status(500).send("用户查找失败");
		} else {
			if (!user) {
				res.status(404).send("找不到该用户");
			} else {
				res.status(200).send(user)
			}
		}
	})
});

// 修改用户信息
router.patch('/:id', (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
		if (err) {
			res.status(500).send("更新用户信息失败");
		} else {
			res.status(200).send(user);
		}
	})
});

// 删除用户
router.delete('/:id', (req, res) => {
	User.findByIdAndRemove(req.params.id, (err, user) => {
		if (err) {
			res.status(500).send("删除用户失败");
		} else {
			res.status(200).send(`User ${user.name} was deleted.`)
		}
	})
});


module.exports = router;