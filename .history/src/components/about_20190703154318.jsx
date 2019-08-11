import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HTML from "../components/html"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import SectionHeader from "../components/sectionHeader"

const About = ({ data }) => (
  <Container>
    <SectionHeader
      index={4}
      title="About Me."
      description="Learn more about who I am and why I love what I do."
    />
    <Row className="text-center mb-3">
      <Col md="6">
        <Img
          alt="monica arroyo"
          className="img-fluid rounded-circle mb-5"
          fixed={data.myPicture.childImageSharp.fixed}
        />
        <h1>What the fuck to put</h1>
      </Col>
      <Col md="6">
        <HTML>{data.aboutMeDevMarkdown}</HTML>
      </Col>
    </Row>
  </Container>
)

const AboutContainer = props => (
    <StaticQuery
    query={graphql`
      query MyQuery {
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
            fixed(width: 160, height: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
    <About
     data = {data}
     {...props} 
    />)}
  />
)

export default AboutContainer

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
