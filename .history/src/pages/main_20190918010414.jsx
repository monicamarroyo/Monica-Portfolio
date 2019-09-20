import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Heading from "../components/heading"
import { Col, Row } from "reactstrap"
import { Navbar, NavItem } from "reactstrap"
import AnchorLink from "../components/anchorLink"
import NavScrollspy from "../components/navScrollspy"
import Fade from "react-reveal/Fade"
import { MdToys } from "react-icons/md"
import "../components/scss/main.scss"
import SocialLink from "../components/socialLink"
import BackgroundImage from "gatsby-background-image"
const Main = ({ data }) => (
  <BackgroundImage
    Tag="section"
    className="Main_Section--bg"
    fluid={data.bgMountain.childImageSharp.fluid}
  >
    <Row className="Main_Section text-center">
      <Col className="mx-auto px-auto py-auto my-auto">
        <Fade bottom>
          <Heading
            size={4}
            className="Main_Section--text1 text-center pt-2 pb-0"
          >
            {" "}
            Monica Arroyo
          </Heading>
          <Heading
            size={1}
            className="Main_Section--text2 text-center double-underline px-auto py-auto mx-auto my-auto"
          >
            WEB DEVELOPER
          </Heading>
          <Navbar expand="sm" className="d-none d-md-flex mt-2 text-center">
            <NavScrollspy
              className="navbar-nav mx-auto"
              mapItems={({ name, href }) => (
                <NavItem className={name === "Home" ? "d-none" : ""} key={name}>
                  <AnchorLink className="nav-link" href={`#${href}`}>
                    {name}
                  </AnchorLink>
                </NavItem>
              )}
            />
          </Navbar>
        </Fade>
      </Col>
    </Row>
    <Row className="text-center">
      <a
        className="header-btn_desc d-inline"
        href="https://drive.google.com/file/d/1nbZps9HBHTAuDymwGDa5-lcCqPYURswW/view"
        target="_blank"
      >
       
          <div className="header-btn" />
          <div className="header-btn_icon">
            <MdToys className="header-icon_star" />
          </div>
        
        <div className="header-btn_text text-nowrap">View My Resume</div>
      </a>

      <div className="social-icons">
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
    </Row>
  </BackgroundImage>
)

const MainSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery6 {
        bgMountain: file(relativePath: { eq: "flower2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Main data={data} {...props} />}
  />
)

export default MainSection
