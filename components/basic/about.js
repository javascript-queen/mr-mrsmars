import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import Image from "next/image";


const About = (props) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const toggle1 = () => {
    setModal1(!modal1);
  };

  const toggle2 = () => {
    setModal2(!modal2);
  };

  return (
      <div className="spacer" id="about">
      <Container>
        <Row>
          <Col className="text-center">
          <h1 className="title font-bold">ABOUT</h1>
          <h6 className="subtitle">
                Hey there! We're a team of professionals in a new evolving cryptospace. Get to know each of us here. <br/><br/>
          </h6>
              <a
              type="button"
              onClick={toggle.bind(null)}
              className="btn btn-outline-light m-1"
            >
              TECHNICAL WRITING
            </a>
            <Modal
              size="lg"
              isOpen={modal}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader className="bg-black" toggle={toggle.bind(null)}>Technical Writing</ModalHeader>
              <ModalBody className="bg-black text-white">
              Meet our technical writer Mr. Mars. Do you need to write a heap of gripping techie articles on Medium, or 
                you company needs a whitepaper? Connect with Mr. Mars on his discord.
              </ModalBody>
              <ModalFooter className="bg-black">
                <a href="https://twitter.com/DeFiDiscovered" target="_blank" rel="noreferrer" className="btn btn-outline-light" onClick={toggle.bind(null)}>
                  Connect
                </a>
                <a className="btn btn-outline-light" onClick={toggle.bind(null)}>
                  Cancel
                </a>
              </ModalFooter>
            </Modal>
            <a
              type="button"
              onClick={toggle1.bind(null)}
              className="btn btn-outline-light m-1"
            >
              Web Design
            </a>
            <Modal
              size="lg"
              isOpen={modal1}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader className="bg-black" toggle={toggle1.bind(null)}>Web Design</ModalHeader>
              <ModalBody className="bg-black text-white">
              Do you need a nice website, a cool landing page, or maybe your website just happened to have some issues?
                Connect with Web3Dev.
              </ModalBody>
              <ModalFooter className="bg-black">
                <a href="mailto:dev@annagradient.com" target="_blank" rel="noreferrer"  className="btn btn-outline-light"  onClick={toggle1.bind(null)}>
                  Connect
                </a>
                <a className="btn btn-outline-light" onClick={toggle1.bind(null)}>
                  Cancel
                </a>
              </ModalFooter>
            </Modal>
            <a
              type="button"
              onClick={toggle2.bind(null)}
              className="btn btn-outline-light m-1"
            >
              Graphic Design
            </a>
            <Modal
              size="lg"
              isOpen={modal2}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader className="bg-black" toggle={toggle2.bind(null)}>Graphic Design</ModalHeader>
              <ModalBody className="bg-black text-white">
                Are you in need to make your new whitepaper eye-catching, add some graphics to your website, or design 
                a unique logo? Text Mrs. Mars ASAP!
              </ModalBody>
              <ModalFooter className="bg-black">
                <a href="https://www.instagram.com/anna_gradient/" target="_blank" rel="noreferrer" className="btn btn-outline-light" onClick={toggle1.bind(null)}>
                  Connect
                </a>
                <a className="btn btn-outline-light" target="_blank" onClick={toggle2.bind(null)}>
                  Cancel
                </a>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
