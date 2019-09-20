import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Fade from "react-reveal/Fade"
import ContactForm from "../components/contactForm.jsx"
import "../components/scss/contact.scss"

const Contact = ({ data }) => (
  <Row className="Contact_Section mx-auto px-auto">
    <BackgroundImage
      Tag="section"
      fluid={data.bgCatus.childImageSharp.fluid}
      className="bgCatus"
    >
      <Col
        md="auto"
        sm="12"
        className="Contact_Section--left mx-auto my-auto px-auto py-auto"
      >
        <div className="Contact_Info">
          <Fade top>
            <h1 className="Contact_Info--header mx-auto my-auto px-auto py-auto">
              Contact
            </h1>
            <div className="Contact_Info--underline" />
          </Fade>
        </div>
        <Fade left>
          <div className="Contact_Info--text d-none d-xl-block d-lg-block d-md-block">
            Austin TX 78744
            <br />
            (512) 825-2633
            <br />
            Monica.arroyo1319@gmail.com
          </div>
        </Fade>
      </Col>
    </BackgroundImage>
    <Col
      md="auto"
      className="Contact_Section--right mx-auto my-auto px-auto py-auto"
    >
      <div className="Contact-Form">
        <Fade right>
         <ContactForm/>
        </Fade>
      </div>
      <div className="Contact_Form--backtext">Contact</div>
    </Col>
  </Row>
)
const ContactSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery3 {
        bgCatus: file(relativePath: { eq: "greenpalm.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Contact data={data} {...props} />}
  />
)

export default ContactSection
