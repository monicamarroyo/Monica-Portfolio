import PropTypes from 'prop-types'
import React from 'react'
//For scrolling
import { default as RSAnchorLink } from 'react-anchor-link-smooth-scroll'

const AnchorLink = ({
  children, className, href, onClick,target
}) => (
  <RSAnchorLink className={className} offset={80} href={href} onClick={onClick} target={target}>
    {children}
  </RSAnchorLink>
)

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  target:PropTypes.string
}

AnchorLink.defaultProps = {
  className: undefined,
  onClick: undefined,
}

export default AnchorLink
//sharable link for resume
//https://drive.google.com/file/d/1nbZps9HBHTAuDymwGDa5-lcCqPYURswW/view