import PropTypes from "prop-types"
import React from "react"
import { Col, Container, Row } from "reactstrap"
import "./scss/contactForm.scss"
const ContactForm = ({}) => { 
  const margin = 5 ? '' : `mt-${size > 4 ? 4 : 5}`;
  return(
    <Container className={`pb-5 text-center `}>
    <Row className="justify-content-center">
      <Col lg="3" md="3" xs="12">
        <div className="contact-item" />
        Linkedin
      </Col>
      <Col lg="3" md="3" xs="12">
        <div className="contact-item" />
        Github
      </Col>
      <Col lg="3" md="3" xs="12">
        <div className="contact-item" />
        email
      </Col>
    </Row>
  </Container>
)
}
export default ContactForm
/*
className="pb-5 text-center"
  <div className="col-md">
        <div className="contact-item"></div>
         Linkedin
      </div>
      <div className="col-md">
      <div className="contact-item"></div>
        Github
      </div>
      <div className="col-md">
      <div className="contact-item"></div>
        email
      </div>
<div className="col-md-offset-1 col-md-10">
      <div className="info text-center mb-50">
        <div className="col-md-4">
         <div className="item">
            <span className="icon">
            </span>
            Linkedin
         </div>
        </div>
        <div className="col-md-4">
         <div className="item">
            <span className="icon">
            </span>
            Github
         </div>
        </div>
        <div className="col-md-4">
         <div className="item">
            <span className="icon">
            </span>
            Linkedin
         </div>
        </div>
        <div />
      </div>
    </div>
*/
