import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Icon from "../components/icon"
import HTML from "../components/html"
import SocialLink from "../components/socialLink"
import Fade from "react-reveal/Fade"
import "../components/scss/about.scss"

const About = ({ data }) => (
  <Row className="About_Section mx-auto px-auto">
    <BackgroundImage
      Tag="section"
      fluid={data.bgBlue.childImageSharp.fluid}
      className="bgBlue"
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

          <div className="About_Socials text-center d-none d-xl-block d-lg-block d-md-block ">
            <Fade left>
              <SocialLink
                icon="linkedin"
                to="https://www.linkedin.com/in/monica-arroyo-765b7111a/"
              />
              <SocialLink icon="github" to="https://github.com/monicamarroyo" />
              <SocialLink
                icon="instagram"
                to="https://www.instagram.com/mookiemondragon/"
              />
            </Fade>
          </div>
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
        myPicture: file(relativePath: { eq: "me5.jpg" }) {
          childImageSharp {
            fixed(width: 250, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        bgBlue: file(relativePath: { eq: "green3.jpg" }) {
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
