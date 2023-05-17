const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const index = {
    name:"Z0ro0",
    here:"한국"
};
const server = http.createServer(function(req, res) {
  console.log(req.url);

  res.setHeader('Content-type', 'text/html');
  if(req.url == '/') {
    //renderFile(ejs대상경로, ejs에 넘겨줄 데이터, 이후에 실행될 callback)
    ejs.renderFile(path.join(__dirname, 'templeat', 'index.ejs'),
    {name:index.name, here:index.here})
    .then((data)=>res.end(data));//데이터를 넘겨받은 ejs 코드(data)를 클라이언트에 보낸다.
  }
  else if(req.url == '/food'){
    fs.createReadStream(path.join(__dirname, 'html', 'food.html')).pipe(res)
  }
  else{
    fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res)
  }
});

server.listen(3333);
