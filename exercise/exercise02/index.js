/**
 * 功能描述: TCP
 * @author: liuguanbang
 * 2017/9/19
 */

/**
 * 创建依赖
 */
const net = require('net');

/**
 * 追踪连接数
 */
let count = 0;

/**
 * 创建用户
 */
let users = {};

/**
 * 创建服务器
 */
const server = net.createServer((connection) => {
	// 欢迎标语
	const WELCOME_SOLGAN = ` > Welcome to my node-chat!\n > You are within ${count} people from the world.\n > Please write your name and enter:`;
	let nickname;

	// connection是一个双向的stream
	// connection监听
	console.log('\033[32mnew client connected!\033[0m');
	connection.write(WELCOME_SOLGAN);

	// 每连进来一个用户,用户数加1
	count++;

	// 用户退出后，用户数减1
	connection.on('end', () => {
		count--;
		delete users[nickname];
	});

	// 设置编码格式
	connection.setEncoding('utf-8');

	// 处理客户端发送来的数据
	connection.on('data', (data) => {
		// 删除回车符
		data = data.replace('\n', '');

		// 用户输入的第一份数据应该是用户的名称
		if (!nickname) {
			if (users[nickname]) {
				console.log('\33[31m nickname has already existed, try again\33[0m');
			} else {
				nickname = data;
				// 用user[nickname]指代该次连接
				users[nickname] = connection;
				for (let user in users) {
					if (users.hasOwnProperty(user)) {
						users[user].write(` > ${nickname} join the chat room\n`);
					}
				}
			}
		} else {
			// 视为聊天消息
			for (let user in users) {
				if (users.hasOwnProperty(user) && user !== nickname) {
					users[user].write('> \33[32m' + nickname +'\33[0m: \33[96m ' +  data +'\33[0m\n');
				}
			}
		}
	})
});

/**
 * 服务器连接错误
 */
server.on('error', (err) => {
	throw err;
});

/**
 * 服务器监听
 */
server.listen(3000, () => {
	console.log('\033[96m    server listening on *:3000\033[0m');
});