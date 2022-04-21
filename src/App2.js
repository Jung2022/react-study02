import React from 'react';
import './App.css';
import Food from './Food';

/**
 * @param {*} 음식 이름
 * @returns  내가 좋아하는 음식 이름
 */
// 이렇게 하면 import없어도 됨
// function Food({ fav }) {
//   return <h1>I like {fav}</h1>;
// }

//서버에서 전송된 데이터
const foodLike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'ramen',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'samgyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'chukumi',
    image:
      'https://recipe1.ezmember.co.kr/cache/recipe/2019/03/05/52d2be99c015378a75c9db81362422c71.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'jokbal',
    image: 'http://image.auction.co.kr/itemimage/23/f5/9d/23f59d9426.jpg',
    rating: 5,
  },
];

function App2() {
  return (
    <div>
      <h1>app.js를 app2.js로 대체해서 실습</h1>
      <hr />
      <h3>내가 좋아하는 음식</h3>
      {/* <Food name="kimchi" />
      <Food name="ramen" />
      <Food name="samgyeopsal" />
      <Food name="chukumi" /> */}
      {/* foodLike를 하나씩 dish로 받아와서 그것의 name을 받아서 사용 */}
      {/* key(Food들을 구분하는 유일한 값)값이 생기면 오류가 없어짐 */}
      {foodLike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App2;
