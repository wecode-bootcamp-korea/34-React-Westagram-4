import React, { useState, useEffect } from 'react';
import './Login.scss';
import './../style/common.scss';

import { useNavigate } from 'react-router-dom';
// import './../style/common.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [ps, setPw] = useState('');
  const [classname, setClassname] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    if (id.indexOf('@') >= 0 && ps.length >= 5) {
      navigate('/mainyuju');
    } else {
      alert('떙 다시하세요~~');
    }
  };

  const handleIdInput = event => {
    setId(event.target.value);
  };
  const handlePwInput = event => {
    setPw(event.target.value);
  };

  return (
    <div className="hyunbeom_rapper">
      <div className="container">
        <div className="loginone">
          <h2 className="logoname logo"> westagram </h2>
          <form
            onSubmit={event => {
              event.preventDefault();
              goToMain();
            }}
            className="inputbox"
          >
            <input
              onChange={handleIdInput}
              type="text"
              className="id"
              placeholder="전화번호, 사용자이름 또는 이메일"
            />
            <input
              type="password"
              onChange={handlePwInput}
              className="password"
              placeholder="비밀번호"
            />
            <button
              // onClick={goToMain}
              type="submit"
              className="btn"
              placeholder="로그인"
            >
              로그인
            </button>
          </form>
          <p>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
