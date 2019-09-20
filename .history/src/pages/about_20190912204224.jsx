import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Section from "../components/section"
import "../components/scss/about.scss"


const Contact = ({ data }) => (
  <Row className="Contact_Section mx-auto px-auto">
    <BackgroundImage
      Tag="section"
      fluid={data.bgFly.childImageSharp.fluid}
      className="bgFly"
    >
      <Col
        md="auto"
        sm="12"
        className="Contact_Section--left mx-auto my-auto px-auto py-auto"
      >
        <div className="Contact_Info">
          <h1 className="Contact_Info--header mx-auto my-auto px-auto py-auto">
            Contact
          </h1>
          <div className="Contact_Info--underline" />
        </div>
        <div className="Contact_Info--text d-none d-xl-block d-lg-block d-md-block">
          Austin TX 78744
          <br />
          (512) 825-2633
          <br />
          Monica.arroyo1319@gmail.com
        </div>
      </Col>
    </BackgroundImage>
    <Col
      md="auto"
      className="Contact_Section--right mx-auto my-auto px-auto py-auto"
    >
      <div className="Contact-Form">
        <form id="email-form" name="email-form" data-name="Email Form">
          <label htmlFor="name" className="contact-form-label">
            Name:
          </label>
          <input
            type="text"
            className="input contact-input w-input"
            max="256"
            name="Name"
            data-name="Name"
            placeholder="Your name"
            id="Name"
            required=""
          />
          <label htmlFor="Email" className="contact-form-label">
            Email:
          </label>
          <input
            type="email"
            className="input contact-input w-input"
            max="256"
            name="email"
            data-name="Email"
            placeholder="Email address"
            id="Email"
            required=""
          />
          <label htmlFor="Message" className="contact-form-label">
            Message:
          </label>
          <textarea
            id="Message"
            name="Message"
            max="5000"
            data-name="Message"
            required=""
            placeholder="Tell me about your project"
            className="input contact-input text-field w-input"
          />
          <input
            type="submit"
            value="Send Message"
            data-wait="Please wait..."
            className="form-button"
          />
        </form>
      </div>
      <div className="Contact_Form--backtext">
        Contact
      </div>
    </Col>
  </Row>
)


const AboutSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery2 {
        aboutMeDevMarkdown: markdownRemark(
          frontmatter: { type: { eq: "about-me-developer" } }
        ) {
          html
        }
        aboutMeJourneyMarkdown: markdownRemark(
          frontmatter: { type: { eq: "about-me-journey" } }
        ) {
          html
        }
        aboutMeMoreMarkdown: markdownRemark(
          frontmatter: { type: { eq: "about-me-more" } }
        ) {
          html
        }
        myPicture: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bgFly: file(relativePath: { eq: "fly.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
  />
)

export default AboutContainer
