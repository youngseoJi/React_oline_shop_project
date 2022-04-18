import React from "react";
import { useHistory } from "react-router-dom";
function Detail({ shoes }) {
  let history = useHistory();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoes[0].title}</h4>
          <p>{shoes[0].content}</p>
          <p>{shoes[0].price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              // 뒤로가기 기능, 이전에 방문했던 사이트로 돌아간다.
              history.goBack();
              // 여러 기능 가능, 해당 경로로 이동해주세요 => history.push('/');
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

// import React from "react";
// import { useHistory } from "react-router-dom";
// function Detail({ shoes }) {
//   // 방문기록을 담아놓는 오브젝트
//   // import useHistory, useHistory() Hook 사용
//   let history = useHistory();

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6">
//           <img
//             src="https://codingapple1.github.io/shop/shoes1.jpg"
//             width="100%"
//           />
//         </div>
//         <div className="col-md-6 mt-4">
//           <h4 className="pt-5">{shoes}</h4>
//           <p>상품설명</p>
//           <p>120000원</p>
//           <button className="btn btn-danger">주문하기</button>
//           <button
//             className="btn btn-danger"
//             onClick={() => {
//               // 뒤로가기 기능, 이전에 방문했던 사이트로 돌아간다.
//               history.goBack();
//               // 여러 기능 가능, 해당 경로로 이동해주세요 => history.push('/');
//             }}
//           >
//             뒤로가기
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detail;
