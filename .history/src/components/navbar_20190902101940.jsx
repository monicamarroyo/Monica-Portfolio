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
//d-lg-none
  return (
    <RSNavbar className={className} expand="lg" fixed="top">
      <Container className="mr-auto">
        <AnchorLink href="#home" className="navbar-brand d-lg-none">
          Moni
        </AnchorLink>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <div className="d-flex justify-content-between">
            <Icon name="bars" />
          </div>
        </button>
        <Collapse navbar className="mx-auto">
          <NavScrollspy
            className="navbar-nav"
            mapItems={({ name, href }) => (
              <NavItem className={name === "Home" ? "d-none" : ""} key={name}>
                <AnchorLink className="nav-link" href={`#${href}`}>
                  {name}
                </AnchorLink>
              </NavItem>
            )}
          />

          <NavItem className="navbar-nav">
            <NavLink href="https://drive.google.com/file/d/1nbZps9HBHTAuDymwGDa5-lcCqPYURswW/view" target="_blank">
              Resume
            </NavLink>
          </NavItem>

          <ContactButton className="btn-nav" />
        </Collapse>
      </Container>
    </RSNavbar>
  )
}
//className="navbar-nav ml-auto"


/*
 <NavScrollspy
            className="navbar-nav"
            mapItems={({ name, href }) => (
              <NavItem className={name === 'Home' ? 'd-none' : ''} key={name}>
                <AnchorLink className="nav-link" target={href==="resume" ? "_blank": "" } href={href === "resume" ? "https://twitter.com/" : `#${href}`} >
                  {name}
                </AnchorLink>
              </NavItem>
            )}
          />

*/

Navbar.propTypes = {
  solid: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  solid: false,
}

export default Navbar

/*
 <NavScrollspy
            className="navbar-nav"
            mapItems={({ name, href }) => (
              <NavItem className={name === 'Home' ? 'd-none' : ''} key={name}>
                <AnchorLink className="nav-link" target={href==="resume" ? "_blank": "" } href={href === "resume" ? "https://twitter.com/" : `#${href}`} >
                  {name}
                </AnchorLink>
              </NavItem>
            )}
          />


*/
