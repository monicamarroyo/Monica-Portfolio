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
      <Col className="Project_Info text-center">
        <h1 className="Project_Info--header text-center mx-auto my-auto px-auto py-auto">
          Projects
        </h1>
        <div className="Project_Info--underline" />
        <h4 className="pt-5">Some of the Projects I have worked on during the year</h4>
      </Col>
    </Row>
    <Row className="Project_Section mx-auto px-auto">
     <Col md="6" className="px-auto py-auto mx-auto my-auto">
      
     <Img
          alt="monica arroyo"
          className="img-fluid Me"
          fixed={data.salon.childImageSharp.fixed}
        />
     </Col>
    </Row>
  </div>
)
/*
  <Col md="auto" className="Project_Section--left" />

      <Col md="auto" className="Project_Section--right text-center" />
*/
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
            fluid(maxWidth:700) {
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
