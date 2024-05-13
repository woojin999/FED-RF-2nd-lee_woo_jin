// 메뉴 관련 데이터 JS - mdata.js ///////

/******************************************* 
    [ 데이터 구조 ]
    {
        상위메뉴1:{
            하위메뉴1:[서브1,서브2,서브3,...],
            하위메뉴2:[서브1,서브2,서브3,...],
            하위메뉴3:[서브1,서브2,서브3,...],
            ...
        },
        상위메뉴2:{
            하위메뉴1:[서브1,서브2,서브3,...],
            하위메뉴2:[서브1,서브2,서브3,...],
            하위메뉴3:[서브1,서브2,서브3,...],
            ...
        },
        ...
    }
    
*******************************************/
const mdata = {
  Only시코르: {
    오노마: ["에센스", "스킨/토너", "크림", "선크림", "세트"],
    "시코르 컬렉션": [
      "시코르 스킨케어",
      "시코르 메이크업",
      "시코르 바디",
      "시코르 뷰티툴",
    ],
    "미니 시코르": ["메이크업", "스킨케어", "헤어/바디"],
  },
  스킨케어: {
    페이셜케어: [
      "스킨/토너",
      "로션",
      "에센스/세럼",
      "크림/젤/밤",
      "아이케어",
      "오일",
      "미스트",
      "세트",
    ],
    클렌징: [
      "클렌징워터/오일",
      "클렌징젤/폼/솝",
      "클렌징밀크/크림/밤",
      "아이/립 리무버",
      "클렌징티슈/패드",
      "스크럽/필링",
      "클렌징/마사지기기",
    ],
    "마스크/팩": ["시트마스크", "워시오프팩", "슬리핑팩", "부분 패치"],
    선케어: ["선크림", "선쿠션", "선스틱/스프레이"],
  },
  메이크업: {
    베이스메이크업: [
      "프라이머/베이스",
      "BB/CC",
      "파운데이션",
      "쿠션",
      "컨실러",
      "파우더",
      "메이크업픽서",
    ],
    립메이크업: [
      "립스틱",
      "립틴트/락커",
      "립글로스",
      "립펜슬/립라이너",
      "립에센스/립밤",
    ],
    아이메이크업: [
      "아이라이너",
      "아이브로우",
      "아이섀도우/팔레트",
      "마스카라",
      "아이프라이머",
      "아이래쉬/속눈썹영양제",
    ],
    "블러셔/하이라이터/쉐딩": ["블러셔/치크", "하이라이터", "쉐딩/컨투어링"],
    네일케어: [
      "네일 폴리쉬",
      "젤 네일 폴리쉬",
      "베이스/탑코트",
      "네일팁/스티커",
      "리무버/영양제",
    ],
  },
  맨즈케어: {
    "쉐이빙/클렌징": ["폼/젤/크림", "애프터쉐이브", "올인원"],
    페이셜케어: [
      "스킨/토너",
      "로션/크림/올인원",
      "에센스/세럼",
      "마스크/팩",
      "선케어",
      "세트",
    ],
    메이크업: ["베이스/BB/CC", "립밤/립틴트"],
  },
  바디케어: {
    바디워시: ["바디클렌저/비누", "바디스크럽", "입욕제", "여성청결제"],
    바디보습: ["바디로션", "바디크림/젤/밤", "바디오일/에센스", "바디미스트"],
    "핸드/풋": [
      "핸드워시",
      "핸드크림/밤",
      "세니타이저",
      "풋크림",
      "발관련용품",
    ],
    "기능성 바디": ["슬리밍/탄력", "임산부/튼살"],
    "데오드란트/제모": ["스프레이", "스틱/롤온", "제모용품"],
    "베이비/키즈": [
      "워시",
      "로션/크림",
      "오일/파우더",
      "선케어",
      "립케어",
      "네일/마스크팩",
      "세트",
    ],
    덴탈케어: [
      "치약",
      "칫솔",
      "가글용품/구취제거제",
      "치아미백제/치실",
      "세트",
    ],
  },
  향수: {
    향수: ["여성향수", "남성향수", "스틱/롤온", "인센스", "향초/디퓨저/방향제"],
  },
  헤어케어: {
    "샴푸/린스/트리트먼트": ["샴푸/린스", "트리트먼트/헤어팩", "세트"],
    염모제: ["염색"],
    헤어스타일링: [
      "드라이샴푸",
      "헤어에센스/오일",
      "헤어젤/스프레이/무스",
      "헤어왁스/포마드",
      "헤어미스트",
    ],
    헤어기기: ["드라이기", "헤어 아이론"],
  },
  "웰니스☘": {
    힐링케어: ["아로마 오일", "바디테라피", "인센스", "디퓨저/캔들"],
    이너뷰티: ["유산균"],
    페미닌케어: ["페미닌케어"],
  },
  뷰티툴: {
    페이스소품: [
      "메이크업브러시",
      "스펀지/퍼프",
      "브러시/퍼프 클렌저",
      "화장솜",
      "면봉",
    ],
    "아이 소품": ["눈썹손질도구/족집게", "뷰러/고데기", "속눈썹", "쌍꺼풀"],
    네일소품: ["네일 도구"],
    바디소품: ["샤워용품", "클렌징도구"],
    헤어소품: ["헤어브러쉬", "헤어액세서리", "헤어롤"],
    기타화장소품: ["거울", "파우치", "기타"],
    잡화: ["잡화", "마스크"],
  },
}; ///////////// mdata ///////////////////

export default mdata;