import PropTypes from 'prop-types'
import React from 'react'
//For scrolling
import { default as RSAnchorLink } from 'react-anchor-link-smooth-scroll'

const AnchorLink = ({
  children, className, href, onClick,
}) => (
  <RSAnchorLink className={className} offset={80} href={href} onClick={onClick}>
    {children}
  </RSAnchorLink>
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