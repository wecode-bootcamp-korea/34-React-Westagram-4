/* eslint-disable */
import React from 'react';
import './Login.scss';
// import '../../styles/reset.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  //Login은 component니까 처음에 대문자
  const [userId, setUserId] = useState(''); // 얘는 변수명이라 카멜케이스
  const [userPw, setUserPw] = useState(''); // 얘는 변수명이라 카멜케이스
  const [userBtn, setUserBtn] = useState(false);
  // console.log('id', userId, 'pw', userPw);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/mainEunjeong');
  };

  const activeLogin = () => {
    if (userId !== '' && userId.indexOf('@') >= 0 && userPw.length >= 5) {
      setUserBtn(true);
    } else {
      setUserBtn(false);
    }
  };
  // userId.indexOf("@")>=0

  return (
    <div className="log_wrap">
      <article className="content">
        <section className="title">
          <h1>Westagram</h1>
        </section>
        <form
          action="http://www.example.com/form.html/"
          method="post"
          name=""
          id="login"
          onSubmit={event => {
            event.preventDefault();
            goToMain();
          }}
        >
          <fieldset>
            <legend />
            <label htmlFor="login_id" />
            <input
              value={userId}
              type="text"
              id="login_id"
              placeholder="전화번호, 사용자이름  또는 이메일"
              onInput={e => setUserId(prev => (prev = e.target.value))}
              onKeyUp={activeLogin}
            />
            <label htmlFor="login_pwd" />
            <input
              value={userPw}
              type="password"
              id="login_pwd"
              placeholder="비밀번호"
              onInput={e => setUserPw(prev => (prev = e.target.value))}
              onKeyUp={activeLogin}
            />

            <button
              disabled={false}
              id="btn"
              className={userBtn ? 'login_input login_btn' : 'login_btn'}
            >
              로그인
            </button>
          </fieldset>
        </form>
        <section className="find">
          <div className="pwd_forget">
            <p>
              <a href="#">비밀번호를 잊으셨나요?</a>
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Login;

// const idd = document.getElementById("login_id");  //DOM에 접근
// const pwdd = document.getElementById("login_pwd");
// const btnBtn = document.getElementsByClassName("login_btn")[0];

// const activeLogin = () => {
//     let id = idd.value;
//     let pwd = pwdd.value;

//     if((id && pwd) && (pwd.length > 1)) {
//         btnBtn.classList.add('login_input');
//     }
//     else {
//         btnBtn.classList.remove('login_input');
//     }
// }

// idd.addEventListener('keyup', activeLogin);  //keyup 이벤트가 발생하면 함수가 실행된다.
// pwdd.addEventListener('keyup', activeLogin);

/*
  1.setUserId를 호출하여 userId값을 바꾸려고 한다.
  2.그런데 바로 setUserId()를 호출하면 input이벤트가 발생하기도 전에 바로 실행되기 때문에 
  "함수로 한번 감싸준다." (e)=>{ return setUserId((prev)=>prev=e.target.value)}
  3.oninput 이벤트가 살행되면 이벤트가 발생하는데, 그 이벤트에 관련한 내용이 담긴 객체를 e라는 매개변수로 받는다.
  4.이후 setUserId함수를 통해 userId값을 인풋창에 입력한 값인 e.target.value로 바꿔준다.
  5.state값이 바뀌면 자동으로 리렌더링 되어 , 바뀐 값으로 렌더된다.
*/

// /jsx의 형태로 쓸 때는 함수를 작성할때 무조건 {}(중괄호)안에 작성한다. e는 변수이름
