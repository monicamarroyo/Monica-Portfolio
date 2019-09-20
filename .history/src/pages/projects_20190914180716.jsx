import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import "../components/scss/projects.scss"

const Projects = ({ data }) => (
  <Row className="Project_Section mx-auto px-auto" style={{height:"100vh"}}>
    <BackgroundImage
      Tag="section"
      fluid={data.bgCanyon2.childImageSharp.fluid}
      className="bgCanyon2"
    >
        <h1>Projects</h1>
        </BackgroundImage>
  </Row>
)

const ProjectSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery5 {
        bgCanyon2: file(relativePath: { eq: "mountain.jpg" }) {
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
