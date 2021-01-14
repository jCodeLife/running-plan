const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req, res) {
    let file_name = `./www${req.url}`;
    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write('404')
        } else {
            res.write(data)
        }
        res.end();
    })

})
server.listen(8088);