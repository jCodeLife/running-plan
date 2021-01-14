const http = require('http');
const urlLib = require('url');

let server = http.createServer((req, res) => {
    let tempObj = urlLib.parse(req.url, true);
    let url = tempObj.pathname;
    const GETJSON = tempObj.query;
    console.log(url, GETJSON)
    res.write('aaa');
    res.end();
});
server.listen(8088)