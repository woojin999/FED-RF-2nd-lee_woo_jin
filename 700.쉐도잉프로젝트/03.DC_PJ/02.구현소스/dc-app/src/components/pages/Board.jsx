// 보드페이지 컴포넌트 //
import { Fragment, useContext, useEffect, useRef, useState } from "react";

// 제이쿼리
import $ from "jquery";
import "../../css/board.scss";
import "../../css/board_file.scss";

// 로컬스토리지 게시판 기본데이터 제이슨 -> 로컬쓰로 대체
// import baseData from "../data/board.json";
// 리액트 웹팩에서 제이슨은 이름을 지어서 불러오면 된다
// 제이슨 파일 처리는 다르므로 확장자는 반드시 써야한다

// 로컬스토리지 확인 JS

import { initBoardData } from "../func/board_fn";
import { dCon } from "../modules/dCon";

export default function Board() {
  // 컨텍스트 사용하기
  const myCon = useContext(dCon);
  // 전역 로그인 상태 변수 확인하기(변수할당)
  const sts = myCon.loginSts;
  // console.log(sts);
  // 로컬스토리지 게시판 데이터 정보확인
  initBoardData();

  // 로컬스 데이터 변수할당하기
  const baseData = JSON.parse(localStorage.getItem("board-data"));

  // [ 상태관리 변수 ]
  // [1] 페이지 번호
  const [pageNum, setPageNum] = useState(1);
  // [2] 기능모드
  const [mode, setMode] = useState("L");

  // 참조변수 //
  // [1] 전체 개수 - 매번 계산하지 않도록 참조변수로
  const totalCount = useRef(baseData.length);
  // console.log("전체 개수", totalCount);
  // [2] 선택 데이터 저장
  const selRecord = useRef(null);
  // -> 특정 리스트 글 제목 클릭시 데이터 저장함

  // 페이지당 개수
  const unitSize = 8;

  /************************** 
   함수명: bindList
   기능 : 페이지별 리스트를 생성하여 바인딩함
   **************************/

  const bindList = () => {
    // console.log(baseData);

    // 1. 전체 원본 데이터 선택
    let orgData = baseData;

    // 2. 정렬 적용하기 : 내림차순
    orgData.sort((a, b) =>
      Number(a.idx) > Number(b.idx) ? -1 : Number(a.idx) < Number(b.idx) ? 1 : 0
    );

    // 3. 일부 데이터만 선택
    // 예시로 0번부터 9번까지만 선택
    // 한페이지당 10개라면
    // 페이지 번호와 연관 시켜본다
    // 1,2,3,4 .....
    // 시작번호 = (페이지번호-1) * 단위 수
    let sNum = (pageNum - 1) * unitSize;
    // 끝번호 = (페이지번호-1) * 단위 수
    let eNum = pageNum * unitSize;
    // console.log("첫번호:", sNum, "/끝번호:", eNum);
    // 결과배열
    const selData = [];

    // for문으로 배열 만들기
    for (let i = sNum; i < eNum; i++) {
      // 끝번호가 전체 갯수보다 크면 나가
      if (i >= totalCount.current) break;
      // 대상 배열값 추가
      selData.push(orgData[i]);
    } /// for ///
    // console.log(selData);

    return selData.map((v, i) => (
      <tr key={i}>
        {/* 시작번호를 더하여 페이지별 순번을 변경 */}
        <td>{i + sNum + 1}</td>
        <td>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // 읽기 모드로 변경
              setMode("R");
              // 해당 데이터 저장하기
              selRecord.current = v;
            }}
          >
            {v.tit}
          </a>
        </td>
        <td>{v.unm}</td>
        <td>{v.date}</td>
        <td>{v.cnt}</td>
      </tr>
    ));
  }; //// bindList 함수 /////////

  /************************************ 
    함수명 : pagingList
    기능 : 게시판 리스트의 페이징 기능 목록
   ************************************/
  const pagingList = () => {
    // 전체 페이징 갯수 : 전체레코드수 / 페이지당 개수
    // 유의점: 나머지가 있는지 검사해서 있으면 +1

    // 1. 페이징 개수
    let pagingCount = Math.floor(totalCount.current / unitSize);

    // 나머지가 있으면 다음 페이지가 필요함
    if (totalCount.current % unitSize > 0) {
      pagingCount++;
    }

    // console.log("페이징 개수:", pagingCount, totalCount.current % unitSize);

    let pgCode = [];

    // 1부터 페이지 끝번호까지 돌면서 코드 만들기
    for (let i = 1; i <= pagingCount; i++) {
      pgCode.push(
        <Fragment key={i}>
          {/* 페이징 번호와 현재 페이지 번호 일치시 b요소 */}
          {i == pageNum ? (
            <b>{i}</b>
          ) : (
            // 불일치시에 모두 링크코드
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPageNum(i);
              }}
            >
              {i}
            </a>
          )}
          {/* 사이에 바넣기 */}
          {i !== pagingCount && " | "}
        </Fragment>
      );
    } /// for
    // 코드 리턴
    return pgCode;
  }; /////// pagingList 함수 ////////////

  // 버튼 클릭시 변경함수 ////
  const clickButton = (e) => {
    // 버튼 글자 읽기
    let btnText = e.target.innerText;
    // console.log(btnText);
    switch (btnText) {
      case "Write":
        setMode("W");
        break;
      case "List":
        setMode("L");
        break;
      // 글쓰기 모드일 경우 서브밋
      case "Submit":
        // console.log("서브밋", mode);
        submitFn();
        break;
      // 수정일 경우  수정보드로 변경
      case "Modify":
        setMode("M");
        break;
      // 삭제일경우 삭제함수 호출
      case "Delete":
        deleteFn();
        break;
    }
  }; /////clickButton
  // 삭제 처리함수
  const deleteFn = () => {
    // 삭제여부 확인
    if (window.confirm("Are you sure you want to delete?")) {
      // 1. 해당항목 idx담기

      let currIdx = selRecord.current.idx;
      // 2. some() 로 순회하여 해당항목 삭제하기
      // find()와 달리 some()은 결과값을 boolean
      // 리턴하여 처리한다 이것을 이용하여 코드처리
      baseData.some((v, i) => {
        if (v.idx == currIdx) {
          // 해당순번 배열값을 삭제
          // 배열삭제는 splice(순번,1)
          baseData.splice(i, 1);

          // 리턴true할 경우 종료
          return true;
        } //if//
      }); /// some ///
      // 3. 로컬스에 업데이트하기 //////
      localStorage.setItem("board-data", JSON.stringify(baseData));

      // 4. 삭제후 리스트 리랜더링시 리스트 불일치로 인한 에러를 방지하기 위하여
      // 전체 개수를 바로 업데이트한다
      totalCount.current = baseData.length;

      // 5. 리스트로 돌아가기 /////
      // -> 모드변경! "L"
      setMode("L");
    } //if
    // 1. 해당항목 idx담기
  };

  // 서브밋 처리함수 /////
  const submitFn = () => {
    // 제목 입력항목
    let title = $(".subject").val().trim();
    // 내용 입력항목
    let cont = $(".content").val().trim();
    // 1. 공통 유효성 검사
    // 제목, 내용 모두 비었으면 리턴
    if (title == "" || cont == "") {
      alert("Insert title and content");
      return; // 서브밋없이 함수 나가기
    }

    // 2. 글쓰기 서브밋 (mode=="W")
    if (mode == "W") {
      let today = new Date();
      // yy-mm-dd 형식으로 구하기
      // 제이슨 날짜형식 : toJSON()
      // ISO 표준형식 : toISOString()
      // 시간까지 나오므로 앞에 10자리만 가져감
      // 문자열.substr(0,10)

      // 글번호 만들기
      // 전체 데이터중 idx만 모아서 배열만들기
      let arrIdx = baseData.map((v) => parseInt(v.idx));
      console.log(arrIdx);
      // 최대값 찾기 : 스프레드 연산자로 배열 값만 넣음
      let maxNum = Math.max(...arrIdx);
      console.log(maxNum);

      // 입력 데이터 객체형식으로 구성하기
      let data = {
        idx: maxNum + 1,
        tit: title,
        cont: cont,
        att: "",
        date: today.toJSON().substr(0, 10),
        uid: JSON.parse(sts).uid,
        unm: JSON.parse(sts).unm,
        cnt: "0",
      };
      console.log("글쓰기 서브밋:", data);
      //로컬스에 입력하기
      // 1. 로컬스 파싱
      let locals = localStorage.getItem("board-data");
      locals = JSON.parse(locals);
      // 2. 파싱배열에 push
      locals.push(data);
      // 3. 새배열을 문자화하여 로컬스에 넣기
      localStorage.setItem("board-data", JSON.stringify(locals));

      // 4. 추가후 리스트 리랜더링시 리스트 불일치로 인한
      // 에러를 방지하기 위하여 전체 개수를 바로 업데이트한다!
      totalCount.current = baseData.length;

      // 리스트로 돌아가기 -> 모드 변경 "L"
      setMode("L");
    }

    // 3. 수정모드 서브밋 (mode == "M")
    else if (mode == "M") {
      // 수정시 수정날짜 항목을 새로만들고 입력함
      let today = new Date();
      // yy-mm-dd 형식으로 구하기
      // 제이슨 날짜형식 : toJSON()
      // ISO 표준형식 : toISOString()
      // 시간까지 나오므로 앞에 10자리만 가져감
      // 문자열.substr(0,10)

      // 2. 현재 데이터 idx값
      let currIdx = selRecord.current.idx;

      // 3. 기존데이터로 찾아서 변경 : 로컬스 데이터 -> baseData
      // find()는 특정항목을 찾아서 리턴하여 데이터를 가져오기도 하지만
      // 업데이트 등 작업도 가능
      baseData.find((v) => {
        console.log(v);
        if (v.idx == currIdx) {
          // 업데이트 작업하기
          // 기존항목변경 : tit,cont
          // 이미 선택된 selRecord 참조변수의 글번호인 idx로
          // 원본 데이터를 조회하여 기존데이터를 업데이트한다
          // 변경항목
          // (1) 글제목 : tit
          // (2) 글내용 : cont
          // 추가항목(원래는 확정된 db스키마에 따라 입력해야하지만 우리가 사용하는 로컬스토리지의 확장성에 따라 필요한 항목을 추가하여 넣는다)
          // (3) 수정일 : mdate
          v.tit = title;
          v.cont = cont;
          // 새항목 추가 : mdate
          v.mdate = today.toJSON().substr(0, 10);
          // 해당항목을 만나면 끝
          return true;
        }
      }); /// find 메서드

      // 3. 로컬스에 업데이트하기
      localStorage.setItem("board-data", JSON.stringify(baseData));

      // 4. 추가후 리스트 리랜더링시 리스트 불일치로 인한
      // 에러를 방지하기 위하여 전체 개수를 바로 업데이트한다!
      totalCount.current = baseData.length;

      // 5 리스트로 돌아가기 -> 모드 변경 "L"
      setMode("L");
    }
  }; ////////////// submitFn //////

  // 코드 리턴구역 //
  return (
    <main className="cont">
      <h1 className="tit">OPINION</h1>
      {
        // 1. 리스트 모드일 경우 리스트 출력하기
        mode == "L" && <ListMode bindList={bindList} pagingList={pagingList} />
      }
      {
        // 2. 읽기 모드일 경우 상세보기 출력하기
        mode == "R" && <ReadMode selRecord={selRecord} />
      }
      {
        // 3. 쓰기 모드일 경우 로그인정보 보내기
        // sts 값은 문자열이므로 파싱하여 객체로 보냄
        mode == "W" && <WriteMode sts={JSON.parse(sts)} />
      }
      {
        // 4. 수정 모드일 경우 상세보기 출력하기
        // sts 값은 문자열이므로 파싱하여 객체로 보냄
        mode == "M" && <ModifyMode selRecord={selRecord} />
      }
      <br />
      {/* 모드별 버튼출력 박스 */}
      <table className="dtbl btngrp">
        <tbody>
          <tr>
            <td>
              {
                // 1. 글쓰기 버튼은 로그인한상태이고  L이면 출력
                mode == "L" && sts && (
                  <button onClick={clickButton}>Write</button>
                )
              }
              {
                // 2. 글보기 "R" 상태일 경우
                <>
                  {mode == "R" && <button onClick={clickButton}>List</button>}

                  {
                    // 로그인한 상태이고 글쓴이와 일치할떄 수정보드 이동버튼이 노출됨
                    // 현재글은 selRecord 참조변수에 저장됨
                    // 글정보 항목중 uid가 사용자 아이디임
                    // 로그인 상태정보하위의 sts.uid

                    mode == "R" &&
                      sts &&
                      JSON.parse(sts).uid == selRecord.current.uid && (
                        <button onClick={clickButton}>Modify</button>
                      )
                  }
                </>
              }
              {
                // 3. 글쓰기 "W" 상태일 경우
                mode == "W" && (
                  <>
                    <button onClick={clickButton}>List</button>
                    <button onClick={clickButton}>Submit</button>
                  </>
                )
              }
              {
                // 4. 수정상태 "M" 상태일 경우
                mode == "M" && (
                  <>
                    <button onClick={clickButton}>List</button>
                    <button onClick={clickButton}>Submit</button>
                    <button onClick={clickButton}>Delete</button>
                  </>
                )
              }
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
} /////////////////// Board //////////////////

