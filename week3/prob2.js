const http = require('http')

var num1;
var num2;

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url == `/add/${num1}/${num2}`) {
        var result = Number(num1) + Number(num2);
        res.write(result);
        res.end();
    }
    else if(req.url == `/sub/${num1}/${num2}`) {
        var result = Number(num1) - Number(num2);
        res.write(result);
        res.end();
    }
    else if(req.url == `/mul/${num1}/${num2}`) {
        var result = Number(num1) * Number(num2);
        res.write(result);
        res.end();
    }
    else if(req.url == `/div/${num1}/${num2}`) {
        var result = Number(num1) / Number(num2);
        res.write(result);
        res.end();
    }
})

server.listen(8080)

server.on('listening', () => {
  console.log("server is running on 8080 port.")
})