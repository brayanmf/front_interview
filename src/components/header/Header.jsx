import React, { useState } from "react";
import { Navbar, Button, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ModalLogin from "./modalLogin/ModalLogin";
import { useStateParams } from "../../paramsContext";
import { LogoutAsync } from "../../api/auth";
import { Shake } from "reshake";

const Header = () => {
  const { effect, user, setUser } = useStateParams();
  const [show, setShow] = useState(false);
  const [styleAux, setStyleAux] = useState([true, false, false, false]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = async () => {
    await LogoutAsync();
    setUser({});
  };

  const handleClickStyle = (id) => {
    const updateStyle = styleAux.map((el, index) =>
      index !== id ? false : true
    );
    setStyleAux(updateStyle);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="?filter=todos"
              onClick={() => handleClickStyle(0)}
              style={
                styleAux[0]
                  ? { color: "rgb(28,28,28)" }
                  : { color: "rgb(138,138,138)" }
              }
            >
              Todos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="?filter=autos"
              onClick={() => handleClickStyle(1)}
              style={
                styleAux[1]
                  ? { color: "rgb(28,28,28)" }
                  : { color: "rgb(138,138,138)" }
              }
            >
              Autos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="?filter=salud"
              onClick={() => handleClickStyle(2)}
              style={
                styleAux[2]
                  ? { color: "rgb(28,28,28)" }
                  : { color: "rgb(138,138,138)" }
              }
            >
              Salud
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="?filter=hogar"
              onClick={() => handleClickStyle(3)}
              style={
                styleAux[3]
                  ? { color: "rgb(28,28,28)" }
                  : { color: "rgb(138,138,138)" }
              }
            >
              Hogar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Shake
            h={100}
            v={0}
            r={33}
            dur={900}
            int={8.2}
            max={49}
            fixed={true}
            fixedStop={false}
            freez={false}
            active={effect}
          >
            {user.data?.success ? (
              <div>
                Brayanmf
                <button
                  className="ms-2 btn btn-link "
                  type="button"
                  onClick={handleClick}
                >
                  Salir
                </button>
              </div>
            ) : (
              <Button variant="primary" onClick={handleShow}>
                iniciar sesion
              </Button>
            )}
          </Shake>
          <ModalLogin handleClose={handleClose} show={show} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
