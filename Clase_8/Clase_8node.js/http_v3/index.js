let object = require('./modules');
const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 3000;
const server = http.createServer((req, res) =>{
    const pathUrl = url.parse(req.url,true);

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    res.write(`El resultado es: ${object.operation(pathUrl.query.num1, pathUrl.query.num2)}`)
    res.end()
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});