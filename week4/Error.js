let database = {}
let index = 1

const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url)
  
  const url_parsed = req.url.split('/');
  const method = url_parsed[1];

  console.log(url_parsed)
  console.log(database)

  // create : localhost:8080/create/[value]
  // read : localhost:8080/read/all 또는 localhost:8080/read/[index]
  // update : localhost:8080/method/[index]/[value]
  // delete : localhost:8080/method/[index]
  if(method == 'create')
  {
    database[index] = url_parsed[2];
    index++; 
  }
  else if(method == 'read')
  {
    if(url_parsed[2] == 'all')
    {
        res.write(JSON.stringify(database));
    }
    // Errortype 1 : READ에서 database에 존재하지 않는 index에 접근한 경우
    else
    {
        const url_index = Number(url_parsed[2]);
        res.write(database[url_index]);
    }
  }
  // Errortype 2 : UPDATE에서 database에 존재하지 않는 index에 접근한 경우
  else if(method == 'update')
  {
    const url_index = Number(url_parsed[2]);
    const url_data = url_parsed[3];
    database[url_index] = url_data;
  }
  // Errortype 3 : DELETE에서 database에 존재하지 않는 index에 접근한 경우
  else if(method == 'delete')
  {
    const url_index = Number(url_parsed[2]);
    database[url_index] = undefined;
  }
  res.end();
});

server.listen(8080)

server.on('listening', () => {
  console.log("server is running on 8080 port.")
})