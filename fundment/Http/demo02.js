const http = require('http');

http.createServer((req, res) => {
  let headers = req.headers;
  let method = req.method;
  let url = req.url;
  let body = [];
  req.on('err', (err) => {
    console.log(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
  });
  response.on('error', function(err) {
    console.error(err);
  });

  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  // Note: the 2 lines above could be replaced with this next one:
  // response.writeHead(200, {'Content-Type': 'application/json'})

  let responseBody = {
    headers: headers,
    method: method,
    url: url,
    body: body
  };

  response.write(JSON.stringify(responseBody));
  response.end();
  // Note: the 2 lines above could be replaced with this next one:
  // response.end(JSON.stringify(responseBody))

  // END OF NEW STUFF
}).listen(3000);