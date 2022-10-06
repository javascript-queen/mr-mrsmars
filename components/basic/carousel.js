import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
} from "reactstrap";
import Image from "next/image";
import img1 from "../../assets/images/ui/hive-dark.png";
import img2 from "../../assets/images/ui/glad-dark.png";
import img3 from "../../assets/images/ui/twit-dark.png";
import img4 from "../../assets/images/ui/bws.png";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Hive Investments",
    url: "https://medium.com/@hiveinvestments",
    },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Gladiator DeFi",
    url: "https://medium.com/@GladiatorDeFi",
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "DeFi Discovered",
    url: "https://twitter.com/DeFiDiscovered"
  },
  {
    src: img4,
    altText: "Slide 4",
    caption: "BWS Labs",
    url: "https://medium.com/@bws_labs"
  },
];

const Articles = (props) => {
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

  const slides = items.map((item, i) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={i}
    >
      <a href={item.url} target="_blank" rel="noreferrer"><Image src={item.src} alt={item.altText} /></a>
      {/* <CarouselCaption
        captionText={item.caption}
      /> */}
    </CarouselItem>
  ));

  return (
    <div>
      <div className="spacer" id="js-component">
        <Container id="tech">
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">TECHNICAL WRITING</h1>
              <h6 className="subtitle">
              Check out these articles by Mr. Mars.
              </h6>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators className="carousel-indicators"
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Articles;
