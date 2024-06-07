// 메인페이지 컴포넌트 //

import Banner from "../modules/Banner";
import SecIntro from "../modules/SecIntro";

export default function Main() {
  //
  return (
    <>
      {/* 1. 배너 컴포넌트 */}
      <Banner catName={"main" + Math.ceil(Math.random() * 3)} />
      
      {/* 2. 섹션소개 컴포넌트 */}
      <SecIntro />
    </>
  );
} ///////Main ////
