import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from "reactstrap";
import logo from "../../assets/images/logos/logo.png";
import ConnectButton from "../../components/web3/ConnectButton"



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="topbar" id="top">
      <div className="header6 fixed-top bg-black">
        <Container className="po-relative ">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <Image src={logo} alt="Logo" width="169" height="45"/>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            >
              <Nav navbar className="ml-auto">
                <NavItem>
                  <Link href="#about">
                  <a className="nav-link">About</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#whitepapers">
                    <a className="nav-link">Whitepapers</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#webdev">
                    <a className="nav-link">Web Development</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#tech">
                  <a className={"nav-link"}>Technical Writing</a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#contacts">
                  <a className={"nav-link"}>Contacts</a>
                  </Link>
                </NavItem>
              </Nav>
              <ConnectButton onAddressChanged={address => {}}/>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
