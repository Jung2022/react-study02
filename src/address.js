import React from "react";

// jsx문법에서는 html 태그를 사용시 반드시 시작태그와 끝태그가 존재해야함
// <img> -> <img></img> or <img/>  /  <br> -> <br></br> or <br/> / <hr> -> <hr></hr> or <hr/>
function Address(props) {
  const { friend } = props;
  return (
    <div>
      <h3 className="name"> 이름 : {friend.name}</h3>
      <h3 className="sex"> 성별 : {friend.sex}</h3>
      <h3 className="email"> 이메일 : {friend.email}</h3>
    </div>
  );
}

export { Address };
