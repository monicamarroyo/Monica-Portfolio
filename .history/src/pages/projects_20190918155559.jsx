import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Fade from "react-reveal"
import "../components/scss/projects.scss"

const Projects = ({ data }) => (
  <Row className="Project_Section mx-auto px-auto">
    <BackgroundImage
      Tag="section"
      fluid={data.bgFlower.childImageSharp.fluid}
      className="bgFlower"
    >
      <Col
        md="auto"
        sm="12"
        className="Project_Section--left mx-auto my-auto px-auto py-auto"
      >
        <div className="Project_Info">
          <Fade top>
            <h1 className="Project_Info--header mx-auto my-auto px-auto py-auto">
              Projects
            </h1>
            <div className="Project_Info--underline" />
            <h4 className="pt-4">
              Here's a few of the many things I've worked on over the year.
              Check out the source code for a deeper insight into how I work.
            </h4>
          </Fade>
        </div>
        <div className="Projects--left">
          <div className="ProjectContainer--1">
            <Img
              alt="monicaHairSalon"
              className="img-fluid hairSalon"
              fluid={data.salon.childImageSharp.fluid}
            />
          </div>
          <div className="ProjectContainer--3">
            <Img
              alt="monicaHairSalon"
              className="img-fluid prisma"
              fluid={data.prisma.childImageSharp.fluid}
            />
          </div>
        </div>
      </Col>
    </BackgroundImage>
    <Col md="auto" className="Project_Section--right text-center">
      <div className="Projects--right mx-auto my-auto pt-5 py-auto">
        <div className="ProjectContainer--2">
          <Img
            alt="monicaHairSalon"
            className="img-fluid webcrawler"
            fluid={data.webcrawler.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="Project_Form--backtext">Projects</div>
    </Col>
  </Row>
)

const ProjectSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery5 {
        bgFlower: file(relativePath: { eq: "flowergray2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        salon: file(relativePath: { eq: "salon4.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        webcrawler: file(relativePath: { eq: "web.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        prisma: file(relativePath: { eq: "prisma.jpg" }) {
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
