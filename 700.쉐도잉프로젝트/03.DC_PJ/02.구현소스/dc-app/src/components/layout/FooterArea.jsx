// 하단영역 컴포넌트 //

// 로고 모듈
import Logo from "../modules/Logo";

// 하단 메뉴 데이터 불러오기
import { bmData } from "../data/bmenu";

// 하단영역 CSS
import "../../css/footer_area.scss";

export default function FooterArea() {
  //
  return (
    <footer className="info">
      <ul>
        {/* 하단로고 컴포넌트 넣기 */}
        <li>
          <Logo logoStyle="bottom" />
        </li>
        <li>
          {/* 하단링크박스 */}
          <ol className="bmenu">
            {
              bmData.map((v,i)=><li key={i}>
                <a href={v.link} target="_blank">{v.txt.toUpperCase()}</a>
                {/* toUpperCase - 대문자 변환
                    toLowerCase - 소문자 변환 */}
              </li>)
            }
          </ol>
        </li>
        <li>© & ™ DC. ALL RIGHTS RESERVED</li>
      </ul>
    </footer>
  );
} ///////FooterArea ////
