// CGV PJ 메인 페이지 JS - main.js

/*********************************************** 
    [ 요구사항 ]
    1. 영화 포스터 메뉴 클릭시 해당 예고편을 메인 아이프레임에 상영되도록 아이디를 매칭하여 src 속성을 변경해준다.
    2. 이때 자동재생 옵션을 추가하여 src 변경시 바로 동영상이 재생되게함
    3. 영상이 끝나면 다시 처음부터 재생되게옵션을 추가해준다
***********************************************/

// 1. 대상선정
// 1-1. 이벤트 대상 : .poster-menu a
const pMenu = document.querySelectorAll(".poster-menu a");
// 1-2. 변경 대상 : #ifr
const ifr = document.querySelector("#ifr");
console.log("대상:", pMenu, ifr);

// 2. 영화아이디 정보 객체로 구성
const movieId = {
  시민덕희: "w99yyjtYanE",
  파묘: "exiz8yl1TX4",
  이프온리: "WGFapljXfnU",
  건국전쟁: "nIHUio043fE",
  소풍: "7VHsScXQyw0",
  웡카: "Bldf9SWRPFM",
};

// 3.이벤트 설정 및 기능구현
// 포스터 버튼에 forEach()메서드로 순회
pMenu.forEach((ele) => {
  ele.onclick = () => {
    // 클릭된 a요소를 구분하기 위해 하위 img포스터의 alt속성 읽어오기
    // 속성읽기 내장 함수는 getAttribute()
    let txt = ele.querySelector("img").getAttribute("alt");
    console.log("클릭",txt);
    console.log(movieId[txt]);
    // 아이프레임 src변경하기
    // 속성변경 js 내장함수
    // setAttribute(속성명,값)
    // 대상 : 아이프레임 ifr
    // 영화 아이디값 -> movieId 객체
    // 객체 호출법 movieId[영화이름 속성명]
    let mvSrc = "https://www.youtube.com/embed/" + movieId[txt] + "?autoplay=1";
    ifr.setAttribute("src", mvSrc);
  }; // click
}); // foreach
