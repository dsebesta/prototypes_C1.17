var http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(request, response) {
    console.log('handling request');
    response.write('initializing request response \n');
    response.end('It works! Path hit: ' + request.url)
}

server.listen(6133, function() {
    console.log('listening on port 6133')
});