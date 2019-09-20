import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Icon from "../components/icon"
import HTML from "../components/html"
import SplitterLayout from "react-splitter-layout"
import "react-splitter-layout/lib/index.css"
import "../components/scss/about.scss"

const About = ({ data }) => (
  <Row className="About_Section mx-auto px-auto">
    <BackgroundImage
      Tag="section"
      fluid={data.bgBlue.childImageSharp.fluid}
      className="bgBlue"
    >
      <Col
        md="auto"
        sm="12"
        className="About_Section--left mx-auto my-auto px-auto py-auto"
      >
        <div className="About_Info">
          <h1 className="About_Info--header mx-auto my-auto px-auto py-auto">
            About
          </h1>
          <div className="About_Info--underline" />
          <div className="ImageContainer">
            <Img
              alt="monica arroyo"
              className="img-fluid Me"
              fixed={data.myPicture.childImageSharp.fixed}
            />
          </div>
        </div>
      </Col>
    </BackgroundImage>
    <Col md="auto" className="About_Section--right">
      <SplitterLayout>
        <div>
          <h3 className="About-Me--dev pb-1">
            <Icon name="graduation-cap" /> Hello there!
          </h3>
          <div className="About-Me--devText pb-4">
            <HTML children={data.aboutMeDevMarkdown.html} />
          </div>
          <h3 className="About-Me--dev pb-1">
            {" "}
            <Icon name="code-fork" /> My Journey as a developer.
          </h3>
          <div className="About-Me--devText pb-4">
            <HTML children={data.aboutMeJourneyMarkdown.html} />
          </div>
          <h3 className="About-Me--dev pb-1">
            <Icon name="user-circle-o" /> More about me..
          </h3>
          <div className="About-Me--devText pb-4">
            <HTML children={data.aboutMeMoreMarkdown.html} />
          </div>
          <div className="About_Form--backtext">About</div>
        </div>
      </SplitterLayout>
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
        myPicture: file(relativePath: { eq: "me2.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bgBlue: file(relativePath: { eq: "bluewood.jpg" }) {
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

export default AboutSection
