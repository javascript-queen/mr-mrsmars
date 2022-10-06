/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const Footer = () => {
  return (
    <div id="contacts" className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">EMAIL US</h5>
            {/* <p>
              <Link href="mailto:m3mars@proton.com">
                <a className="link">m3mars@proton.com</a>
              </Link>
            </p> */}
            <p>
              <Link href="mailto:m3mars@proton.com">
                <a className="link">behindthescenesdefi@gmail.com</a>
              </Link>
            </p>
          </Col>
          {/* <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <Link href="#">
                <a className="link">
                  <i className="fa fa-twitter"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-google-plus"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </Link>
              <Link href="#">
                <a className="link">
                  <i className="fa fa-instagram"></i>
                </a>
              </Link>
            </div>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
