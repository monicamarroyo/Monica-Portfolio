import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Fade from "react-reveal"
import "../components/scss/projects.scss"

const Projects = ({ data }) => (
  <Row className="About_Section mx-auto px-auto">
    <BackgroundImage
      Tag="section"
      fluid={data.bgSky.childImageSharp.fluid}
      className="bgSky"
    >
      <Col
        md="auto"
        sm="12"
        className="About_Section--left mx-auto my-auto px-auto py-auto"
      >
        <div className="Project_Info">
          <Fade top>
            <h1 className="Project_Info--header mx-auto my-auto px-auto py-auto">
              About
            </h1>
            <div className="Project_Info--underline" />
          </Fade>
        </div>
      </Col>
    </BackgroundImage>
    <Col md="auto" className="Project_Section--right text-center">
      <div className="Project_Form--backtext">About</div>
    </Col>
  </Row>
)

const ProjectSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery5 {
        bgSky: file(relativePath: { eq: "mountain2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        salon: file(relativePath: { eq: "salon.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 700) {
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
