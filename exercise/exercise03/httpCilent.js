/**
 * 功能描述: HTTP Client
 * @author: liuguanbang
 * 2017/9/21
 */

const http = require('http');
const qs = require('querystring');
const {stdin, stdout} = process;

const options = {
	host: '127.0.0.1',
	port: 3000,
	url: '/',
	method: 'POST'
};

/**
 * 客户端发送http请求
 * @param {String} data-这里是你输入的名字
 */
function sendData(data) {
	const req = http.request(options, (res) => {
		let body = '';
		res.setEncoding('utf8');
		res.on('data', (chunk) => body += chunk);
		res.on('end', () => {
			console.log(`request complete!`);
			stdout.write('\n请输入你的名字');
		})
	});
	req.on('error', (e) => {
		console.log(`problem with request: ${e.message}`);
	});

// write data to request body
	//req.write();
	req.end(qs.stringify({name: data}));
}

stdout.write('请输入你的名字：');
stdin.resume();
stdin.setEncoding('utf-8');
stdin.on('data', (data) => sendData(data));