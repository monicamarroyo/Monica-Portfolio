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
const About = ({ data }) => (
  <div style={{ backgroundColor: "red" }}>
    <Row>
      <Col md="auto" style={{width:"45%"}}
           sm="12"
      >
        <BackgroundImage
          Tag="section"
          fluid={data.bgPine.childImageSharp.fluid}
          className="bgPineapple"
        >
          <Section bg id="about-me" padding={Section.PADDING_LARGE}>
            <MainSection />
          </Section>
        </BackgroundImage>
      </Col>

      <Col md="auto">
        <Section bg id="about-me" padding={Section.PADDING_LARGE} />
      </Col>
    </Row>
  </div>
)
// <MainSection />

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
        bgPine: file(relativePath: { eq: "pineapple.jpg" }) {
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
