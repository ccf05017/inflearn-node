# Node로 API 서버 시작해보기

- https://nodejs.org/dist/latest-v12.x/docs/api/synopsis.html
- 노드 공식 홈페이지 예제 기준으로 진행(20191122)
- 버전 변경되면 한번씩 어떻게 바뀌나 확인은 해보자
- 기본 제공되는 http 모듈을 사용한다
- createServer(callback())을 통해 실행하고자 하는 동작이 담긴 서버 객체를 만든다
- 만들어진 서버 객체의 listen() 함수를 실행해서 API 서버를 띄워놓을 수 있다.