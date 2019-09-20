import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import "../components/scss/projects.scss"

const Projects = ({ data }) => (
  <Row className="About_Section mx-auto px-auto">
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
     
      </div>
    </Col>

    <Col md="auto" className="About_Section--right text-center" />
  </Row>
)
/*
<BackgroundImage
      Tag="section"
      fluid={data.bgCanyon2.childImageSharp.fluid}
      className="bgCanyon2"
    >
        <h1>Projects</h1>
        </BackgroundImage>
*/
const ProjectSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery5 {
        bgCanyon2: file(relativePath: { eq: "fly.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Projects data={data} {...props} />}
  />
)

export default ProjectSection
