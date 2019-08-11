import PropTypes from "prop-types"
import React from "react"
import { Col, Container, Row } from "reactstrap"

import Heading from "./headings"

const SectionHeader = ({ description, title }) => (ga
  <header className="text-center pb-5">
    <Container>
      <Row className="justify-content-center">
        <Col lg="6">
          <Heading size={1} extraBold>
            <span className="text-primary font-weight-bold">{` ${title}`}</span>
          </Heading>
          <p>{description}</p>
        </Col>
      </Row>
    </Container>
  </header>
)

SectionHeader.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SectionHeader
