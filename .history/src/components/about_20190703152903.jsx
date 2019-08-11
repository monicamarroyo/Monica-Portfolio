import React from "react"
import { StaticQuery, graphql } from "gatsby"
import HTML from "../components/html"
import Img from "gatsby-image"
import { Container, Row, Col } from "reactstrap"
import SectionHeader from "../components/sectionHeader"

export default function About({ data }) {
  return (
    <Container>
      <SectionHeader
        index={4}
        title="About Me."
        description="Learn more about who I am and why I love what I do."
      />
      <Row className="text-center mb-3">
        <Col md="6">
         
          <h1>What the fuck to put</h1>
        </Col>
        <Col md="6">
          <HTML>{data.aboutMeDevMarkdown}</HTML>
        </Col>
      </Row>
    </Container>
  )
}

export const aboutQuery = graphql`
  query {
    aboutMeDevMarkdown: markdownRemark(
      frontmatter: { type: { eq: "about-me-developer" } }
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
`
