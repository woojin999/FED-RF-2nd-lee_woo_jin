// 도깨비 PJ 데이터 JSON - dkb_data.js

/********************************************* 
    [ 데이터 항목 객체 생성시 유의사항 ]
    1. 모든 데이터는 구분할 수 있는 유일키(기본키)를 생성한다
    2. 항목별 데이터는 객체로 구성한다
    3. 반복데이터는 객체를 반복하여 배열로 구성한다
    4. 반복데이터가 객체일 경우 배열로 변환하여 사용한다.
*********************************************/

// 1. 미리보기 구성 데이터
/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.제목 : title
    3.내용 : story
    4.방송일 : date
*************************************/

const previewData = [
  {
    idx: "1",
    title: "1화 미리보기",
    story: `▶ 과거 전장의 무신이자 충신이었던 김신(공유),
  한때 인간이었던 그가 도깨비가 된 사연은?
  
  ▶ 불멸의 삶을 살아온 도깨비 김신을 속수무책으로 소환해내는 소녀 지은탁(김고은).
  '도깨비 신부'라 주장하는 그녀의 정체는?
  
  ▶ 기묘한 동거를 시작한 김신과 저승사자(이동욱).
  저승사자를 내쫓으려는 도깨비와 정당한 세입자라고 주장하는
  저승사자의 밀당 라이프가 펼쳐진다!
  
  2016년 마지막을 장식할 tvN 10주년 특별기획 <도깨비> 90분 특별 편성!
  12월 2일 [금] tvN 첫 방송`,
    date: "2016-12-02",
  },
  {
    idx: "2",
    title: "2화 미리보기",
    story: `▶ 캐나다에서 꿈같은 하루를 보내는
  도깨비(공유)와 은탁(김고은).
  자신을 향한 은탁의 맑은 미소에 순간 신의
  마음이 일렁이는데...!
  
  ▶ 도깨비 신과 저승사자(이동욱)의 천둥번개
  몰아치는 동거 라이프!
  
  2016년 마지막을 장식할 tvN 10주년 특별기획
  <도깨비> 매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-03",
  },
  {
    idx: "3",
    title: "3화 미리보기",
    story: `▶ 안개 속에서
  걸어 나온 도깨비(공유)와 저승사자(이동욱)는
  위기에 처해있던 은탁(김고은)을 무사히 구해낸다.
  
  
  
  ▶ 무언가에 이끌린 듯 마주친 저승사자와 써니(유인나).
  
  써니와 두 눈이 마주친 순간
  
  눈에서 갑자기 눈물이 쏟아진 저승사자는 당황하고...
  
  
  
  ▶ 지낼 곳을 잃은 은탁은 무작정 신의 집으로 쳐들어가는데...
  
  
  2016년 마지막을 장식할 tvN
  10주년 특별기획 <도깨비>
  매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-09",
  },
  {
    idx: "4",
    title: "4화 미리보기",
    story: `▶ 도깨비 신부라는 사실이 밝혀지고,

  효용가치가 생긴 은탁(김고은)
  
  
  ▶ 갑작스럽게 찾아온 죽음의 기회.
  
  불멸을 끝내고 싶은 마음과 더 살고싶은
  마음 사이.
  김신은 혼란스럽다.
  
  
  ▶ 마침내 신은 결심한다.
  과연 도깨비의
  선택은?
  
  2016년 마지막을 장식할 tvN
  10주년 특별기획 <도깨비>
  매주 금.토 저녁 8시 tvN
  방송`,
    date: "2016-12-10",
  },
  {
    idx: "5",
    title: "5화 미리보기",
    story: `▶ 드디어 신(공유)의 집으로 입성한 은탁(김고은).
  함께 살게 된 신과 저승(이동욱)에게 호소문을 내미는데..
  
  ▶ 한편, 신은 홀로 불멸을 끝낼 마음의 준비를 시작하고...!
  
  2016년 마지막을 장식할 tvN 10주년 특별기획 <도깨비>매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-16",
  },
  {
    idx: "6",
    title: "6화 미리보기",
    story: `▶ 10년 후의 은탁(김고은)의 모습을 보고
  검을 뽑겠다 마음 먹은 도깨비(공유).
  
  ▶ 그런 도깨비의 부탁에 은탁은 눈물을 흘리며
  상상치 못한 대답을 내놓는다.
  
  ▶ 한편, 덕화(육성재)와 써니(유인나)를 만나러 간 저승사자(이동욱).
  써니는 저승사자와 함께 나온 덕화에게 큰 관심을 보이는데...
  
  2016년 마지막을 장식할 tvN 10주년 특별기획 <도깨비>매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-17",
  },
  {
    idx: "7",
    title: "7화 미리보기",
    story: `▶ 살아돌아온 도깨비(공유) 때문에
  한바탕 난리가 난 도깨비 하우스.
  
  ▶ 첫사랑과 재회한 은탁(김고은) 때문에
  도깨비는 심기가 몹시 불편해지는데...
  
  ▶ 그렇게 장난처럼 이어질 것만 같던
  그들의 동거라이프에 끼어든 슬픈 운명!!
  
  2016년 마지막을 장식할 tvN 10주년 특별기획 <도깨비>매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-23",
  },
  {
    idx: "8",
    title: "8화 미리보기",
    story: `▶ 무사히 은탁(김고은)을 받아낸 신(공유).
  안도의 눈물을 흘리는 은탁의 모습에
  검의 통증과는 비교할 수도 없이 더 아프고...
  
  ▶ 족자 속 여인에게 사무치는 그리움을 느끼는 저승사자(이동욱),
  그런 저승사자를 기함하게 한 덕화(육성재)의 충격적인 발언
  
  ▶ 은탁에게 닥친 죽음의 위기! 과연 무사할 수 있을까?
  
  2016년 마지막을 장식할 tvN 10주년 특별기획 <도깨비>매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-24",
  },
  {
    idx: "9",
    title: "9화 미리보기",
    story: `▶ 드디어 도깨비 검의 비밀과
  자신의 효용가치의 의미를 알게 된 은탁(김고은).
  
  ▶ 그리고 자신이 죽지 않으면 은탁이 죽게 되는
  충격적 진실을 알게 된 도깨비(공유).
  
  ▶ 비극적 운명 앞에서 은탁은 도깨비를 밀어내기로 결심하는데....
  
  2016년 마지막을 장식할 tvN 10주년 특별기획 <도깨비>매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-30",
  },
  {
    idx: "10",
    title: "10화 미리보기",
    story: `▶ 써니(유인나)의 전생을 알게 된 저승사자(이동욱).
  도깨비(공유)도 처음 듣는 써니의 '김선'이라는
  본명 때문에 괜히 마음이 소란한데...
  
  ▶ 저승사자는 도깨비의 과거사를 묻고...
  은탁(김고은)도 도깨비의 슬픈 과거를 다 듣고 말아버린다.
  
  ▶ 저승사자는 다시 한 번
  써니의 손을 더 잡아보기로 결심하는데...
  
  2016년 마지막을 장식할 tvN 10주년 특별기획 <도깨비>매주 금.토 저녁 8시 tvN 방송`,
    date: "2016-12-31",
  },
  {
    idx: "11",
    title: "11화 미리보기",
    story: `▶ 드디어 써니(유인나)가 전생에 자신의 여동생임을
  알게 된 도깨비(공유)는 다짜고짜 써니를 찾아가고,
  써니는 그런 도깨비가 이상하기만 하다.
  
  ▶ 또 다시 날아온 은탁(김고은)의 명부에 도깨비는
  은탁에게 검을 뽑지 않으면 죽게되는
  신부의 운명에 대해 털어놓기로 결심 하는데...!`,
    date: "2017-01-06",
  },
  {
    idx: "12",
    title: "12화 미리보기",
    story: `▶ 드디어 모습을 드러낸 간신 박중헌(김병철)!
  중헌은 은탁(김고은)과 써니(유인나)의 주위를 위험하게 맴도는데...!
  
  
  ▶ 중헌은 도깨비(공유)와 저승사자(이동욱)를
  파국으로 몰기 위해 계획을 실행해나간다.
  
  ▶ 드디어 덕화(육성재)의 존재에 대해 의문을 느끼기 시작한
  도깨비와 저승사자. 과연 덕화의 정체는?`,
    date: "2017-01-07",
  },
  {
    idx: "13",
    title: "13화 미리보기",
    story: `▶ 드디어 만난 김신(공유)과 왕여(이동욱)!
  저승사자는 기억나지 않는
  자신의 과거와 마주치고 괴로워하는데...
  
  ▶ 중헌(김병철)은 써니(유인나)와 은탁(김고은)에게
  검은 손을 뻗기 시작한다!
  
  ▶ 이 모든 일의 종지부를 찍기 위한 준비를 시작하는 도깨비!
  지독한 운명 속에 위태롭게 내몰린 이들의 운명은?`,
    date: "2017-01-13",
  },
  {
    idx: "14",
    title: "14화 미리보기",
    story: `▶ 검을 뽑고 스스로 소멸을 선택한
  도깨비의 흔적은 모두의
  기억에서 사라진다.
  
  그 후로 9년이 흐르는데...
  
  ▶ 도깨비와 신부(김고은),
  그들의 비극적인 운명은 과연 이대로 끝난
  것일까?`,
    date: "2017-01-20",
  },
  {
    idx: "15",
    title: "15화 미리보기",
    story: `▶ 캐나다에서 다시 만난 신(공유)과 은탁(김고은).
  자꾸만 맞닥뜨리는 이상한 장면들.
  캐나다 곳곳의 추억은 은탁의 잊혀진 기억의 문을 두드린다!
  
  ▶ 저승사자(이동욱)와 써니(유인나)는 9년만에 처음으로 대면하는데...
  
  ▶ <도깨비> 1/21 (토) 저녁 8시 최종화 방송
  15-16화 연속 방송`,
    date: "2017-01-21",
  },
];
