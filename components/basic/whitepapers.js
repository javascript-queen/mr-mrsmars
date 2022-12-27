import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/ui/logo-hive.png";
import img2 from "../../assets/images/ui/logo-bees.png";
import img3 from "../../assets/images/ui/krypt-logo.png";

const Whitepapers = () => {
  return (
    <div>
      <div className="spacer">
        <Container id="whitepapers">
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1 className="title font-bold">WHITEPAPERS</h1>
              <h6 className="subtitle">
                Here you can check the whitepaper demos we created...
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30" href="https://hive.investments/whitepaper.pdf" target="_blank" rel="noreferrer">HIVE INVESTMENTS</a></h4>
            <h6 className="card-subtitle m-t-15 ">Whitepaper</h6>
            <Image
              src={img1}
              alt="img"
              className="img-responsive"
            />
          </Col>
          <Col lg="4" className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30 " href="https://www.buffbees.io/Whitepaper.pdf" target="_blank" rel="noreferrer">BUFF BEES</a></h4>
            <h6 className="card-subtitle m-t-15 ">Whitepaper</h6>
            <Image
              src={img2}
              alt="img"
              className="img-responsive"
            />
          </Col>
          <Col lg="4"  className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30" href="/models/Keyvian-Whitepaper.pdf" target="_blank" rel="noreferrer">KEYVIAN</a></h4>
            <h6 className="card-subtitle m-t-15 ">Whitepaper</h6>
            <Image
              src={img3}
              alt="img"
              className="img-responsive img-rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Whitepapers;
