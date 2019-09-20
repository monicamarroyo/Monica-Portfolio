import PropTypes from "prop-types"
import React from "react"

import Icon from "./icon"
import "./scss/socialLink.scss"
const SocialLink = ({ icon, to }) => (
  <div className="circles">
    <a
      className="SocialLink"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="circle">
        <div className="circle">
          <Icon name={icon} />
        </div>
      </div>
    </a>
  </div>
)

SocialLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
export default SocialLink