/******************************* 
  리스트 모드 서브 컴포넌트
*******************************/
const ListMode = ({ bindList, pagingList }) => {
  return (
    <>
      <div className="selbx">
        <select name="cta" id="cta" className="cta">
          <option value="tit">Title</option>
          <option value="cont">Contents</option>
          <option value="unm">Writer</option>
        </select>
        <select name="sel" id="sel" className="sel">
          <option value="0">Descending</option>
          <option value="1">Ascending</option>
        </select>
        <input id="stxt" type="text" maxLength="50" />
        <button className="sbtn">Search</button>
      </div>
      <table className="dtbl" id="board">
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Writer</th>
            <th>Date</th>
            <th>Hits</th>
          </tr>
        </thead>
        <tbody>{bindList()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="paging">
              {pagingList()}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}; // Listmode

/******************************* 
  읽기 모드 서브 컴포넌트
*******************************/

const ReadMode = ({ selRecord }) => {
  // 읽기 모드가 호출되었다는 것은
  // 리스트의 제목이 클릭되었다는 것을 의미
  // 따라서 현재 레코드 값도 저장되었다는 의미
  // console.log("전달된 참조변수:", selRecord.current);
  // 전달된 데이터 객체를 변수에 할당
  const data = selRecord.current;

  return (
    <>
      <table className="dtblview readone">
        <caption>OPINION : Read</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                value={data.unm}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input
                type="text"
                className="subject"
                size="60"
                value={data.tit}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea
                className="content"
                cols="60"
                rows="10"
                value={data.cont}
                readOnly
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Attachment</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}; ///////// ReadMode////////

// Write////////////////////////////////
const WriteMode = ({ sts }) => {
  // sts - 로그인 상태정보
  return (
    <>
      <table className="dtblview readone">
        <caption>OPINION : Write</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                // 로그인한사람 이름
                value={sts.unm}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="text"
                className="email"
                size="40"
                // 로그인한사람 이메일
                value={sts.eml}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input type="text" className="subject" size="60" />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea className="content" cols="60" rows="10"></textarea>
            </td>
          </tr>
          <tr>
            <td>Attachment</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}; ///////// WriteMode////////

/******************************* 
  수정 모드 서브 컴포넌트
*******************************/

const ModifyMode = ({ selRecord }) => {
  // 읽기 모드가 호출되었다는 것은
  // 리스트의 제목이 클릭되었다는 것을 의미
  // 따라서 현재 레코드 값도 저장되었다는 의미
  // console.log("전달된 참조변수:", selRecord.current);
  // 전달된 데이터 객체를 변수에 할당
  const data = selRecord.current;

  return (
    <>
      <table className="dtblview readone">
        <caption>OPINION : Modify</caption>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                className="name"
                size="20"
                value={data.unm}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>Title</td>
            <td>
              <input
                type="text"
                className="subject"
                size="60"
                defaultValue={data.tit}
              />
            </td>
          </tr>
          <tr>
            <td>Content</td>
            <td>
              <textarea
                className="content"
                cols="60"
                rows="10"
                defaultValue={data.cont}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Attachment</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}; ///////// ModifyMode////////
