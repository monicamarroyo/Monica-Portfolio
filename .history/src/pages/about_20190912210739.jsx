import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import "../components/scss/about.scss"

const About = ({ data }) => (
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
        
      </Col>
    </BackgroundImage>
    <Col
      md="auto"
      className="Contact_Section--right mx-auto my-auto px-auto py-auto"
    >
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

export default AboutSection
