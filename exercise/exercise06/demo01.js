/**
 * 功能描述: 不使用中间件，使用源生Node实现图片展示站点
 * @author: liuguanbang
 * 2017/9/26
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url.substr(0, 7) === '/images' && req.url.substr(-5) === '.jpeg') {
		fs.stat(__dirname + req.url, (err, stat) => {
			if (err || !stat.isFile()) {
				res.writeHead(404);
				res.end('Not Found');
				return;
			}
			serve(__dirname + req.url, 'application/jpeg')
		})
	} else if (req.method === 'GET' && req.url === '/') {
		serve(__dirname + '/index.html', 'text/html');
	} else {
		res.writeHead(404);
		res.end('Not Found');
	}

	function serve(path, type) {
		res.writeHead(200, { 'Content-Type': type });
		fs.createReadStream(path).pipe(res);
	}

});

server.listen(3000, () => console.log('listening on port 3000'));