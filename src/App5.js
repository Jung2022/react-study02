import React from 'react';
import './App.css';

class App5 extends React.Component {
  //리액트의 각 컴포넌트는 3가지 주요단계를 통해 생명주기를 관리함
  //3가지 주기는 Mounting, Updating, Unmounting을 의미함
  //Mounting : html의 DOM에 React 컴포넌트를 붙이는 것, 리액트를 통해서 화면을 최초 생성할 때
  //    constructor() -> getDerivedStateFromProps() -> render -> componentDidMount()
  //    constructor() : 컴포넌트가 초기화될 때 가장 먼저 호출, state와 다른 초기값들을 세팅 - java: new(메모리등록) 생성자(객체생성, 초기값설정)
  //    getDerivedStateFromProps() : DOM요소들이 렌더링 되기 직전에 호출 최초의 props에 기반한 state객체를 저장함
  //    render() : DOM에 React의 가상DOM을 사용하여 화면을 그려줌
  //    componentDidMount() : 해당 컴포넌트가 렌더링된 직후에 호출
  //Updating() : 화면 구성이 완료된 후 컴포넌트의 상태가 변경될 떄를 의미
  //    getDerivedStateFromProps() -> shouldComponentUpdate() -> render() -> getSnapshotBeforeUpdate() -> componentDidUpdate()순으로 동작
  //    getDerivedStateFromProps() : 화면 업데이트 시 가장 먼저 호출
  //    shouldComponentUpdate() : 리액트가 렌더링을 계속해야하는지에 대한 정보를 Boolean값으로 반환
  //    render() : 실제 변경된 내용을 다시 화면에 출력
  //    getSnapshotBeforeUpdate() : 업데이트 전의 props와 state에 접근할 수 있음,
  //                                update가 완료된 이후에도 update이전의 props와 state의 정보를 확인할 수 있음
  //                                getSnapshotBeforeUpdate() 메서드를 사용지 반드시 componentDidUpdate() 메서드도 사용해야함
  //    componentDidUpdate() : 컴포넌트의 정보가 업데이트되고 난 후 호출
  //Unmounting() : DOM을 제거하거나 해당 컴포넌트를 사용하지 않을 때 호출
  //    ComponentWillUnmount() : 컴포넌트가 DOM에서 제거될 때 호출
  constructor(props) {
    super(props);
    console.log('constructor 동작');
  }
  //props와 비슷, 내부적으로 사용, 객체의 멤버변수
  state = {
    count: 0,
  };
  add = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  minus = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps 동작');
    return state;
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate 동작');
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate 동작');
  }

  componentDidMount() {
    console.log('componentDidMount 동작');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate 동작');
  }
  componentWillUnmount() {
    console.log('ComponentWillUnmount 동작');
  }

  render() {
    console.log('render 동작');
    return (
      <div>
        <h1>번호 : {this.state.count}</h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}

export default App5;
