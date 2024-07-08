import React, { useState } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import TopArea from "./components/layout/TopArea";
import MainArea from "./components/layout/MainArea";
import FooterArea from "./components/layout/FooterArea";

// 컨텍스트 API 불러오기
import { pCon } from "./components/modules/pCon";

// 전체 공통CSS
import "./css/index.scss";
import CartList from "./components/modules/CartList";

function MainComponent(props) {
  // 상태관리 변수 셋팅 ///
  // 1. 페이지 변경 상태변수
  const [pgName, setPgName] = useState("main");
  // 2. 카트리스트 사용여부 : true일때 사용
  const [carSts, setCartSts] = useState(false);


  /* 
    [ 컨텍스트 API 공개 변수들 ]
    1. setPgName - 페이지이름 업데이트 메서드
  */

    /******************************************* 
        [ 컨텍스트 API 공개 변수들 ]
        1. pgName - 페이지이름
        2. setCartSts - 카트 사용여부 셋팅
        
     *******************************************/

  return (
    <pCon.Provider value={{setPgName,setCartSts}}>
      <TopArea />
      <MainArea page={pgName} />
      <FooterArea />
      {/* 카트리스트 : 카트 상태값 true 출력 */}
      {carSts && <CartList />}
    </pCon.Provider>
  );
}

// 출력하기 ///
const root = createRoot(document.querySelector("#root"));
root.render(<MainComponent />);
