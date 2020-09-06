const http = require('http');
http.createServer(function (req, res) {
    let GET = {}
    if (req.url.indexOf('?') != -1) {
        let arr = req.url.split('?');
        let url = arr[0];
        let arr2 = arr[1].split('&');
        for (let i in arr2) {
            let arr3 = arr2[i].split('=')
            GET[arr3[0]] = arr3[1];
        }
    }else{
        let url = req.url;
        GET = {}
    }
    console.log(url,GET)
    res.write('aaa')
    res.end();
}).listen(8088);