// 큐브 애니메이션 JS - cube.js

/* 
    [ 요구사항 분석 ]
    1. 버튼을 클릭하여 멈춰있던 큐브의 애니메이션 설정 상태를 업데이트하여 작동시킨다.
    2. 이때 버튼은 "돌아" 에서 멈춰로 변경시킨다
    3. 다시 멈춰 버튼 클릭시 돌고있던 큐브의 애니메이션 설정 상태를 변경하여 멈추게 한다. (버튼은 다시 '돌아'로 변경)
*/


// 1. 대상선정
// 1-1. 이벤트 대상: .btngo
const btngo = document.querySelector('.btngo');

// 1-2. 변경대상 : .cube
const cube = document.querySelector('.cube');
// console.log('대상', btngo, cube);

// 2. 이벤트 속성 셋팅하기
// 대상: .btngo -> btngo 변수
// 이벤트속성에 익명함수를 할당하면 이벤트 발생시 익명함수 내부의 코드가 실행됨
btngo.onclick = function () {
  // 1. 함수호출확인(this는 버튼자신)
  // console.log('나',this);

  // 2. 변경대상: .cube -> cube변수
  // 3. 변경내용: 큐브에 클래스on을 없으면 넣고 있으면 제거한다 미리 셋팅된 애니작동/멈춤
  cube.classList.toggle("on");

  // 큐브 거리변경 변수셋팅은
  // html 요소에 클래스on을 넣기/빼기하면 적용된다
  document.querySelector('html').classList.toggle("on");

  // classList는 요소의 클래스만 전문적으로 다뤄주는 JS 내장객체다
  // 메서드로 add() 넣기, remove() 지우기,toggle()
  // 4. 버튼 글자변경하기
  // 읽어본 버튼 글자가 "돌아" 면 "멈춤"
  // 돌아가 아니면 돌아 텍스트로 할당

  this.innerText = this.innerText == "TURN" ? "STOP" : "TURN";
}; ///// click 이벤트 함수 /////