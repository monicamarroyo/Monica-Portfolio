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
        <Img alt="monica arroyo" className="MainHeader__avatar img-fluid rounded-circle mb-5">
        </Img>
     </header>
 </Animation>
)

export default Header
