import React from "react"
import Heading from "../components/heading"
import Icon from "../components/icon"
import { Container, Col, Row } from "reactstrap"
import { Navbar, NavItem, NavLink } from "reactstrap"
import AnchorLink from "../components/anchorLink"
import NavScrollspy from "../components/navScrollspy"
import Fade from "react-reveal/Fade"
import "../components/scss/mainSection.scss"

const MainHeader = () => {
  return (
    <Container>
      <Fade bottom>
        <Row className="pb-2">
          <Col className="text-center">
            <Heading size={4} className="header-text_name"> Monica Arroyo</Heading>
            <Heading size={1} className="header-text_desc double-underline pb-2">
              WEB DEVELOPER
            </Heading>
            <Navbar
              expand="sm"
             className="d-none d-block-xl d-block-lg"
            >
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
      <Row className="header_links text-center">
        <a
          className=" d-inline header-btn"
          href="https://drive.google.com/file/d/1nbZps9HBHTAuDymwGDa5-lcCqPYURswW/view"
          target="_blank"
        >
          <div className="header-btn_icon" />
          <Icon className="" name="envelope" />

          <div className="header-btn_text text-nowrap">View My Resume</div>
        </a>
      </Row>
    </Container>
  )
}
export default MainHeader

/*
import Parallax from "../components/animation"
import MainSection from "./mainSection"
import BackgroundImage from "gatsby-background-image"
import { StaticQuery, graphql } from "gatsby"
const MainHeader = props => (
  <StaticQuery
    query={graphql`
      query MyQuery3 {
        bgImage: file(relativePath: { eq: "austin2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <MainHeaderContainer data={data} {...props} />}
  />
)
*/

/*
<BackgroundImage 
    Tag="section"
    fluid={data.bgImage.childImageSharp.fluid}
    className="background-image"
    >

 </BackgroundImage>

*/

/*
 <Container className="MainHeader">
      <Row>
      <Heading size={3} light className="text-light mb-4" />
      <MainSection />
      </Row>
      
    </Container>
*/

//import "./scss/mainHeading.scss"
//import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
//<Parallax>

//import PropTypes from "prop-types"
/*
MainHeader.propTypes = {
 title: PropTypes.string.isRequired,
}
*/
//import SocialLink from "./socialLink"
//import { graphql, StaticQuery } from "gatsby"
//import Img from "gatsby-image"
//import Typist from "react-typist"
//import ContactButton from "./contactButton"

//react hooks for typist state loop
//  const [done, setDone] = useState(true)
/*
  useEffect(() => {
    setDone(true)
  }, [done])
*/
// avatarResolutions: PropTypes.object.isRequired,
//children: PropTypes.node.isRequired,
//subtitle: PropTypes.string.isRequired,

/*
 <Col className="d-lg-none mt-5 MainHeader__cta-container">
          <ContactButton size="lg" />
        </Col>
<Col className="d-lg-none">
          <SocialLink icon="paperplane" to="https://twitter.com" />
          <SocialLink icon="paperplane" to="https://twitter.com" />
          <SocialLink icon="paperplane" to="https://twitter.com" />
        </Col>

*/

//<Parallax scrolling={false}></Parallax>

/*
 <Heading size={1} extraBold>
          {title}
        </Heading>
*/

/*
 {
           done ? (
            <Typist onTypingDone={() => setDone(false)}>
            <span>I am Monica Arroyo</span>
            <Typist.Backspace count={13} delay={200} />
            <span>Developer</span>
          </Typist>

           ) : ( "")
         }
*/
/*
const MainHeaderContainer = props => (
  <StaticQuery
    query={graphql`
     query {
        avatar: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 160, height: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <MainHeader
        avatarResolutions={data.avatar.childImageSharp.fixed}
        {...props}
      />
    )}
  />
);

export default MainHeaderContainer;


*/

/*
import PropTypes from "prop-types"
import React from "react"
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import ContactButton from './contactButton'
import Heading from './headings'
import Parallax from './animation'

import './scss/mainHeading.scss'


const MainHeader = ({subtitle, title, children}) => (
 <Parallax>
     <header className="MainHeader">
      <Heading size={1} extraBold>
        {title}
      </Heading>
      <Heading size={3} light className="text-light mb-4">
        {subtitle}
      </Heading>
      {children}
      <div className="d-lg-none mt-5 MainHeader__cta-container">
        <ContactButton size="lg" />
      </div>
    </header>
 </Parallax>
)

/*
<Img
        alt="Monica arroyo"
        className="MainHeader__avatar img-fluid rounded-circle mb-5"
        resolutions={avatarResolutions}
      />
*/
/*
MainHeader.propTypes = {
    //avatarResolutions: PropTypes.object.isRequired,
    //children: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

/*
const HeaderContainer = props => (
    <StaticQuery
    query={graphql`
     query {
        avatar: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fixed(width: 160, height: 160) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Header
        avatarResolutions={data.avatar.childImageSharp.fixed}
        {...props}
      />
    )}
  />
    
)
*/
/*
export const MainHeaderContainer = (props) => (
  <Header {...props} />
  
)
*/

//export MainHederContainer;
//export default MainHeader
