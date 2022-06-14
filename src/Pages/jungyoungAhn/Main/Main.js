import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div class="container2">
      <nav>
        <div class="logo2">
          <p>
            <i class="fab fa-instagram" />
          </p>
          <p>westagram</p>
        </div>

        <div class="searchBar">
          <input type="text" placeholder="검색" />
          <i id="search" class="fas fa-search" />
        </div>
        <div class="icons">
          <a href=" ">
            <i class="far fa-compass" />
          </a>
          <a href=" ">
            <i class="far fa-heart" />
          </a>
          <a href=" ">
            <i class="fas fa-user" />
          </a>
        </div>
      </nav>

      <main>
        <article>
          <div class="articleHead">
            <div class="articleHead-image">
              <p>
                <img
                  width="32"
                  height="32"
                  alt="wecode-logo"
                  src="wecodeimg.png"
                />
              </p>
            </div>

            <div class="articleHead-text">
              <p>wecode_bootcamp</p>
              <p>wecode - wecode</p>
            </div>
          </div>

          <div class="articleImage">
            <img
              width="470"
              height="470"
              alt="졸업생인터뷰"
              src="wecodeinerviewimg.jpg"
            />
          </div>
          <div class="articleButton">
            <div class="articleButton1">
              <button>
                <i class="far fa-heart" />
              </button>
              <button>
                <i class="far fa-comment" />
              </button>
              <button>
                <i class="fas fa-share-square" />
              </button>
            </div>
            <div class="articleButton2">
              <button>
                <i class="far fa-bookmark" />
              </button>
            </div>
          </div>

          <div class="like">
            <div class="likeImage">
              <img
                alt="막례할머니"
                src="grandmother.jfif"
                width="32"
                height="32"
              />
              <span>messi_messi100, hm_son7님 외 4명이 좋아합니다.</span>
              <div class="more">
                <p>더보기</p>
              </div>
            </div>
          </div>

          <footer class="commentContainer">
            <input class="Comment" type="text" placeholder="댓글 달기..." />
            <button>게시</button>
          </footer>
        </article>

        <aside>
          <div class="asideHeader">
            <div class="asideHeaderImage">
              <img src="wecodeimg.png" alt="위코드" width="32" height="32" />
            </div>
            <div class="asideHeaderText">
              <p>wecode_bootcamp</p>
              <p>wecode | 위코드</p>
            </div>
          </div>
          <div class="asideFooter">
            <div class="asideFooterHead">
              <p>회원님을 위한 추천</p>
              <p>모두보기</p>
            </div>

            <div class="recommend1">
              <div class="recommend1Image">
                <img src="codecamp.png" alt="코드캠프" width="32" height="32" />
              </div>
              <div class="recommend1User">
                <p>코드캠프</p>
                <p>회원님을 팔로우합니다</p>
              </div>
              <div class="followButton">
                <p>팔로우</p>
              </div>
            </div>

            <div class="recommend2">
              <div class="recommend2Image">
                <img src="vanila.png" alt="바닐라코딩" width="32" height="32" />
              </div>
              <div class="recommend2User">
                <p>바닐라코딩</p>
                <p>회원님을 팔로우합니다</p>
              </div>
              <div class="followButton">
                <p>팔로우</p>
              </div>
            </div>

            <div class="recommend3">
              <div class="recommend3Image">
                <img
                  src="woatech.png"
                  alt="우아한테크캠프"
                  width="32"
                  height="32"
                />
              </div>
              <div class="recommend3User">
                <p>우아한테크캠프</p>
                <p>회원님을 팔로우합니다</p>
              </div>
              <div class="followButton">
                <p>팔로우</p>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Main;
