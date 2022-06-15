import React, { useEffect, useState } from 'react';
import './Login.scss';
import './../style/common.scss';
import { useNavigate } from 'react-router-dom';
// import './../style/common.scss';
const newId = 'kimkim@naver.com';
const newPs = 'Abcd1234!';

const Login = () => {
  useEffect(() => {
    fetch('http://10.58.6.230:8000/users/signingit', {
      method: 'POST',
      body: JSON.stringify({
        email: newId,
        password: newPs,
      }),
    })
      .then(response => response.json())
      .then(result =>
        localStorage.setItem('access_token', result.access_token)
      );
  }, []);

  const [id, setId] = useState('');
  const [ps, setPw] = useState('');
  const [btn, setBtn] = useState('');

  const navigate = useNavigate();
  const goToMain = () => {
    if (id.indexOf('@') >= 0 && ps.length >= 5) {
      navigate('/mainyuju');
    } else {
      alert('떙 다시하세요~~');
    }
  };
  const btnColor = (id, ps) => {
    if (id.indexOf('@') >= 0 && ps.length >= 5) {
      setBtn('loginyes');
    } else {
      setBtn('');
    }
  };

  const handleIdInput = event => {
    setId(event.target.value);
  };
  const handlePwInput = event => {
    setPw(event.target.value);
  };

  useEffect(() => {
    btnColor(id, ps);
  }, [id, ps]);

  //useEffect(()=>{},[])

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
              id="btnn"
              type="submit"
              className={`loginno + ${btn}`}
              placeholder="로그인"
            >
              로그인
            </button>
          </form>
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
