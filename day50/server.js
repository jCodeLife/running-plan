const http = require('http');

let server = http.createServer(function(request, response){
    console.log(request.url)
    response.write('abc');
    response.end();
}) ;//创建一个服务器
server.listen(8088)//监听端口