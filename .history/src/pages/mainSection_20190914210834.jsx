import React from "react"
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
const Main = ({ data }) => (
  <Row
    className="Project_Section mx-auto px-auto"
    style={{ height: "100vh" }}

  >
      <Col style={{backgroundColor:"#404267"}}>
      </Col>
      <Col style={{backgroundColor:"#E4E4EF"}}>
      </Col>
  </Row>
)
const ProjectSection = props => (
  <StaticQuery
    query={graphql`
      query MyQuery5 {
        bgCanyon2: file(relativePath: { eq: "fly.jpg" }) {
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