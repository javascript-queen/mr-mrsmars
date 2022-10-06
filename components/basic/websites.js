import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/videos/ag.gif";
import img2 from "../../assets/images/videos/bb.gif";
import img3 from "../../assets/images/videos/e.gif";
import img4 from "../../assets/images/videos/ff.gif";
import img5 from "../../assets/images/videos/sw3.gif";
import img6 from "../../assets/images/videos/mmm.gif";

const Websites = () => {
  return (
    <div>
      <div className="spacer">
        <Container id="webdev">
          <Row className="justify-content-center">
            <Col className="text-center">
              <h1 className="title font-bold">SOME OF OUR PROJECTS</h1>
              <h6 className="subtitle">
                Here you can check the websites we created...
              </h6>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg="4" className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30" href="https://www.buffbees.io" target="_blank" rel="noreferrer">BUFF BEES</a></h4>
            <h6 className="card-subtitle m-t-15 ">Landing page</h6>
            <Image
              width={350}
              height={230}
              src={img2}
              alt="img"
              className="img-responsive img-rounded"
            />
          </Col>
          <Col lg="4" className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30 " href="https://friendforest.xyz" target="_blank" rel="noreferrer">FRIEND FOREST</a></h4>
            <h6 className="card-subtitle m-t-15 ">Landing page</h6>
            <Image
              width={350}
              height={230}
              src={img4}
              alt="img"
              className="img-responsive img-rounded"
            />
          </Col>
          <Col lg="4"  className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30 " href="https://elementweb3.net/" target="_blank" rel="noreferrer">SyndicateWEB3</a></h4>
            <h6 className="card-subtitle m-t-15 ">Business Website</h6>
            <Image
              width={350}
              height={230}
              src={img5}
              alt="img"
              className="img-responsive img-rounded"
            />
          </Col>
          <Col lg="4"  className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30 " href="https://eleko.vercel.app/" target="_blank" rel="noreferrer">EKELO</a></h4>
            <h6 className="card-subtitle m-t-15 ">Business Website</h6>
            <Image
              width={350}
              height={230}
              src={img3}
              alt="img"
              className="img-responsive img-rounded"
            />
          </Col>
          <Col lg="4"  className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30 " href="/" target="_blank" rel="noreferrer">Mr&MrsMars</a></h4>
            <h6 className="card-subtitle m-t-15 ">Business Website</h6>
            <Image
              width={350}
              height={230}
              src={img6}
              alt="img"
              className="img-responsive img-rounded"
            />
          </Col>
          <Col lg="4"  className="text-center m-b-30">
            <h4 className="card-title"><a className="btn btn-outline-light m-r-20 btn-md m-t-30 " href="annagradient.com" target="_blank" rel="noreferrer">AnnaGradient</a></h4>
            <h6 className="card-subtitle m-t-15 ">Portfolio</h6>
            <Image
              width={350}
              height={230}
              src={img1}
              alt="img"
              className="img-responsive img-rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Websites;
