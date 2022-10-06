import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const PageForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vxfjaw', 'template_zi3486p', form.current, 'Lrc5cVP_DIXLQOscC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };
    return (
        <div>
            <div className="spacer" id="forms-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">GET IN TOUCH</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <form ref={form} onSubmit={sendEmail} className="row">
                            <FormGroup className="col-md-6">
                                <label>Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="Your name..." />
                            </FormGroup>
                            <FormGroup className="col-md-6">
                                <label>Email Address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="Your email..." />
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <label>Your message to us</label>
                                <textarea rows="6" className="form-control" id="exampleFormControlTextarea1" placeholder="Type your text..." name="message" />
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <input type="submit" value="Send" className="btn btn-outline-light m-r-20 btn-md m-t-30 mt-6" />  
                            </FormGroup>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageForm;

{/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}