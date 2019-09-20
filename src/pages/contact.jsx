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
/*
 <form
            id="email-form"
            method="post"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <label htmlFor="name" className="contact-form-label">
              Name:
            </label>
            <input
              type="text"
              className="input contact-input w-input"
              max="256"
              name="name"
              data-name="name"
              placeholder="Your name"
              id="name"
              required=""
            />
            <label htmlFor="email" className="contact-form-label">
              Email:
            </label>
            <input
              type="email"
              className="input contact-input w-input"
              max="256"
              name="email"
              data-name="email"
              placeholder="Email address"
              id="email"
              required=""
            />
            <label htmlFor="message" className="contact-form-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              max="5000"
              data-name="message"
              required=""
              placeholder="Send me a message."
              className="input contact-input text-field w-input"
            />
            <input
              type="submit"
              value="Send Message"
              //data-wait="Please wait..."
              className="form-button"
            >
              Send Message
            </input>
            <input type="reset" value="Eraser" />
           
          </form>

*/