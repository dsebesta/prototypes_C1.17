var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(handleRequest);

function handleRequest(request, response) {
    console.log('handling request');
    var filePath = './doc_root' + request.url;
    if (filePath === './doc_root/') {
        filePath = './doc_root/index.html';
    }

    var extname = path.extname(filePath);
    var statusCode = 200;
    switch(extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
        case 'ico':
            contentType = 'image/x-icon';
            break;
        default:
            contentType = 'text/html';
            break;
    }

    if (fs.existsSync(filePath)) {
        console.log(filePath + ' file exists')
    } else {
        console.log(filePath + ' file does not exist');
        filePath = './doc_root/404.html';
        statusCode = 404;

    }

    fs.readFile(filePath, function(error, data) {
        if (error) {
            console.log(data);
        }
        else {
            response.writeHead(statusCode, { 'Content-Type': contentType });
            response.end(data, 'utf-8');
        }
    })
}

server.listen(6133, function() {
    console.log('listening on port 6133')
});