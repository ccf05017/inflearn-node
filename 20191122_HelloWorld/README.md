# Node로 API 서버 시작해보기

- https://nodejs.org/dist/latest-v12.x/docs/api/synopsis.html
- 노드 공식 홈페이지 예제 기준으로 진행(20191122)
- 버전 변경되면 한번씩 어떻게 바뀌나 확인은 해보자
- 기본 제공되는 http 모듈을 사용한다
- createServer(callback())을 통해 실행하고자 하는 동작이 담긴 서버 객체를 만든다
- 만들어진 서버 객체의 listen() 함수를 실행해서 API 서버를 띄워놓을 수 있다.
- createServer()의 인자로 전달 된 콜백 함수 인자 중 req 인자를 이용해 라우팅이 가능하다.
- req 객체 안에는 더럽게 많은 속성이 있다.
- 정확하게 무엇이 오는지는 Node 문서 참고(https://nodejs.org/dist/latest-v12.x/docs/api/http.html)
- 이렇게 생으로 라우팅하면 매우 화가 나니까 보통 Express를 사용한다.