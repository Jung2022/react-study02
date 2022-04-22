// async, await : 비동기 로직을 처리하기 위한 최신 방법
// ES2017 버전에 추가된 새로운 비동기 로직 처리 방식
// async : 해당 함수 내에서 비동기 처리가 필요한 메서드가 있음을 알려줌
// await : 해당 메서드의 비동기 처리가 완료될 때까지 로직을 실행하지 않고 기다려줌
// 사용법
// async function 함수명() {
//   await 비동기 처리 메서드명();
// }

const axios = require('axios').default;

function logName(userId) {
  //비동기 통신

  //비동기 방식을 사용하지 않았을 경우
  //순서대로 실행되야하지만 바로 넘어가서 login.auth에서 에러
  //정삭적인 동작은 되지 않지만 프로그램의 흐름을 파악하기는 쉬움
  var login = axios.get('http://localhost:8080?userId=' + userId);

  if (login.auth === 'success') {
    console.log(user.name);
  }
  //get에 함수를 넣는 방식으로 해결해야함
  //   var login = axios.get('http://localhost:8080?userId=' + userId, function(res){
  //     if (res.auth === 'success') {
  //         console.log(res.name);
  //       }
  //   });
}

// async, await를 적용했을 경우
// async, await를 사용하면 콜백에 대한 이해가 없어도 프로그램의 흐름을 쉽게 파악할 수 있음
async function logName(userId) {
    var login = await axios.get('http://localhost:8080?userId=' + userId);
  
    if (login.auth === 'success') {
      console.log(user.name);
    }
  }

//비동기 방식을 사용했을 경우(promise)
// 비동기 방식 혹은 콜백 방식에 대한 이해가 있을 경우에만 프로그램의 흐름을 파악할 수 있음
function logName(userId) {
  axios.get('http://localhost:8080?userId=' + userId).then((res) => {
    if (login.auth === 'success') {
      console.log(res.name);
    }
  });
}


console.log('로그인 실행');
logName('admin');
