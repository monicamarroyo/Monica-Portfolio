import PropTypes from "prop-types"
import React from "react"
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'

import ContactButton from './contactButton'
import Heading from './headings'
import Animation from './animation'

import './scss/heading.scss'

const Header = ({avatarResolution, children, subtitle, title}) => (
 <Animation>
     <header className="MainHeader">
        <Img alt="monica arroyo" className="MainHeader__avatar img-fluid rounded-circle mb-5"/>
        <Heading size={3} light className="text-light mb-4">
         {title}
        </Heading>
        {children}
        <div className="d-lg none mt-5 MainHeader__cta-container">
         <ContactButton size="lg"/>
        </div>
     </header>
 </Animation>
)


Header.propTypes = {
    avatarResolution: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    subtitle: <P</PropTypes>
}
export default Header
