import "./App.css";
import { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import Data from "./data.js";
import Detail from "./Detail";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

// import {Link, Route, Routes} from "react-router-dom";
function App() {
  let [shoesData, setShoesData] = useState(Data);
  let [loading, setLoading] = useState(false);
  let [count, setCount] = useState(2);

  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Shoes shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* route 한 경로와 Link 로 이어줌 */}
                {/* <Link to="/">Home</Link> */}
                {/* <Link to="/detail">Detail </Link> */}
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/detail">
                  Detail
                </Nav.Link>
                <NavDropdown title="상품상세페이지" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* path ="해당경로" 해당경로로 접속하면? Route 내의 페이지, 컴포넌트 등을 보여준다.
        겹치는 경로는 다보여주기 떄문에 기보에는 exact 줘야 된다. => v6 에는 셀프로 모두 exact 가 되어있어서 안해도된다.*/}
        {/* <Route exact path="/"> */}
        {/* Switch 경로가 겹쳐도, 각 경로만 보여주세요. 겹칠 시 가장 위에 경로먼 매칭하여 보여준다.  */}
        <Switch>
          <Route exact path="/">
            <div className="jumbotron">
              <div className="font-background">
                <h1> 50% Season SALE !</h1>
                <p>
                  운동화, 구두, 부츠, 워커 모두 최대 ~50% 세일 판매합니다!
                  <br />
                  인기 상품은 빠른 시일 내에 품절될 수 있는 점 안내드립니다.
                </p>
                <p>SALE 기간 : 4월 1일 ~ 4월 15일 (2주 간)</p>
              </div>
              <div>
                <Button variant="primary">Learn more</Button>
              </div>
            </div>

            <div className="product-container">
              <div className="row">
                {shoesData.map((shoes, i) => {
                  return (
                    <ShoesProducts
                      key={i}
                      i={i}
                      shoesData={shoesData[i]}
                    ></ShoesProducts>
                  );
                })}
              </div>
              {loading ? <h1>Loading...</h1> : null}
              <Button
                onClick={() => {
                  setLoading(true);
                  axios
                    .get(
                      `https://codingapple1.github.io/shop/data${count}.json`
                    )
                    // url에 요청한 data를 받아와 출력하기
                    .then((data) => {
                      setLoading(false);
                      setCount(count + 1);
                      console.log(data); // {data: Array(3), status: 200, statusText: '', headers: {…}, config: {…}, …}
                      console.log(data.data); // data 만 뺴오기, [{…}, {…}, {…}]

                      // 기존의 신발들 뒤에, axios로 받아온 데이터담기 [{…}, {…}, {…}]
                      setShoesData([...shoesData, ...data.data]);
                    })
                    .catch(() => {
                      setLoading(false);
                      console.log(count);
                      console.log("실패");
                    });
                }}
              >
                더 보기
              </Button>
            </div>
          </Route>
          {/* url 파라미터 문법 : :id  :뒤에 작명 뒤에 어떤 문자든 적어도 된다. */}
          <Route path="/detail/:id">
            <Detail shoes={shoesData} />
          </Route>
        </Switch>
      </div>
    </>
  );
}
export default App;

function ShoesProducts({ shoesData, i }) {
  return (
    <>
      <div className="col-md-4">
        <img
          src={`https://codingapple1.github.io/shop/shoes${i + 1}.jpg`}
        ></img>
        <h3>{shoesData.title}</h3>
        <p>{shoesData.content}</p>
        <p>{shoesData.price}</p>
      </div>
    </>
  );
}
