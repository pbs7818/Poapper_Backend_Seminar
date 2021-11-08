const http = require('http')

const server = http.createServer((req, res) => {
    const parsed_url = req.url.split('/');

    const operator = parsed_url[1];
    const num1 = parsed_url[2];
    const num2 = parsed_url[3];

    console.log(req.url)

    let result

    if(operator == 'add') {
        result = String(Number(num1) + Number(num2))
        res.write(`<h1>${result}<h1>`);
        res.end();
    }
    else if(operator == 'sub') {
        result = String(Number(num1) - Number(num2))
        res.write(`<h1>${result}<h1>`);
        res.end();
    }
    else if(operator == 'mul') {
        result = String(Number(num1) * Number(num2))
        res.write(`<h1>${result}<h1>`);
        res.end();
    }
    else if(operator == 'div') {
        result = String(Number(num1) / Number(num2))
        res.write(`<h1>${result}<h1>`);
        res.end();
    }
})

server.listen(8080)

server.on('listening', () => {
  console.log("server is running on 8080 port.")
})
