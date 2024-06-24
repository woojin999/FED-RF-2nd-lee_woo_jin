import React from "react";

// 배너 데이터
import { banData } from "../data/banner";

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

// 배너 SS
import "../../css/banner.scss";
// 배너 슬라이드 기능 함수
import SlideFn from "../func/go_slide";

function Banner({ catName }) {
  // catName 배너 데이터 카테고리이름
  // 슬라이드 기능 생성자 함수 인스턴스 생성하기
  const sldFn = new SlideFn();

  // 선택 데이터
  const selData = banData[catName];
  // 코드 리턴구역 //
  return (
    <div className="banner">
      {/* 이동슬라이드 */}
      <ul className="slider">
        {selData.map((v, i) => (
          <li key={i}>
            <img
              src={process.env.PUBLIC_URL + v.src}
              alt={v.tit1 == "" ? "banner image" : v.tit1}
            />
            <section className="bantit">
              <h2>{v.tit1}</h2>
              <p>{v.tit2}</p>
              {/* 버튼 데이터가 있을때만 출력 */}
              {v.btn !== "" && <button>{v.btn}</button>}
            </section>
          </li>
        ))}
      </ul>

      {
        // 배너 데이터가 1개면 양쪽 이동버튼 출력 안함
        // 배열.length 로 배열개수 1 이상일때만 출력
        selData.length > 1 && (
          <>
            {/* 양쪽이동버튼 */}
            <button className="abtn lb" onClick={sldFn.goSlide}>
              ＜
            </button>
            <button className="abtn rb" onClick={sldFn.goSlide}>
              ＞
            </button>
            {/* 블릿 인디케이터 - 선택데이터의 개수만큼 만들기 
            map메서드의 반복기능만 이용하여 태그생성 순번은 첫번째 블릿li만 className "on" 넣기 */}
            <ol className="indic">
              {selData.map((v, i) => (
                <li key={i} className={i == 0 ? "on" : ""}></li>
              ))}
            </ol>
          </>
        )
      }
    </div>
  );
}

export default Banner;
