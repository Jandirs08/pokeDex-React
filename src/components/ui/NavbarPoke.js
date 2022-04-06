import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { PokeModal } from "../home/PokeModal";

const PokeNav = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <>
      <Navbar
        // sticky="top"
        bg="dark"
        expand="lg"
        variant="dark"
        className="justify-content-center"
      >
        <Nav.Link as={Link} to="/">
          <img
            src="https://cdn.cdnlogo.com/logos/p/81/pokemon.svg"
            alt=""
            height={70}
            className="logo"
            width={150}
          />
        </Nav.Link>
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/">
                Home
              </Nav.Link> */}
              <Nav.Link as={Link} to="/">
                Pokemons
              </Nav.Link>
              <Nav.Link as={Link} to="/Search">
                Search Pokemons
              </Nav.Link>
            </Nav>

            {/* {
              <i
                className="fa-solid fa-circle-question"
                onClick={openModal}
              ></i>
            }
            <PokeModal modal={modal} closeModal={closeModal} /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PokeNav;
