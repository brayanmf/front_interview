import React, { useState } from "react";
import { Navbar, Container } from "react-bootstrap";

import ModalLogin from "./components/modalLogin/ModalLogin";
import NavHeader from "./components/navHeader/NavHeader";
import ShakeUser from "./components/shakeUser/ShakeUser";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavHeader />
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <ShakeUser setShow={setShow} />
          <ModalLogin handleClose={handleClose} show={show} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
