import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HTML from "../components/html"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import SectionHeader from "../components/sectionHeader"
import Section from "../components/section"
import Icon from "../components/icon"
import styled from "styled-components"
//import Section from '../components/section'
import MainSection from "./mainSection"
import "../components/scss/about.scss"
import CustomScroll from "react-custom-scroll"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"
const About = ({ data }) => (
  <Section id="about-me" style={{ backgroundColor: "red" }}>
    <Row className="about_container">
      <BackgroundImage
        Tag="section"
        fluid={data.bgFly.childImageSharp.fluid}
        className="bgFly"
      >
        <Col md="auto" sm="12" className="about_left">
          <div className="about_header">
            <h1 className="about_header-text">Contact</h1>
            <div className="about_header-underline" />
          </div>
          <div className="about_contact d-none d-xl-block d-lg-block d-md-block">
            Austin TX 78744
            <br />
            (512) 825-2633
            <br />
            Monica.arroyo1319@gmail.com
          </div>
        </Col>
      </BackgroundImage>
      <Col md="auto" className="about_right">
        <div className="side-content">
          <div className="contact-form ">
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
                className="button big color-3 w-button"
              />
            </form>
          </div>
        </div>
      </Col>
    </Row>
  </Section>
)


const AboutContainer = props => (
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

const StyledAbout = styled(AboutContainer)`
  width: 100vw;
  background-color: #454353;
`

const StyledAboutContainer = styled(BackgroundImage)`
  width: 40%;
`

export default AboutContainer
