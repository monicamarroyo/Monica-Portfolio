import React, { Component } from "react"
import PropTypes from "prop-types"
import styles from './scss/splitScreen.scss'
import {Container, Col, Row} from 'reactstrap'
class SplitScreen extends Component {
  render() {
    const { topPane, bottomPane } = this.props

    return (
     <Container>
         <h1>Hello, I am Monica Arroyo</h1>
     </Container>
    )
  }
}

SplitScreen.propTypes = {
    topPane: PropTypes.node.isRequired,
    bottomPane: PropTypes.node.isRequired
  };
  
  export default SplitScreen