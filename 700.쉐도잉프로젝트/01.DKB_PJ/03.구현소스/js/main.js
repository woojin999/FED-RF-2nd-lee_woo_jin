// DKB PJ 메인 JS - main.js ////////////

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 부드러운 스크롤 불러오기
import { startSS, setScrollPos } from "./smoothScroll23.js";

// 모듈로 호출된 JS에서는 다른 외부 JS를 import로 호출가능
// import하려는 파일에서 반드시 함수, 변수 등을 export해야함

import slideFn from "./slide.js";

// 데이터 셋팅 불러오기 //
import * as dkbData from "../data/dkb_data.js";
// import { previewData } from '../data/dkb_data.js';

// GNB메뉴 데이터 불러오기 //
import gnbData from "../data/gnb_data.js";
console.log(gnbData);

// 구현코드 파트

// GNB 메뉴 코드 넣기
// 대상 : .gnb
// 데이터 : gnbData는 객체 배열용 map() 메서드 못씀
// 그래서 gnbData를 키배열로 변환해서 사용함
// 그리고 이 객체의 key는 상위메뉴 이기도 함
// Object.keys(객체) -> 해당객체의 속성명(키) 배열생성
console.log(Object.keys(gnbData), Object.values(gnbData));
myFn.qs(".gnb").innerHTML = `
    <ul>
    ${Object.keys(gnbData)
      .map(
        (v) => `
        <li>
            <a href="#">${v}</a>
            ${
              // 서브 메뉴가 "없음" 이면 빈값
              // 아니면 서브메뉴 출력
              // gnbData[키] -> 값을 가져옴
              gnbData[v] == "없음"? "": `
              <div class="smenu">
                <div class="swrap">
                    <h2>${v}</h2>
                    <ol>
                    ${gnbData[v].map((vSub) => `
                    <li>
                        <a href="#">${vSub}</a>
                    </li>
                    `).join("")}
                    </ol>
                </div>
              </div>
              `
            }
        </li>
        `
      )
      .join("")}
    </ul>
`;

// 1. 부드러운 스크롤 호출
startSS();

// 2.slideFn 호출
slideFn();

// 3. 인트로 동영상 파트 클릭시 동영상 태그 넣기
// 이벤트 대상 === 변경대상 : .intro-mv-img
const introMv = myFn.qs(".intro-mv-img");
introMv.onclick = () => {
  console.log("인트로 영상");
  // 1. 동영상 넣기
  introMv.innerHTML = `
    <video src="./images/intro_mv.mp4" autoplay controls></video>
    `;
  // 2.클래스 off 지우기(플레이버튼 안나오게함)
  introMv.classList.remove("off");
}; //// click 이벤트 함수 ////////

/********************************************** 
 * [ 코드랩핑이란? ]
 로딩시 바로 실행됨 -> 실행 코드를 지역화하고자 할때
 함수로 만들고 이를 호출하면 됨. 그러나 불편함
 익명함수로 만들고 바로 실행하게 하면됨
 방법 : (익명함수)() -> 바로 실행됨
 실제코드 : (()=>{코드}) ()
 실제코드 : (function(){코드}) ()
 -> 이러한 처리방법을 코드의 지역화 또는 코드랩핑이라고 부르기도 함
 -> 이렇게 하는 목적은 변수,함수 충돌 방지
 
 **********************************************/

// 2. 미리보기 파트 내용 넣기 ///
// 미리보기 구현 코드랩핑구역 시작//
(() => {
  // 대상: .preview-box
  const previewBox = myFn.qs(".preview-box");
  // 데이터: dkb_data.js 의 previewData 배열
  const pData = dkbData.previewData;
  // 데이터원본의 정렬을 내림차순으로 변경

  // 배열값인 객체의 idx키값을 기준으로 내림차순 정렬을 할때 문자형 숫자이므로 Number() 숫자형변환 메서드로 싸서 숫자로써 비교하여 정확한 내림차순이 되도록 한다
  pData.sort((a, b) =>
    Number(a.idx) == Number(b.idx) ? 0 : Number(a.idx) < Number(b.idx) ? 1 : -1
  );
  // 구조: ul>li>h3+p
  // 8개만 데이터를 구성하여 넣는다
  // html 코드변수
  let hcode = `<ul class="fx-box">`;

  // li구성을 hcode변수에 대입연산자로 할당함
  for (let i = 0; i < 8; i++) {
    hcode += `
        <li>
            <h3>${pData[i].title}</h3>
            <p>${pData[i].story}</p>
        </li>
    `;
  } // for //
  hcode += `</ul>`;
  // 데이터 확인
  // console.log(hcode);
  // console.log('대상',previewBox,'미리보기 data:', pData);

  // 2. 화면출력하기 ////
  previewBox.innerHTML = hcode;
})(); // 미리보기 코드랩핑구역 종료

// 현장포토 구역
(() => {
  // 대상: .live-box
  const liveBox = myFn.qs(".live-box");
  // 데이터: dkb_data.js 의 liveData 배열
  const lvData = dkbData.liveData;
  // 구조: ul>li>figure>img+figcaption
  // 8개의 데이터를 html 구성하여 넣는다
  // html 코드변수
  let hcode = `<ul>`;

  // li구성을 hcode변수에 대입연산자로 할당함
  // liveData 배열은 총8개임 모두 돌기를 셋팅하기
  lvData.forEach((v) => {
    hcode += `
        <li>
            <figure>
                <img src="./images/live_photo/${v.imgName}.jpg" alt="${v.title}">
                <figcaption>${v.title}</figcaption>
            </figure>
        </li>
    `;
  }); /// forEach ////////
  hcode += `</ul>`;
  // 데이터 확인
  // console.log(hcode);
  // console.log('대상',previewBox,'미리보기 data:', pData);

  // 2. 화면출력하기 ////
  liveBox.innerHTML = hcode;
})(); // 미리보기 코드랩핑구역 종료

// 대표이미지 구역
(() => {
  // 대상: .poster-box
  const posterBox = myFn.qs(".poster-box");
  // 데이터: dkb_data.js 의 posterData 배열
  const pData = dkbData.posterData;

  // 구조: ul>li>figure>img+figcaption
  // 8개의 데이터를 html 구성하여 넣는다
  // html 코드변수
  let hcode = `<ul>`;

  // li구성을 hcode변수에 대입연산자로 할당함
  pData.forEach((v) => {
    hcode += `
        <li>
            <figure>
                <img src="./images/poster_img/${v.imgName}.jpg" alt="${v.title}">
                <figcaption>${v.title}</figcaption>
            </figure>
        </li>
    `;
  }); /// forEach ////////
  hcode += `</ul>`;
  // 데이터 확인
  // console.log(hcode);
  // console.log('대상',previewBox,'미리보기 data:', pData);

  // 2. 화면출력하기 ////
  posterBox.innerHTML = hcode;
})(); // 미리보기 코드랩핑구역 종료
