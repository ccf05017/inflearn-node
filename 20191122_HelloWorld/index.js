const http = require('http'); // 기본적으로 제공되는 모듈

const hostname = '127.0.0.1';
const port = 3000;

// http.createServer()를 통해 생성 된 서버 객체를 반영한다
const server = http.createServer((req, res) => {

  // request 객체에 따른 라우팅 분기
  if (req.url === '/') {
    // 전달할 response 객체 생성
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello, World!\n');
  } else if (req.url === '/users') {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end('User list\n');
  }
  else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// 지정 된 포트, 호스트에서 하루좽일 위의 생성된 서버를 실행한다.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});