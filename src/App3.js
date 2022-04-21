import React from 'react';
import './App.css';

// class형 컴포넌트 사용하기
// class 키워드를 사용하여 js클래스를 생성하고, extends를 사용하여 React.Component를 상속받아 class형 컴포넌트를 생성함
// 사용법
// class 클래스명 extends React.Component

//리액트의 컴포넌트는 함수형 컴포넌트, 클래스형 컴포넌트 2가지가 존재함
//render() : 클래스형 컴포넌트에서 컴포넌트의 화면을 구성하기 위한 함수 - 무조건 필요
//state : 컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 가지고 있는 객체, props와 비슷함
//props와의 차이첨 : props의 경우는 상위 컴포넌트에서 하위 컴포넌트로 데이터가 전달되지만,
//                  state는 해당 컴포넌트 내에서 관리됨(멤버 변수와 비슷)

//setState() : state객체가 가지고 있는 데이터를 수정하는 함수
//setState(요소명 및 연산식)
class App3 extends React.Component {
  state = {
    count: 0,
  };

  //setState()는 비동기로 동작함 -> 원하는 순간에 데이터의 변경을 보장하지 못함
  //setState(매개변수) 매개변수로 함수를 넘기면 정상적(동기화)으로 사용할 수 있음
  add = () => {
    //this.setState({ count: this.state.count + 1 });
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };
  // 위와 같음
  //   add=function(){
  //     this.setState({ count: this.state.count + 1 });
  //   }

  minus = () => {
    //this.setState({ count: this.state.count - 1 });
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>클래스형 컴포넌트 사용하기</h1>
        {/* 자기가 가지고 있는 state 객체 */}
        <h2>state가 가지고 있는 count의 값 : {this.state.count}</h2>
        <button onClick={this.add}> + </button>
        <button onClick={this.minus}> - </button>
      </div>
    );
  }
}

export default App3;
