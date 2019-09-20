import React from "react"
import { Container, Col, Row } from "reactstrap"
import Heading from '../components/heading';
import "../components/scss/mainSection.scss"

const = () => {
  return (
    <Container>
      <Row className="pb-2">
        <Col className="text-center">
          <div className="header-text_name"> Monica Arroyo</div>
          <div className="header-text_name text-center mx-auto">WEB DEVELOPER</div>
        </Col>
      </Row>
    </Container>
  )
}

export default MainSection