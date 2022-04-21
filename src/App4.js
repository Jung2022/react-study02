import React from 'react';
import './App4.css';

class App4 extends React.Component {
  // setState()에 매개변수로 state를 주게 되면 나머지 값은 유지
  // 변수선언시 사용하는 키워드 var(변수)-함수기준/중복선언 가능, let(변수)-코드블록기준/중복 불가능, const(상수)
  // var state임
  // 함수,클래스를 벗어나지 않았으므로 state가 유지가됨
  // setState()에 매개변수로 state가 들어가면(뭘 넣어도 state로 인식됨) 집어넣었던 값이 유지되고 바뀐 값은 업데이트가 되고 나머지 값은 유지가 됨
  state = {
    volume: 0,
    channel: 1,
  };

  Vplus = () => {
    if (this.state.volume < 15) {
      //this.setState({ volume: this.state.volume + 1 });
      this.setState((state) => ({
        volume: state.volume + 1,
      }));
    }
  };
  Vminus = () => {
    if (this.state.volume > 0) {
      //this.setState({ volume: this.state.volume - 1 });
      this.setState((current) => ({
        volume: current.volume - 1,
      }));
    }
  };

  Cplus = () => {
    if (this.state.channel < 15) {
      //this.setState({ channel: this.state.channel + 1 });
      this.setState((aaa) => ({
        channel: aaa.channel + 1,
      }));
    } else {
      //this.setState({ channel: 1 });
      this.setState(() => ({
        channel: 1,
      }));
    }
  };
  Cminus = () => {
    if (this.state.channel > 1) {
      //this.setState({ channel: this.state.channel - 1 });
      this.setState((bbb) => ({
        channel: bbb.channel - 1,
      }));
    } else {
      //this.setState({ channel: 15 });
      this.setState(() => ({
        channel: 15,
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>볼륨/채널 테스트</h1>
        <table>
          <thead>
            <tr>
              <th>채널/볼륨</th>
              <th>크기</th>
              <th>+</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>채널</td>
              <td>{this.state.channel}</td>
              <td>
                <button onClick={this.Cplus}> + </button>
              </td>
              <td>
                <button onClick={this.Cminus}> - </button>
              </td>
            </tr>
            <tr>
              <td>볼륨</td>
              <td>{this.state.volume}</td>
              <td>
                <button onClick={this.Vplus}> + </button>
              </td>
              <td>
                <button onClick={this.Vminus}> - </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App4;
