export default [
  {
    id: 0,
    title: "Hansome",
    content: "누구보다 멋지고 싶은 날 꾸며주는 신발",
    price: 100000,
  },

  {
    id: 1,
    title: "cute",
    content: "가볍고 운동하기 좋은 신발",
    price: 80000,
  },

  {
    id: 2,
    title: "nice",
    content: "발목까지 감싸주는 신발",
    price: 110000,
  },
];
// export { shoes };

// let shoes = [
//   {
//     id: 0,
//     title: "White and Black",
//     content: "Born in France",
//     price: 120000,
//   },

//   {
//     id: 1,
//     title: "Red Knit",
//     content: "Born in Seoul",
//     price: 110000,
//   },

//   {
//     id: 2,
//     title: "Grey Yordan",
//     content: "Born in the States",
//     price: 130000,
//   },
// ];

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

// import "./App.css";
// import { useState } from "react";
// import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
// import Data from "./data.js";
// import Detail from "./Detail";

// import { Link, Route, Switch } from "react-router-dom";
// // import {Link, Route, Routes} from "react-router-dom";
// function App() {
//   let [shoesData, setShoesData] = useState(Data);

//   return (
//     <>
//       <div className="App">
//         <Navbar bg="light" expand="lg">
//           <Container>
//             <Navbar.Brand href="#home">Shoes shop</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link>
//                   {/* route 한 경로와 Link 로 이어줌 */}
//                   <Link to="/">Home</Link>
//                 </Nav.Link>
//                 <Nav.Link>
//                   <Link to="/detail">Detail </Link>
//                 </Nav.Link>
//                 <NavDropdown title="상품상세페이지" id="basic-nav-dropdown">
//                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.2">
//                     Another action
//                   </NavDropdown.Item>
//                   <NavDropdown.Item href="#action/3.3">
//                     Something
//                   </NavDropdown.Item>
//                   <NavDropdown.Divider />
//                   <NavDropdown.Item href="#action/3.4">
//                     Separated link
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         {/* path ="해당경로" 해당경로로 접속하면? Route 내의 페이지, 컴포넌트 등을 보여준다.
//         겹치는 경로는 다보여주기 떄문에 기보에는 exact 줘야 된다. => v6 에는 셀프로 모두 exact 가 되어있어서 안해도된다.*/}
//         {/* <Route exact path="/"> Switch 쓰면 신경 쓸 필요 없다. */}
//         {/* Switch 경로가 겹쳐도, 각 경로만 보여주세요. 겹칠 시 가장 위에 경로먼 매칭하여 보여준다.  */}
//         <Switch>
//           <Route path="/">
//             <div className="jumbotron">
//               <div className="font-background">
//                 <h1> 50% Season SALE !</h1>
//                 <p>
//                   운동화, 구두, 부츠, 워커 모두 최대 ~50% 세일 판매합니다!
//                   <br />
//                   인기 상품은 빠른 시일 내에 품절될 수 있는 점 안내드립니다.
//                 </p>
//                 <p>SALE 기간 : 4월 1일 ~ 4월 15일 (2주 간)</p>
//               </div>
//               <div>
//                 <Button variant="primary">Learn more</Button>
//               </div>
//             </div>

//             <div className="product-container">
//               <div className="row">
//                 {shoesData.map((shoes, i) => {
//                   return (
//                     <ShoesProducts
//                       shoesData={shoesData[i]}
//                       i={i}
//                     ></ShoesProducts>
//                   );
//                 })}
//               </div>
//             </div>
//           </Route>
//           <Route path="/detail">
//             <Detail shoes={shoesData} />
//           </Route>
//         </Switch>
//       </div>
//     </>
//   );
// }
// export default App;

// function ShoesProducts({ shoesData, i }) {
//   return (
//     <>
//       <div className="col-md-4">
//         <img
//           src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
//         ></img>
//         <h3>{shoesData.title}</h3>
//         <p>{shoesData.content}</p>
//         <p>{shoesData.price}</p>
//       </div>
//     </>
//   );
// }
