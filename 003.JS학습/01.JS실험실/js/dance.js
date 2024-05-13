// 09. 중간스크롤 가로이동 JS - dance.js

// 나의 함수 불러오기
import mFn from "./my_function.js";

// [1] 태그 셋팅하기 ///////////

// 1. 3번 스테이지에 ul>li 구조 이미지 넣기
// 대상: .slidePg (스티키박스)

const slidePg = mFn.qs(".slidePg");
// console.log(slidePg);
// 2. 코드변수에 태그 만들어 넣기
let hcode = "<ul>";
for (let i = 1; i <= 7; i++) {
  hcode += `
        <li>
            <img src="./images/dance/${i}.jpg" alt="dance image" />
        </li>
    `;
} /// for /////////////

hcode += "</ul>";

// 3. 코드 출력하기
slidePg.innerHTML = hcode;

//////////////////////////////////

// [2] 3번째 영역에 도달한 경우 ul박스 가로 방향 이동하기//////////

// 1. 대상선정하기 //////////////
// 이벤트 대상: window
// 이벤트 종류: scroll
// 위치기준대상: .tpg -> 스티키를 싸고 있는 부모박스
const tpg = mFn.qs(".tpg");
// 움직일 대상 : .slidePg > ul
const target = mFn.qs(".slidePg > ul");
// 추가 대상 : .slidePg > ul > li
const eachList = mFn.qsaEl(target, "li");

// console.log(tpg,target,eachList);

// 2. 이벤트 설정하기 ////
mFn.addEvt(window, "scroll", moveSlide);

// 3. 함수 만들기 ///
// (1) 슬라이드 이동함수 /////////////////
function moveSlide() {
  // 1. 스티키 부모박스 바운딩top값
  let bTop = mFn.getBCR(tpg);
  //   console.log("바운딩top", bTop);

  // 2. 이동할 타겟박스 left값으로 부모 바운딩 top값 넣기
  // (1) 바운딩 top값이 0초과일때 처음위치 재설정
  if (bTop > 0) {
    target.style.left = "0px";
  } else if (bTop <= 0 && bTop > -3000) {
    // 바운딩 top값이 0이하 -3000이상일때
    target.style.left = bTop + "px";
  }
  // (3) 마지막 한계 이후엔 한계값으로 셋팅
  else {
    target.style.left = "-3000px";
  }

  // 3. 개별리스트 상하 이동함수 호출하기
  eachList.forEach((ele, idx) => upDownFn(ele, idx));
  // ele는 해당 리스트 li자신
  // idx는 li 자신 순번
} /////// moveSlide 함수 //////

// (2) 리스트 상하 이동함수 ///
function upDownFn(ele, idx) {
  // ele - 각 li요소

  // 스티키 박스 하위 li가 보이는 화면 left 기준선에 대한 위치값
  // 바운딩 left값을 이용하여 자기위치에서 위/아래로 이동하는 수치변경하기

  // 1. 바운딩 left값 구하기
  let mVal = mFn.getBCR2(ele);

  // 2. 위치값을 양수로 만들고 윈도우 크기로 나눈후 백문율
  // 수치가 크므로 2로 나누어 주었음
  mVal = (Math.abs(mVal / window.innerWidth) * 100) / 4;
  // console.log(mVal);

  // 3. 들어온 li순번이 짝수일 경우 마이너스를 곱하여 방향을 반대로 해준다
  // 짝수는 %연산자 사용 : 숫자%2 == 0 이면 짝수
  if (idx % 2 == 0) {
    mVal = -mVal;
  }
  // 4. 실제 위치이동 CSS적용하기
  ele.style.translate = `0 ${mVal}%`;
} /// upDownFn 함수 ////


//////////////////////////////////////////////
// 메뉴 오버시 배경박스 따라다니기 구현 /////////
//////////////////////////////////////////////

// 1. 대상선정 ///
/// 이벤트 대상 : .gnb li
const gnbList = mFn.qsa(".gnb li");
// 변경대상 : .mbg
const mbg = mFn.qs(".mbg");

// 2. 이벤트 설정하기 ///
// 이벤트 종류 : mouseenter / mouseleave
gnbList.forEach(ele=>{
  mFn.addEvt(ele,"mouseenter",overFn)
  mFn.addEvt(ele,"mouseleave",outFn)
}); ////////forEach //////////// 

// 3. 함수 만들기 ///
function overFn() {
  // 1.오버된 li의 left위치값 읽기
  let posLeft = this.offsetLeft;
  let boxWidth = this.offsetWidth;
  console.log("오버:", posLeft, boxWidth);
  // 2. 메뉴배경 보이기 + 위치값 주기
  mbg.style.opacity = 1;
  mbg.style.left = posLeft + 'px';
  mbg.style.width = boxWidth + "px";
} //// overFn함수 //////

function outFn() {
  console.log('아웃:', this);
  mbg.style.opacity = 0;
  // mbg.style.left = 0;
} //// outFn함수 //////