const date = require('date-utils')

var time
var timer

setInterval(() => {
    time = new Date();
    timer = time.toFormat('YYYY-MM-DD HH24:MI:SS');
}, 1000);

const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == '/') {
        res.write('<h1>Hello Node!</h1>');
        res.write('<p>Hello Server!</p>');
        res.end();
    }
    else if(req.url == '/timer') {
        res.write(timer);
        res.end();
    }
})

server.listen(8080)

server.on('listening', () => {
  console.log("server is running on 8080 port.")
})