import PropTypes from 'prop-types'
import React from 'react'
//This is used for scrolling
import { default as anchorLink } from 'react-anchor-link-smooth-scroll'

const AnchorLink = ({
  children, className, href, onClick,
}) => (
  <anchorLink className={className} offset={80} href={href} onClick={onClick}>
    {children}
  </anchorLink>
)

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

AnchorLink.defaultProps = {
  className: undefined,
  onClick: undefined,
}

export default AnchorLink