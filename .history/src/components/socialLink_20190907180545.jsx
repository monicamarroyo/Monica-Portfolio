import PropTypes from "prop-types"
import React from "react"

import Icon from "./icon"
import "./scss/socialLink.scss"
const SocialLink = ({ icon, to }) => (
  
    <a
      className="SocialLink"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    ><div className="mask">

      <Icon name={icon} />
      </div>
    </a>
  
)

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
export default SocialLink
