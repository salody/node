/**
 * 功能描述:
 * 2017/9/18
 * 作者：liuguanbang
 */
const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(3000);