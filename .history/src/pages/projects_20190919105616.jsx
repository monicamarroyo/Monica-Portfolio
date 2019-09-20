import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import SocialLink from "../components/socialLink"
import Icon from "../components/icon"
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
          </Fade>
        </div>
        <div className="Projects mx-auto my-auto pt-5 py-auto">
          <div className="ProjectContainer--1">
            <a
              href="https://github.com/monicamarroyo/Monica_Salon_React"
              target="_blank"
              rel="noreferrer"
              className="Project_Link"
            >
              <Img
                alt="monicaHairSalon"
                className="img-fluid hairSalon"
                fluid={data.salon.childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="ProjectContainer--2">
            <a
              href="https://github.com/monicamarroyo/node-web-crawler"
              target="_blank"
              rel="noreferrer"
              className="Project_Link"
            >
              <Img
                alt="monicaHairSalon"
                className="img-fluid webcrawler"
                fluid={data.webcrawler.childImageSharp.fluid}
              />
            </a>
          </div>
          <div className="ProjectContainer--3">
            <a
              href="https://github.com/monicamarroyo/graphql-prisma"
              target="_blank"
              rel="noreferrer"
              className="Project_Link"
            >
              <Img
                alt="monicaHairSalon"
                className="img-fluid prisma"
                fluid={data.prisma.childImageSharp.fluid}
              />
            </a>
          </div>
        </div>
      </Col>
    </BackgroundImage>
    <Col md="auto" className="Project_Section--right text-center">
      <h4 className="Project_Text pt-4">
        Here's a few of the many things I've worked on over the year. Check out
        the source code for a deeper insight into how I work.
      </h4>
      <div className="Project_Desc">
        <h5 className="Project_Title">Monica Hair Salon</h5>I created this
        website as a starter websitie in order to learn ReactJs, mainly focusing
        on Front-End development and responsiveness. Since then I have continued
        to program in React, and it's a framework I enjoy programming in.
        <div className="Project_Dec--codeLink">
          <a
            href="https://github.com/monicamarroyo/Monica_Salon_React"
            target="_blank"
            className="Project_Link"
          >
            <Icon classname="Project_Link--icon" name="code" />
            View the Code
          </a>
        </div>
        <div className="Project_Libraries text-center d-none d-xl-block d-lg-block d-md-block ">
          <SocialLink
            icon="react"
            to="https://reactjs.org/"
          />
          <SocialLink icon="sass" to="https://sass-lang.com/" />
          <SocialLink
            icon="bootstrap"
            to="https://getbootstrap.com/"
          />
          <SocialLink
            icon="csswizardry"
            to="https://www.instagram.com/mookiemondragon/"
          />
          <SocialLink
            icon="materialdesign"
            to="https://www.instagram.com/mookiemondragon/"
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
        bgFlower: file(relativePath: { eq: "redflowers2.jpg" }) {
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
