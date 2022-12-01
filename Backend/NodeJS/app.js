const http = require('http');
const url = require('url');

const rd = require('./modules/retrievedate');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("La fecha y hora es: " + rd.RetrieveDate());
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    //res.write(req.url);
    res.end('Hello World!');
}).listen(8080);