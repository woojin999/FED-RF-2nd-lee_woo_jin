// 옷소매 갤러리 JS - main.js

import mFn from "./my_function.js";

/*********************************************************** 
    1. 기능정의: 버튼 클릭시 갤러리박스를 잘라서 앞/뒤로 이동함

    1-1. 오른쪽버튼 클릭시 - 맨앞div 맨뒤로 이동
    -> 갤러리부모박스.appendChild(맨앞자식div)

    1-2. 왼쪽버튼 클릭시 - 맨뒤div 맨앞으로 이동
    -> 갤러리부모박스.insertBefore(맨뒤자식div,맨앞자식div)
 ***********************************************************/

// 1. 대상선정

// 1-1. 이벤트 대상: .abtn (이동버튼들)
const abtn = mFn.qsa(".abtn");

// 1-2. 변경대상: .gbx(갤러리 부모박스)
const gbx = mFn.qs(".gbx");

// console.log(abtn,gbx);

// 2. 이벤트 설정하기 /////
abtn.forEach((ele) => {
  mFn.addEvt(ele, "click", changeSlide);
}); // forEach ///

// 3. 변수설정하기 //////
// 광클 금지 변수(true면 금지, false는 허용)
let stopclick = false;
// 애니 시간(잠금시간)
const TIME_SLIDE = 400;

// 4.함수 만들기 ///////////////////
// 갤러리 이동하기 함수
function changeSlide() {
  // 0 .광클금지 ///
  if (stopclick) return;
  stopclick = true;
  setTimeout(() => {
    stopclick = false;
  }, TIME_SLIDE);

  // 1. 버튼 구분하기
  let isR = this.classList.contains("rb");

  console.log("skdisk", isR);

  // 2. 이동대상 담기 변수할당 //
  let eachOne = mFn.qsaEl(gbx, "div");

  // 3. 분기하기 ///
  // 3-1. 오른쪽 버튼일 경우
  if (isR) {
    // 오른쪽에서 이미지 박스가 들어오므로
    // 맨앞 div 맨뒤로 이동함
    // appendChild(맨앞div)
    // 대상: gbx
    gbx.appendChild(eachOne[0]);
  } /// if //////
  // 3-1. 왼쪽 버튼일 경우
  else {
    // 왼쪽에서 이미지 박스가 들어오므로
    // 맨뒤 div 맨앞로 이동함
    // insertBefore(맨뒤div,맨앞div)
    // 대상: gbx
    gbx.insertBefore(eachOne[eachOne.length - 1], eachOne[0]);
    // 맨뒤div순번은 갯수-1
  } /// else //////
} ///////// changeSlide 함수 ///////////

// 자동넘김용 호출함수 ///////////////
// 오른쪽 이동함수 //
const goRight = () => gbx.appendChild(mFn.qsaEl(gbx, "div")[0]);

// 자동넘김용 변수(인터발용: autoI, 타임아웃용: autoT)
let autoI, autoT;

// 인터발 호출함수 ///
const autoSlide = () => autoI = setInterval(goRight,3000);

// 인터발 함수 최초호출 //

autoSlide();

// 인터발지우기 함수 ///
const clearAuto = () => {
    // 인터발지우기
    clearInterval(autoI);
    // 타임아웃지우기(실행쓰나미 방지)
    clearTimeout(autoT);
    // 일정시간후 작동
    autoT = setTimeout(autoSlide, 5000);
}; /// clearAuto 함수 ///

// 버튼 클릭시 clearAuto함수 호출하기 //
abtn.forEach(ele=>mFn.addEvt(ele,"click",clearAuto));