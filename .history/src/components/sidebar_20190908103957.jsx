import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from "react-burger-menu"

import AnchorLink from "./anchorLink"
import NavScrollspy from "./navScrollspy"
import {
  CONTACT_EMAIL,
  PAGE_CONTENT_ID,
  PAGE_CONTENT_CONTAINER_ID,
} from "../constants"
import "./scss/sidebar.scss"

const onStateChange = (isOpen, toggle) => newState => {
  if (isOpen !== newState.isOpen) {
    toggle()
  }
}

const Sidebar = ({ isOpen, toggle }) => (
  <Menu
    className="Sidebar"
    right
    isOpen={isOpen}
    pageWrapId={PAGE_CONTENT_ID}
    outerContainerId={PAGE_CONTENT_CONTAINER_ID}
    onStateChange={onStateChange(isOpen, toggle)}
    customBurgerIcon={false}
  >
    <NavScrollspy
      mapItems={({ name, href }) => (
        <div className="Sidebar-item" key={name}>
          <AnchorLink
            className="Sidebar__link d-block"
            href={`#${href}`}
            onClick={toggle}
          >
            {name}
          </AnchorLink>
        </div>
      )}
    />
    <div className="Sidebar-item">
      <a
        className="Sidebar__link Sidebar_Social pb-4"
        href="https://drive.google.com/file/d/1nbZps9HBHTAuDymwGDa5-lcCqPYURswW/view
        target="_blank"
      >
        Resume
      </a>
    </div>
    <div className="Sidebar-item">
      <a
        className="Sidebar__link Sidebar_Social"
        href={`mailto:${CONTACT_EMAIL}`}
      >
        Get In Touch
      </a>
    </div>
  </Menu>
)

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
}

Sidebar.defaultProps = {
  isOpen: false,
}

export default Sidebar
