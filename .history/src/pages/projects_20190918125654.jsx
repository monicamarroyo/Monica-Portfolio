import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
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
        <div className="About_Info">
          <Fade top>
            <h1 className="About_Info--header mx-auto my-auto px-auto py-auto">
              About
            </h1>
            <div className="About_Info--underline" />
          </Fade>
          <div className="pt-5 ImageMe">
            <Fade left>
              <div className="ImageContainer">
                <Img
                  alt="monica arroyo"
                  className="img-fluid Me"
                  fixed={data.myPicture.childImageSharp.fixed}
                />
              </div>
            </Fade>
          </div>
          <Fade left>
            <div className="About_Socials text-center d-none d-xl-block d-lg-block d-md-block ">
              <SocialLink
                icon="linkedin"
                to="https://www.linkedin.com/in/monica-arroyo-765b7111a/"
              />
              <SocialLink icon="github" to="https://github.com/monicamarroyo" />
              <SocialLink
                icon="instagram"
                to="https://www.instagram.com/mookiemondragon/"
              />
            </div>
          </Fade>
        </div>
        <div className="About-Me--devTablet d-none d-md-block d-lg-none">
          <Fade left>
            <h3 className="About-Me--dev pb-1">
              <Icon name="graduation-cap" /> Hello there!
            </h3>
            <div className="About-Me--devText pb-4">
              <HTML children={data.aboutMeDevMarkdown.html} />
            </div>
          </Fade>
        </div>
      </Col>
    </BackgroundImage>
    <Col md="auto" className="About_Section--right text-center">
      <Fade right>
        <h3 className="About-Me--dev pb-1 d-md-none d-lg-block">
          <Icon name="graduation-cap" /> Hello there!
        </h3>
        <div className="About-Me--devText pb-4 d-md-none d-lg-block">
          <HTML children={data.aboutMeDevMarkdown.html} />
        </div>
        <h3 className="About-Me--dev pb-1">
          {" "}
          <Icon name="code-fork" /> My Journey as a developer.
        </h3>
        <div className="About-Me--devText pb-4">
          <HTML children={data.aboutMeJourneyMarkdown.html} />
        </div>
        <h3 className="About-Me--dev pb-1">
          <Icon name="user-circle-o" /> More about me..
        </h3>
        <div className="About-Me--devText pb-4">
          <HTML children={data.aboutMeMoreMarkdown.html} />
        </div>
      </Fade>
      <div className="About_Form--backtext">About</div>
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
/*
  <Col md="auto" className="Project_Section--left" />

      <Col md="auto" className="Project_Section--right text-center" />
*/
/*
 
*/