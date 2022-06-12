/* eslint-disable */

import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main_wrap">
      <div className="container">
        <header>
          <nav>
            <div className="logo">
              <div onClick="location.href='#'">
                <a>
                  <i className="fab fa-instagram fa-2x" />
                </a>
              </div>
              <div className="logo_txt">
                <h3 className="we">
                  <a>
                    <img src="/images/eunjeongKim/instagram.png" alt="" />|
                    WESTAGRAM
                  </a>
                </h3>
              </div>
            </div>
            {/* logo */}
            <div className="searchbar">
              <input type="text" placeholder="검색" />
            </div>
            {/* <!-------------------------- search --------------------------> */}
            <div className="icon">
              <ul>
                <li>
                  <a href="">
                    <img src="/images/eunjeongKim/explore.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/images/eunjeongKim/heart.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="/images/eunjeongKim/profile.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-------------------------- icon --------------------------> */}
          </nav>
        </header>
        {/* <!-- -------------인스타그램 피드 & 스토리 ------------- --> */}
        <div className="main">
          <div className="feeds">
            <article>
              <div className="f_top">
                <div className="feed_profile">
                  <span className="por_icon">
                    <a href="#" />
                  </span>
                  <span className="por_txt">
                    <a href="">eu'-'uj</a>
                  </span>
                  <span className="por_more" />
                </div>
              </div>
              {/* <!-- --------------------------프로필 top-------------------------- --> */}
              <div className="peed_cont">
                <div className="peed_img">
                  <img src="images/eunjeongKim/peed.jpg" alt="피드이미지" />
                </div>
                {/* <!-- --------------------------피드이미지-------------------------- --> */}
                <div className="commu">
                  <div className="commu_left">
                    <a>
                      <i className="fas fa-heart" />
                    </a>
                    <a>
                      <i className="far fa-comment" />
                    </a>
                    <a>
                      <i className="fas fa-external-link-alt" />
                    </a>
                  </div>
                  <div className="commu_right">
                    <a>
                      <i className="far fa-bookmark" />
                    </a>
                  </div>
                </div>
                {/* <!-- --------------------------피드 아래 아이콘 ----------------------------> */}
                <div className="peed_like">
                  <div className="like_info">
                    <span>
                      <a href="#" />
                    </span>
                    <p>
                      <a href="#">
                        <strong>hang_ke_mi</strong>
                      </a>
                      님 외
                      <a href="#">
                        {' '}
                        <strong>52명</strong>이
                      </a>{' '}
                      &nbsp;좋아합니다
                    </p>
                  </div>
                </div>
                <div className="peed_contt">
                  <p>
                    <strong>eu'-'uj</strong> &nbsp;골댕이 사랑둥잉💛
                    너무...&nbsp;<span>더 보기</span>
                  </p>
                  <p>
                    {' '}
                    <strong>hang_ke_mi</strong> &nbsp;너무 예쁘다💚
                  </p>
                </div>
                <div className="comment">
                  <form className="comm_posting" method="POST">
                    <div className="comment_emotion" />
                    <input
                      className="comment_input"
                      type="text"
                      name="write"
                      placeholder="댓글달기..."
                    />
                    <button className="posting">게시</button>
                  </form>
                </div>
              </div>
              {/* <!-- --------------------------프로필 cont-------------------------- --> */}
            </article>
          </div>
          {/* <!-- --------------------------인스타그램 오른쪽--------------------------  --> */}
          <div className="main_right">
            <div className="mine">
              <div className="mine_profile">>wecode</div>
              <div className="mine_profile_txt">
                <p>wecode_bootcamp</p>
                <p>WeCode | 위코드</p>
              </div>
            </div>
            {/* <!-- --------------------------내 프로필 ----------------------------> */}
            <div className="story">
              <div className="story_top">
                <p>스토리</p>
                <p>모두 보기</p>
              </div>
              <ul className="story_user">
                <li>
                  <div className="story_update" />
                  <div className="story_txt">
                    <div className="user_name">user1</div>
                    <div className="user_time">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="story_update" />
                  <div className="story_txt">
                    <div className="user_name">user2</div>
                    <div className="user_time">4시간전</div>
                  </div>
                </li>
                <li>
                  <div className="story_update" />
                  <div className="story_txt">
                    <div className="user_name">user3</div>
                    <div className="user_time">13시간전</div>
                  </div>
                </li>
                <li>
                  <div className="story_update" />
                  <div className="story_txt">
                    <div className="user_name">user4</div>
                    <div className="user_time">20시간전</div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- --------------------------스토리목록-------------------------- --> */}
            <div className="add">
              <div className="add_top">
                <p>회원님을 위한 추천</p>
                <p>모두 보기</p>
              </div>
              <ul className="add_user">
                <li>
                  <div className="add_update" />
                  <div className="add_txt">
                    <div className="add_name">user1</div>
                    <div className="add_time">16분전</div>
                  </div>
                </li>
                <li>
                  <div className="add_update" />
                  <div className="add_txt">
                    <div className="add_name">user2</div>
                    <div className="add_time">4시간전</div>
                  </div>
                </li>
                <li>
                  <div className="add_update" />
                  <div className="add_txt">
                    <div className="add_name">user3</div>
                    <div className="add_time">13시간전</div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- --------------------------추천친구-------------------------- --> */}
            <p>
              Westagram 정보 ㆍ지원ㆍ홍보 센터ㆍAPI
              <br />
              채용 정보ㆍ개인정보처리방침ㆍ약관ㆍ
              <br />
              디렉터리ㆍ프로필ㆍ해시태그ㆍ언어
              <br />
              <br />
              ⓒ2022 WESTAGRAM
            </p>
          </div>
          {/* <!-- --------------------------오른쪽 끝-------------------------- --> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
