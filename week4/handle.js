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
  // Errortype 1 -> Read Error Handling은 try-catch 이용
  else if(method == 'read')
  {
    if(url_parsed[2] == 'all')
    {
        res.write(JSON.stringify(database));
    }
    else
    {
        try
        {
            const url_index = Number(url_parsed[2]);
            res.write(database[url_index]);
        }
        catch(error)
        {
            console.log("READ ERROR")
            console.log(error);
        }
    }
  }
  // Errortype 2 -> Update Error Handling은 if-else 이용
  else if(method == 'update')
  {
    const url_index = Number(url_parsed[2]);

    if(url_index <= index -1 && url_index >= 1)
    {
      const url_data = url_parsed[3];
      database[url_index] = url_data;
    }
    else
    {
      console.log("UPDATE ERROR")
    }
  }
  // Errortype 3 -> Delete Error Handling은 if-else 이용
  else if(method == 'delete')
  {
    const url_index = Number(url_parsed[2]);

    if(url_index <= index -1 && url_index >= 1)
    {
      database[url_index] = undefined;
    }
    else
    {
      console.log("DELETE ERROR")
    }
  }
  res.end();
});

server.listen(8080)

server.on('listening', () => {
  console.log("server is running on 8080 port.")
})