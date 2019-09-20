import React from "react"
import Heading from "../components/heading"
import Icon from "../components/icon"
import { Container, Col, Row } from "reactstrap"
import { Navbar, NavItem, NavLink } from "reactstrap"
import AnchorLink from "../components/anchorLink"
import NavScrollspy from "../components/navScrollspy"
import Fade from "react-reveal/Fade"
import { MdToys } from "react-icons/md"
import "../components/scss/mainSection.scss"
import SocialLink from "../components/socialLink"
const MainHeader = () => {
  const blah = <MdToys />
  return (
    <Container className="px-5 mx-auto">
      <Fade bottom>
        <Row>
          <Col className="text-center">
            <Heading size={4} className="header-text_name pb-0">
              {" "}
              Monica Arroyo
            </Heading>
            <Heading
              size={1}
              className="header-text_desc double-underline text-center"
            >
              WEB DEVELOPER
            </Heading>
            <Navbar expand="sm" className="d-none d-md-flex mt-4">
              <NavScrollspy
                className="navbar-nav mx-auto"
                mapItems={({ name, href }) => (
                  <div className="nav-item" key={name}>
                    <NavItem className={name === "Home" ? "d-none" : ""}>
                      <AnchorLink className="nav-link" href={`#${href}`}>
                        {name}
                      </AnchorLink>
                    </NavItem>
                  </div>
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
export default MainHeader
/*
@import "bourbon";

/// border-gradient mixin: ///

@mixin border-gradient($from, $to, $weight: 0) {
  $mix-main: mix($from, $to);
  $mix-sub-from: mix($mix-main, $from);
  $mix-sub-to: mix($mix-main, $to);
  
  box-shadow: 0 1px 0 $weight rgba($mix-sub-to, .25),
              0 -1px 0 $weight rgba($mix-sub-from, .25),
              1px 0 0 $weight rgba($mix-sub-to, .25),
              -1px 0 0 $weight  rgba($mix-sub-from, .25),
              1px -1px 0 $weight rgba($mix-main, .5),
              -1px 1px 0 $weight rgba($mix-main, .5),
              1px 1px 0 $weight rgba($to, .75),
              -1px -1px 0 $weight rgba($from, .75);
}

/// BASIC EXAMPLE ///

.circle {
  //@include size(100px 100px);
  height: 100px;
  width: 100px;
  border-radius: 100%;
 }

.circle {
  &:nth-of-type(2) {
    @include border-gradient(skyblue, hotpink);
    animation: rotateThis 1s linear infinite;
  }

 }

@keyframes rotateThis {
  from {
    transform: rotate(0deg) scale(1);
  }
  
  to {
    transform: rotate(360deg) scale(1);
  }
}

@keyframes psycho {
  0% {
    transform: rotate(0deg) scale(1) translate(0, 0);
  }
  
  33% {
    transform: rotate(360deg) scale(1) translate(5px, 5px);
  }
  
  66% {
    transform: rotate(720deg) scale(1) translate(-5px, -5px);
  }
  
  100% {
    transform: rotate(1080deg) scale(1) translate(0, 0);
  }
}

///// OTHER /////

.circles > * {
  display: inline-block; vertical-align: top;
  
  position: relative;
  margin: 2% 2%;
}

.circles { 
  transform: translateZ(0); 
  margin-bottom: 100px;
}

body {
  background-color: #222; color: #fff;
  text-align: center;
}

.container {
  overflow: hidden;
  padding-bottom: 150px;
}




*/
/*<div class="container">


<div class="circles">
  <div class="circle"></div>
  <div class="circle"></div>
  

</div>
  


</div>

*/

/*
 <div className="social-icon">
          <SocialLink className="hey" icon="" to=""/>
          <SocialLink icon="" to=""/>
          <SocialLink icon="" to=""/>
        </div>

*/

//FaCloudDownloadAlt
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
