// 08. 재귀호출 JS - call_myself.js

import mFn from "./my_function.js";

// 초기셋팅하기
// 대상: .gbox
const gbox = mFn.qs(".gbox");

// 코드변수
let hcode = "<ul>";

// for문으로 코드만들기 : ul > li > img
for (let i = 1; i <= 7; i++) {
  hcode += `
        <li class="${i}">
            <img src="./images/auto_scroll/m${i}.jpg" alt="갤러리이미지"> 
        </li>
    `;
}
hcode += "</ul>";

// 대상에 코드넣기
gbox.innerHTML = hcode;

/// 갤러리 박스를 왼쪽으로 계속 움직이게하는
// 재귀호출함수 만들기 //////

// 움직일 대상 : .gbox ul
let target = mFn.qsEl(gbox, "ul");
// 기준값 업데이트 함수
const updateCriteria = () => mFn.qsaEl(target, "li")[0].offsetWidth;
// 기준값(대상 li의 가로크기값)
let criteria = updateCriteria();
// 리사이즈시 업데이트
mFn.addEvt(window, "resize", () => {
  criteria = updateCriteria();
  console.log("기준값업데이트:", criteria);
});

// 현재 translate 값
let currVal = 0;

function moveGallery() {
  // 현재값 1씩 감소  
  target.style.translate = --currVal + "px";

  // 하나 크기만큼 나가면 처리
  // 기준값을 마이너스로 하고 소주점 아래는 버림
  // Math.floor()소수점 아래 내림(버림) 함수
  if(currVal <= Math.floor(-criteria)){

      // 1.맨앞li 맨뒤로 이동
      // appendChild(맨앞li)
      // -> 맨앞li는 새로 구해와야함(계속변경되므로)
      target.appendChild(mFn.qsaEl(target,"li")[0]) 
      
      // 2. translate값 초기화
      target.style.translate = "0px";
      // 하나 크기만큼 나가면 currVal값 초기화
      currVal = 0;
    }/// if/// 

  // appendChild(맨앞li)
  // 재귀호출(타임아웃함수로 호출)
  // stopSts변수값이 false 일때만 실행
  if (!stopSts) setTimeout(moveGallery,10)
    
    
} ////// moveGallery 함수 //////

// 대상에 마우스 오버시 멈추고 아웃시 다시 흘러가게 하기
// 대상: .gbox -> gbox 변수
// 멈춤 상태변수
let stopSts = false;

// 1. 멈추기(mouseenter)
mFn.addEvt(gbox,"mouseenter",()=>{
    // 멈춤상태변수 true 변경
    stopSts = true;
});
// 2. 다시 흘러가기(mouseeleave)
mFn.addEvt(gbox,"mouseleave",()=>{
    stopSts = false;
    // 재귀호출함수 호출
    moveGallery();
});


// setTimeout(moveGallery, 2000);


/////////////////////////////////////
// 프로그래스 바 퍼센트 증가하기 재귀호출함수 만들기 ///
// 퍼센트 증가 숫자변수
let percent = 0;
// 숫자 출력박스 : .pNum
const pNum = mFn.qs(".pNum");
// 퍼센트바 : .bar
const bar = mFn.qs(".bar");
// 글자출력박스 : .txt
const txt = mFn.qs(".txt");

increasePercent();
// 재귀호출함수 만들기
function increasePercent(){
  
  // 1.pNum에 숫자출력
  pNum.innerHTML = ++percent + "%";
  // 2. 퍼센트바 값 동시에 증가
  bar.style.width = percent + "%";
  // 3.중가 숫자가 100보다 작을때까지 계속 호출
  if(percent<100){
    setTimeout(increasePercent,60);
  }
  else{
    // 4. 제귀호출이 끝나면 "준비 글자를 출발로 변경"
    txt.innerHTML = "출발";
    bar.style.backgroundColor = "red";
    // 5. 슬라이드 이동함수 호출하기(타임아웃호출은 주석)
    moveGallery();
  } //// else ///
} // increasePercent 함수 //
