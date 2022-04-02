import "./App.css";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  ThemeProvider,
} from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Shoes shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
        <ThemeProvider breakpoints={"md"}>
          <div className="row">
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg"></img>
              <h3>상품명</h3>
              <p>상품설명, 가격</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes2.jpg"></img>
              <h3>상품명</h3>
              <p>상품설명, 가격</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes3.jpg"></img>
              <h3>상품명</h3>
              <p>상품설명, 가격</p>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}
export default App;
