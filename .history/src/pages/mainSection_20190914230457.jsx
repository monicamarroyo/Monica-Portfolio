import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Heading from "../components/heading"
import Icon from "../components/icon"
import { Container, Col, Row } from "reactstrap"
import { Navbar, NavItem } from "reactstrap"
import AnchorLink from "../components/anchorLink"
import NavScrollspy from "../components/navScrollspy"
import Fade from "react-reveal/Fade"
import { MdToys } from "react-icons/md"
import "../components/scss/mainSection.scss"
import SocialLink from "../components/socialLink"
import BackgroundImage from "gatsby-background-image"
const Main = ({ data }) => (
  <BackgroundImage Tag="section" fluid={data.bgMountain.childImageSharp.fluid}>
    <Row className="Main_Section text-center">
      <h3 className="Main_Section_Text px-auto mx-auto py-auto my-auto text-center">Monica Arroyo</h3>
      <h1 className="Main_Section_Text2 px-auto mx-auto py-auto my-auto text-center">Web developer</h1>
    </Row>
  </BackgroundImage>
)

const MainSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery6 {
        bgMountain: file(relativePath: { eq: "mountain.jpg" }) {
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

/*
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Heading from "../components/heading"
import Icon from "../components/icon"
import { Container, Col, Row } from "reactstrap"
import { Navbar, NavItem } from "reactstrap"
import AnchorLink from "../components/anchorLink"
import NavScrollspy from "../components/navScrollspy"
import Fade from "react-reveal/Fade"
import { MdToys } from "react-icons/md"
import "../components/scss/mainSection.scss"
import SocialLink from "../components/socialLink"
import BackgroundImage from "gatsby-background-image"
*/

/*
const MainSection = () => {
  return (
    <Container className="px-5 mx-auto">
      <Fade bottom>
        <Row>
          <Col className="r">
            <Heading size={4} className="header-text_name text-center pt-2 pb-0">
              {" "}
              Monica Arroyo
            </Heading>
            <Heading
              size={1}
              className="header-text_desc text-center double-underline"
            >
              WEB DEVELOPER
            </Heading>
            <Navbar expand="sm" className="d-none d-md-flex mt-2 text-center">
              <NavScrollspy
                className="navbar-nav mx-auto"
                mapItems={({ name, href }) => (
                  <NavItem
                    className={name === "Home" ? "d-none" : ""}
                    key={name}
                  >
                    <AnchorLink className="nav-link" href={`#${href}`}>
                      {name}
                    </AnchorLink>
                  </NavItem>
                )}
              />
            </Navbar>
          </Col>
        </Row>
      </Fade>
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
        <div className="social-icons mx-auto pt-3">
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
    </Container>
  )
}
export default MainSection
*/
