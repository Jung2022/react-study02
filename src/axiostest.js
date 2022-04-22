// Axios란?
// 자바스크립트로 비동기 통신을 할 수 있도록 해주는 모듈
// 자바스크립트에는 기본적으로 비동기 통신을 위한 XHR(XML Http Request)라는게 존재함
// XHR을 사용하여 ajax통신하는데 사용함(사용법이 어려움)
// jquery를 사용 시 ajax통신을 쉽게할 수 있음
// frontend 개발 시 jquery의 각종 문제점 때문에 jqeury를 사용하지 않게 되면서 비동기 통신을 쉽게할 수 있는 방법이 필요함
// React 및 Vue.js에서는 Axios 모듈을 사용하여 비동기 통신을 구현함

// CommonJS : ES6 출시 전에 ES5 때 사용하던 node.js에서 사용하던 형식
// const axios = require('axios').default; require:모듈 불러오기 / ES6의 import랑 같음
// axios.get('/user?ID=12345') : get방식으로 서버와 통신(접속주소)
// .then() 성공 / .catch() 실패
// Axios는 프로미스(비동식방식 실행) 기반 설계, ajax 통신
// https://github.com/serranoarevalo/yts-proxy
// https://yts-proxy.now.sh/list_movies.json
// https://yts-proxy.now.sh/movie_details.json?movie_id=10

// Axios 설치
// > yarn add axios

// Axios 모듈 불러오기
// import axios from 'axios';

// axios 사용법
// axios.통신방식(서버주소).then(콜백함수).catch(콜백함수)

//import axios from 'axios';
const axios = require('axios').default;

axios
  .get('https://yts-proxy.now.sh/list_movies.json')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
