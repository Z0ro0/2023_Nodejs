const http = require('http');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

// index.ejs에 넘겨줄 data
const index = {
  name: 'Z0ro0',
  here: '한국'
};

const food = ["쿠키", "초밥", "떡볶이"];



const server = http.createServer(function(req, res) {
  console.log(req.url);

  res.setHeader('Content-type', 'text/html');
  
  if(req.url === '/') {
    // renderFile(ejs대상경로, ejs에 넘겨줄 데이터)
    ejs.renderFile(path.join(__dirname, 'template', 'index.ejs')
    , {name: index.name, here: index.here})
    .then((data) => res.end(data)); // 데이터를 넘겨받은 ejs코드(data)를 클라이언트에게 보낸다.
    
  }
  else if(req.url === '/food') {
    
  }
  else {
    fs.createReadStream(path.join(__dirname, 'html', '404.html')).pipe(res);
  }

});

server.listen(3333);