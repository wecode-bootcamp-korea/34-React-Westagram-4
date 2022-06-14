import React from 'react';
import './Login.scss';
/*--리셋,커먼 다시보기-- */ 
import './Reset.scss';
import './common.scss';
const Login = () => {
  return 

  <div class="container">
  <div class="logo">westagram</div>
  <div class="login">
    <div>
      <input
        class="id"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
    </div>
    <div>
      <input class="password" type="password" placeholder="비밀번호" />
    </div>
  </div>
  <div>
    <button class="loginButton">로그인</button>
  </div>
  <div class="forgetPassword">비밀번호를 잊으셨나요?</div>
</div>

};

export default Login;
