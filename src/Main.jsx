import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>류운종의 홈페이지 입니다.</h1>
      <Link to="/login">로그인</Link>
      <p>홈페이지에 오신것을 환영합니다.</p>
    </div>
  );
}

export default Main;
