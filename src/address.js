function Address(props) {
  const {friend} = props;
  return (
    <div>
      <h3> 이름 : {friend.name}</h3>
      <h3> 성별 : {friend.sex}</h3>
      <h3> 이메일 : {friend.email}</h3>
    </div>
  );
}

export {Address}