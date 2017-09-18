const http = require('http');

const server = http.createServer((req, res) => {
  /*
  * This is request handler function.
  * When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, 'request' and 'response'.
  *
  * */

  // req
  let method = req.method; //GET POST...
  let url = req.url;
  let headers = req.headers;
  let userAgent = headers['user-agent'];
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk); //这里的chunk是一个Buffer
  }).on('end', () => {
    body = Buffer.concat(body).toString(); //这里的body包含了所有的请求体的内容，是string
  })
  /*
  * An error in the request stream presents itself by emitting an 'error' event on the stream. If you don't have a listener for that event, the error will be thrown, which could crash your Node.js program. You should therefore add an 'error' listener on your request streams, even if you just log it and continue on your way.
  * */
  req.on('error', function (err) {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  })

  // res
  // res.statusCode = 404;
  // res.setHeader('Content-Type', 'application/json');
  // res.setHeader('X-Powered-By', 'bacon');
  res.writeHeader(200, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'bacon'
  });
  // response.write('<html>');
  // response.write('<body>');
  // response.write('<h1>Hello, World!</h1>');
  // response.write('</body>');
  // response.write('</html>');
  // response.end();
  response.end('<html><body><h1>Hello, World!</h1></body></html>');

});