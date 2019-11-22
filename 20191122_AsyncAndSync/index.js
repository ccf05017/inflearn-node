const fs = require('fs');

// ** 동기 방식 예제 **
// 흔히 자바나 파이썬에서 쓰던 것과 동일하게 작동함

// 그냥 이렇게 출력하면 Buffer 값이 출력된다.
const syncData = fs.readFileSync('./data.txt');
console.log(syncData);

// 두번째 인자로 인코딩 방식이 전달되야 원하는 string이 나옴
const encodedSyncData = fs.readFileSync('./data.txt', 'utf8');
console.log(encodedSyncData);





// ** 비동기 방식 예제 **
// Node는 이게 기본 동작임
// 파일 읽기 이벤트가 완료되면 콜백 실행

// 콜백으로 받는 스타일
const encodedAsyncCallbackData = fs.readFile('./data.txt', 'utf8', (err, data) => {
    console.log(data);
})