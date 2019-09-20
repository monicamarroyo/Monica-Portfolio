import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"
import {
  Collapse,
  Container,
  Navbar as RSNavbar,
  NavItem,
  NavLink,
} from "reactstrap"

import AnchorLink from "./anchorLink"
import ContactButton from "./contactButton"
import NavScrollspy from "./navScrollspy"
import Icon from "./icon"

import "./scss/navbar.scss"

const Navbar = ({ solid, toggleSidebar }) => {
  const className = classNames("Navbar", {
    "Navbar--solid": solid,
  })

  return (
    <RSNavbar className={className} expand="lg" fixed="top">
      <Container>
        <AnchorLink href="#home" className="navbar-brand mr-0">
          Monica
        </AnchorLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <div className="d-flex align-items-center">
            <Icon name="bars" />
          </div>
        </button>
        <Collapse navbar>
          <NavScrollspy
            className="navbar-nav pl-0"
            mapItems={({ name, href }) => (
              <NavItem className={name === 'Home' ? 'd-none' : ''} key={name}>
                <AnchorLink className="nav-link"  href={`#${href}`}>
                  {name}
                </AnchorLink>
              </NavItem>
            )}
          />
          <NavItem>
            
          </NavItem>
          <ContactButton />
        </Collapse>
      </Container>
    </RSNavbar>
  )
}

// target={href==="resume" ? "_blank": "" }
//href === "resume" ? "https://twitter.com/" : 

Navbar.propTypes = {
  solid: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  solid: false,
}

export default Navbar
