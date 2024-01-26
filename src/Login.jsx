import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <p>로그인 페이지입니다.</p>
      <p>박공명</p>
      <input type="submit" value="" />
      <Link to={'/main'}>메인으로 가기</Link>
    </div>
  );
}

export default Login;
