import PropTypes from "prop-types"
import React from "react"
import Icon from "./icon"
import "./scss/socialLink.scss"

const SocialLink = ({ icon, to }) => (
  <div className="sociaLink_Container">
    <a
      className="socialLink"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={icon} />
    </a>
    <div className="socialLink" />
    <div className="hey" />
  </div>
)

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
export default SocialLink
