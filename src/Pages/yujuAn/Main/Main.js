import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="wrapperMain">
      <nav className="nav1">
        <div className="logoIs">
          <img
            src="/images/yuju/instagram.png"
            className="navIcon"
            alt="logo"
          />
          <span className="logoEng">westagramm</span>
        </div>
        <input type="text" className="navBox" placeholder="검색" />
        <div className="navBar">
          <img
            className="navIcon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="explore"
          />
          <img
            className="navIcon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
          <img
            className="navIcon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="profile"
          />
        </div>
      </nav>
      <main id="main">
        <div className="feeds">
          <div className="imgAa">
            <img
              className="sky"
              src="/images/yuju/sky.jpeg"
              alt="this is sky"
            />
          </div>
          <div className="feed_Icon">
            <div className="iconCon">
              <i className="fa-solid fa-heart " />
              <i className="fa-regular fa-comment " />
              <i className="fa-solid fa-arrow-up-from-bracket" />
            </div>
            <i className="fa-regular fa-bookmark bookmark" />
          </div>
          <div className="proImg">
            <p style={{ fontWeight: 700 }}>
              kkkuu1112
              <span style={{ fontWeight: 400 }}>
                생각보다 어렵다 오늘 청담에서 내려야 하는데 폰보느라 뚝섬 까지
                가버렸다 .. 그와중에 날씨 는 좋다
              </span>
            </p>
            <input type="text" placeholder="댓글달기..." />
            <div class="comment2">
              <p>
                <span class="name">2myungsun</span>님 외 122명이 좋아합니다
              </p>
              <p>
                <span class="name">hyunseng92</span> 그대로 성수까지 가
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
