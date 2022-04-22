import React from 'react';
import './App.css';
import axios from 'axios';
import Movie from './components/Movie';

import './App7.css';

class App7 extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader-text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
  // async, await : 비동기 로직을 처리하기 위한 최신 방법
  // ES2017 버전에 추가된 새로운 비동기 로직 처리 방식
  // async : 해당 함수 내에서 비동기 처리가 필요한 메서드가 있음을 알려줌
  // await : 해당 메서드의 비동기 처리가 완료될 때까지 로직을 실행하지 않고 기다려줌
  // 사용법
  // async function 함수명() {
  //   await 비동기 처리 메서드명();
  // }

  //   getMovies = async function () {
  //       await ~~~~
  //   }

  getMovies = async () => {
    try {
      //1:한꺼번에 객체구조분해 할당하기
      const {
        data: {
          data: { movies },
        },
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=5&sort_by=rating');

      //   // 2:객체구조분해 할당 :  객체 안의 data가 data로 들어감
      //   var { data } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
      //   console.log(data);
      //   // data 안의 data를 data로 담기
      //   var { data } = data;
      //   console.log(data);
      //   // data 안의 movies를 movies에 담기
      //   const{movies}=data;
      //   console.log(movies)

      //   //3:
      //   const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');

      // 위에 3개 다 똑같은 결과
      //   console.log('통신 성공');
      //   console.log(movies);
      this.setState({ movies: movies, isLoading: false });
    } catch (err) {
      console.log('통신 시 오류가 발생했습니다.');
      console.log(err);
    }
  };

  // 위랑 같음
  //   getMovies = () => {
  //     axios
  //       .get('https://yts-proxy.now.sh/list_movies.json')
  //       .then((res) => {
  //         console.log('통신 성공');
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log('에러가 발생했습니다.');
  //         console.log(err);
  //       });
  //   };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 5000);
    this.getMovies();
  }
}

export default App7;
