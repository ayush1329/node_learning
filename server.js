const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('./index1.html', null, function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
        }
        res.end();
    })
}).listen(8080)