import React from 'react';
import './App.css';
import { Info } from './info';
import { Address } from './address';

function App() {
  return (
    <div>
      <Info />
      <hr/>
      <Address friend={{name:"홍길동", sex:"남자", email:"wewe@gmail.com"}}/>
      <hr/>
      <Address friend={{name:"황진이", sex:"여자", email:"vffs@daum.com"}}/>
      <hr/>
      <Address friend={{name:"코끼리", sex:"남자", email:"fivn@naver.com"}}/>
      <hr/>
    </div>
  );
}

export default App;
