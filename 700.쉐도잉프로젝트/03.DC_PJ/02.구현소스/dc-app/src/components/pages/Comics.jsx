// 캐릭터페이지 컴포넌트 //

import Banner from "../modules/Banner"
import VidIntro from "../modules/VidIntro";

export default function Comics() {

  // 코드 리턴구역 //
  return (
    <>
      {/* 배너 컴포넌트 */}
      <Banner catName="COMICS" />
      {/* 비디오 소개 컴포넌트 */}
      <VidIntro catName={"COMICS"} clsName={"on"} />
    </>
  );
} ///////Comics ////
