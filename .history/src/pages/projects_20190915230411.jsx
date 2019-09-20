import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import "../components/scss/projects.scss"
/*
 <BackgroundImage
      Tag="section"
      fluid={data.bgSky.childImageSharp.fluid}
      className="bgSky"
    >
     </BackgroundImage>
*/

const Projects = ({ data }) => (
  <div>
    <Row className="Project_Section_Name">
      <div className="Project_Info">
        <h1 className="Project_Info--header mx-auto my-auto px-auto py-auto">
          Projects
        </h1>
        <div className="Project_Info--underline" />
      </div>
    </Row>
    <Row className="Project_Section mx-auto px-auto">
      <Col md="auto" className="Project_Section--left">
        <Img
          alt="monica arroyo"
          className="img-fluid Me"
          fixed={data.salon.childImageSharp.fluid}
        />
      </Col>

      <Col md="auto" className="Project_Section--right text-center" />
    </Row>
  </div>
)
/*

*/
const ProjectSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery5 {
        bgSky: file(relativePath: { eq: "mountain.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        salon: file(relativePath: { eq: "salon.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        webcrawler: file(relativePath: { eq: "webcrawler.jpg" }) {
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
