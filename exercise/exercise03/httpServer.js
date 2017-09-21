/**
 * 功能描述: HTTP Server
 * @author: liuguanbang
 * 2017/9/20
 */

const http = require('http');
const qs = require('querystring');

const server = http.createServer((req, res) => {
	/*if (req.url === '/') {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.end('<form action="/url" method="post">\n' +
			'\t<fieldset>\n' +
			'\t\t<h1>My Form</h1>\n' +
			'\t\t<label>Personal information</label>\n' +
			'\t\t<p>What is your name?</p>\n' +
			'\t\t<input type="text" name="name">\n' +
			'\t\t<p><button>Submit</button></p>\n' +
			'\t</fieldset>\n' +
			'</form>');
	} else if (req.url === '/url' && req.method === 'POST') {
		let body = '';
		req.on('data', (chunk) => body += chunk);
		req.on('end', () => {
			res.writeHead(200, {
				'Content-Type': 'text/html'
			});
			res.end(`<p>Content-Type: ${req.headers['content-type']}</p>
					 <p>Your name is <pre>${qs.parse(body).name}</pre></p>`);
		})
	} else if(req.url === '/client') {

	} else {
		res.writeHead(404);
		res.end('NOT FOUND!')
	}*/
	let body = '';
	req.on('data', (chunk) => body += chunk);
	req.on('end', () => {
		res.writeHead(200);
		res.end(`Done`);
		console.log(`got ${qs.parse(body).name}`)
	})

});

server.listen(3000, () => {
	console.log('listing on port 3000');
});