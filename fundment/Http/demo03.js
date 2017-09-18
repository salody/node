/**
 * Created by liuguanbang on 2017/4/14.
 */
const http = require('http');

http.createServer(function(request, response) {
  request.on('error', function(err) {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', function(err) {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(8080);

/*
* readable.pipe(destination)
* 这里的destination是stream.Writable
* 就是把只读的stream中的数据传输给只写的stream中。
* */

/*
*  Remember, the request object is a ReadableStream and the response object is a WritableStream. That means we can use pipe to direct data from one to the other. 
*
* */