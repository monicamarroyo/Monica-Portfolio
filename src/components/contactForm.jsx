import PropTypes from "prop-types"
import React from "react"
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap"

import Icon from "./icon"
import SocialLink from "./socialLink"
import "./scss/contactForm.scss"

const ContactForm = ({}) => {
  //const margin = 5 ? "" : `mt-${size > 4 ? 4 : 5}`
  return (
    <Form>
      <Row className="justify-content-center mb-2 mt-2">
        <Col md="6" sm="12" className="text-center mb-2">
          <FormGroup>
            <Input
              className="contact_name"
              type="text"
              name="name"
              placeholder="Name"
              required="required"
              bsSize="lg"
            />
          </FormGroup>
        </Col>
        <Col md="6" sm="12" className="text-center mb-2">
          <FormGroup>
            <Input
              className="contact_email"
              type="email"
              name="email"
              placeholder="Email"
              required="required"
              bsSize="lg"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md="12 text-center">
          <FormGroup>
            <Input
              className="contact_textarea"
              type="textarea"
              name="text"
              id="exampleText"
              bsSize="lg"
              placeholder="Message"
            />
          </FormGroup>
          <FormGroup check row>
            <Col>
              <Button className="contact_btn">Submit</Button>
            </Col>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  )
}
export default ContactForm


/*

 <Container className="text-center pb-5">
      <Row className="justify-content-center">
        <Col lg="12" className="justify-content-center">
          <Form>
            <FormGroup row>
              <Col sm={10}>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={10} />
            </FormGroup>

            <FormGroup row>
              <Col sm={10}>
                <Input type="textarea" name="text" id="exampleText" />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>

*/

/*
<div className={`pb-5 text-center `}>
      <Row className="justify-content-center">
        <Col lg="3" xs="12">
          <div className="contact-item" />
          Linkedin
        </Col>
        <Col lg="3" xs="12">
          <div className="contact-item" />
          Github
        </Col>
        <Col lg="3"xs="12">
          <div className="contact-item" />
          email
        </Col>
      </Row>
    </div>
*/

/*
<div className="col-md">
          <div className="contact-item" />
          Linkedin
        </div>
        <div className="col-md">
          <div className="contact-item" />
          Github
        </div>
        <div className="col-md">
          <div className="contact-item" />
          email
        </div>

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
className="pb-5 text-center"
 
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
