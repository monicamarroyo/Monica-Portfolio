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
    <Row className="text-left mb-3">
      <Col md="6">
       <div className="text-center">
       <Img
          alt="monica arroyo"
          className="img-fluid mb-5"
          fixed={data.myPicture.childImageSharp.fixed}
        />
       </div>
       
        <HTML children={data.aboutMeDevMarkdown.html} />
      </Col>
      <Col md="6" className="text-left">
        <h3>My Journey as a developer.</h3>
        <HTML children={data.aboutMeJourneyMarkdown.html}/>
      </Col>
    </Row>
    <Row className="text-left">
    <h3>More about me..</h3>
        <HTML children={data.aboutMeMoreMarkdown.html}/>
    </Row>
  </Container>
)
/*
 <div
        dangerouslySetInnerHTML={{
          __html: data.aboutMeDevMarkdown.html
        }}
         />
*/

//<HTML>{data.aboutMeDevMarkdown2}</HTML>
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
            fixed(width: 180, height: 180) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <About data={data} {...props} />}
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
