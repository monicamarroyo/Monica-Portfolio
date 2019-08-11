import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Typist from "react-typist"
import ContactButton from "./contactButton"
import Heading from "./headings"
import Parallax from "./animation"
import RepeatTypist from "./typist"
import "./scss/mainHeading.scss"

const MainHeader = ({ children, subtitle, title }) => {
  //react hooks for typist state loop
  const [done, setDone] = useState(true)

  useEffect(() => {
    setDone(true)
  }, [done])

  
  return (
    <Parallax>
      
      <header className="MainHeader">
        <Heading size={3} light className="text-light mb-4" />
        <RepeatTypist />
      
        <div className="d-lg-none mt-5 MainHeader__cta-container">
          <ContactButton size="lg" />
        </div>
      </header>
     
    </Parallax>
  )
}

/*
 <Heading size={1} extraBold>
          {title}
        </Heading>
*/
MainHeader.propTypes = {
  // avatarResolutions: PropTypes.object.isRequired,
  //children: PropTypes.node.isRequired,
  //subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default MainHeader

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
