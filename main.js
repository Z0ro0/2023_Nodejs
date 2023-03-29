const http = require('http');
const fs = require('fs');
const url = require('url');

const app = http.createServer(function(req, res){
    let _url = req.url;//문자열 형태
    //문자열 행태의 _url을 object의 형태로 변환
    let queryData = url.parse(_url, true).query;
    res.end(queryData.id);
});
app.listen(3333);
//localhost:3333 접속 시 hello 뜸
//종료 시 ctrl c 눌러서 서버 종료하는 거 잊지 말기 