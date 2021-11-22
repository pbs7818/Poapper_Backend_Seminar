const http = require('http')
const mysql = require('mysql')

var db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'password',
  database:'poapper_backend'
})

const server = http.createServer((req, res) => {

  if(method == 'GET'){
    const query_id = req.url.split('/')[2];
    const kind = req.url.split('/')[1]
    if(kind == 'food'){
      db.query(`SELECT * FROM foods`, (err, results) => {
        if(err) throw err;
        res.write(JSON.stringify(results));
        res.end();
      });
    }else {
      db.query(`SELECT * FROM foods WHERE id=${query_id}`, (err, results) => {
        if(err) throw err;
        res.write(JSON.stringify(results));
        res.end();
      });
    }
  }
  else if(method == 'DELETE'){
    const query_id = req.url.split('/')[2];
    db.query(`DELETE FROM foods WHERE id=${query_id}`, (err, results) => {
      res.end();
    })
  }
  
  
  req.on('data', data => {
    const body = JSON.parse(data);
    console.log(body);
  
    if(method == 'POST') {
      db.query(`INSERT INTO foods (name, kcal, isVegan) VALUES ('${body.name}', '${body.kcal}', '${body.isVegan}')`, (err, results) => {
        if(err) throw err;
        res.end();
      });
    }else if(method == 'PUT') {
      const query_id = req.url.split('/')[2];
      db.query(`UPDATE foods SET name='${body.name}', kcal='${body.kcal}', isVegan='${body.isVegan}' WHERE id=${query_id}`, (err, results) => {
        if(err) throw err;
        res.end();
      });
    }  
  })
})

server.listen(8080)

server.on('listening', () => {
  console.log("server is running on 8080 port.")
})