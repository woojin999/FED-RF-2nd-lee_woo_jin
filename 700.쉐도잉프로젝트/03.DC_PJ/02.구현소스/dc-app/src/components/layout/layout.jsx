// 전체 레이아웃 컴포넌트 //

import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";

export default function Layout(){
    // 
    return(
        <>
            {/* 상단영역 */}
            <TopArea/>
            {/* 메인영역 */}
            <MainArea/>
            {/* 하단영역 */}
            <FooterArea/>
        </>
    );
} ///////Layout ////