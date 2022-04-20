import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react-bootstrap";

// 스타일드 컴포넌트
let TitleBox = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
`;

let Alert = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #ffecb3;
  padding: 20px 0px;
`;

let AlertText = styled.p`
  font-size: 16px;
  margin: 0px;
`;

// 컴포넌트가 mount or update되었을때 특정코드가 실행된다.
function Detail({ shoes, stock, setStock }) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");

  const handleInputValue = (e) => {
    setInputData(e.target.value);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    console.log("안녕");
    return () => {
      clearTimeout(timer);
    };
    // 해달 컴포넌트가 사라질때 실행 return
  }, []);
  // [] 내에 useEffect 실행조건 작성, [] 빈칸 페이지가 한번 로드될때 만 1번실행

  // 사용자가 입력한 URL의 파라미터들을 저장
  let { id } = useParams();
  let findShoes = shoes.find(function (product) {
    return product.id == id;
  });

  // 방문기록을 담아놓는 오브젝트
  // import useHistory, useHistory() Hook 사용
  let history = useHistory();
  return (
    <div className="container">
      <TitleBox>
        <Title>Detail</Title>
      </TitleBox>
      {inputData}
      <input onChange={handleInputValue} />
      {alert ? (
        <Alert>
          <AlertText>재고가 얼마 남지 않았습니다.</AlertText>
        </Alert>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findShoes.id + 1
            }.jpg`}
            width="100%"
            alt="신발사진"
          ></img>
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findShoes.title}</h4>
          <p>{findShoes.content}</p>
          <p>{findShoes.price}원</p>

          <Button style={{ margin: "10px" }}>주문하기</Button>
          <Button
            색상={"red"}
            onClick={() => {
              // 뒤로가기 기능, 이전에 방문했던 사이트로 돌아간다.
              history.goBack();
              // 여러 기능 가능, 해당 경로로 이동해주세요 => history.push('/');
            }}
          >
            뒤로가기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
