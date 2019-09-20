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
            <div className="about_header-underline d-none d-xl-block d-lg-block d-md-block" />
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
      <Col md="auto" className="about_right text-center">
        
      </Col>
    </Row>
  </Section>
)



/*

<div className="contact-form ">
          <form id="email-form" className="email-form">
            <div className="form-group">
              <label for="name" className="contact-form-label">
                Name:
              </label>
              <input
                type="text"
                className="input contact-input"
                maxLength="256"
                name="name"
                placeholder="Your name"
                id="name"
                required
              />
            </div>
            <label for="email" className="contact-form-label col-md-3">
              Email:
            </label>
            <input
              type="email"
              className="input contact-input"
              maxLength="256"
              name="email"
              placeholder="Your name"
              id="email"
              required
            />
            <label for="message" className="contact-form-label col-md-3">
              Message:
            </label>
            <textarea
              type="message"
              className="input contact-input text-field"
              maxLength="5000"
              name="email"
              placeholder="Your message"
              id="message"
              required
            />
            <input />
          </form>
        </div>v
*/


// <MainSection />
/*--=
<Section bg id="about-me" padding={Section.PADDING_LARGE} />
 <Section bg id="about-me"
           padding={Section.PADDING_LARGE}>
            dsfasdf
          </Section>
*/

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

/*
 <Img fluid={data.bgPine.childImageSharp.fluid} className="pine" />

*/

/*
 <div
        dangerouslySetInnerHTML={{
          __html: data.aboutMeDevMarkdown.html
        }}
         />``````````````````````
*/

/*
 <SectionHeader
      index={4}
      title="About Me."
      description="Learn more about who I am and why I love what I do."
    />
    <Row className="text-left mb-3">
      <Col lg="6">
        <div className="text-center">
          <Img
            alt="monica arroyo"
            className="img-fluid rounded mb-3"
            fixed={data.myPicture.childImageSharp.fixed}
          />
        </div>
        <div className="mb-2">
          <h3>
            <Icon name="graduation-cap" /> Hello there!
          </h3>
          <HTML children={data.aboutMeDevMarkdown.html} />
        </div>
      </Col>
      <Col lg="6" className="text-left">
        <h3>
          {" "}
          <Icon name="code-fork"/> My Journey as a developer.
        </h3>
        <HTML children={data.aboutMeJourneyMarkdown.html} />
      </Col>
    </Row>
    <Row className="text-left">
      <Col md="12">
        <h3><Icon name="user-circle-o"/> More about me..</h3>
        <HTML children={data.aboutMeMoreMarkdown.html} />
      </Col>
    </Row>

*/

//<HTML>{data.aboutMeDevMarkdown2}</HTML>
/*

export const query = graphql`
  query {
    file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 160, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
*/
