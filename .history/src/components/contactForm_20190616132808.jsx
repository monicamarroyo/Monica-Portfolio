import PropTypes from "prop-types"
import React from "react"
import { Col, Container, Row } from "reactstrap"
import "./scss/contactForm.scss"
const ContactForm = ({}) => (
  <Container className="pb-5 text-center">
    <Row className="justify-content-center">
      <Col lg="6" sm="12">
        <div className="contact-item" />
        Linkedin
      </Col>
      <Col lg="6" sm="12">
        <div className="contact-item" />
        Github
      </Col>
      <Col lg="6" sm="12">
        <div className="contact-item" />
        email
      </Col>
    </Row>
  </Container>
)
export default ContactForm
/*

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
