import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Collapse, Navbar as RSNavbar, NavbarBrand } from "reactstrap"
//import Burger from 'react-animated-burgers'
import Icon from "./icon"

import "./scss/navbar.scss"

const Navbar = ({ solid, toggleSidebar }) => {
  const className = classNames("Navbar", {
    "Navbar--solid": solid,
  })
  //d-lg-none
  return (
    <RSNavbar className={className} fixed="top">
      <NavbarBrand href="/" className="mr-auto">
        Monica Arroyo
      </NavbarBrand>
      Menu
      <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
      <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
      </button>
      <Collapse navbar />
    </RSNavbar>
  )
}

//what I had before
/*
//import AnchorLink from "./anchorLink"
//import ContactButton from "./contactButton"
//import NavScrollspy from "./navScrollspy"

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
        <Collapse navbar>
          <NavScrollspy
            className="navbar-nav ml-auto"
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

*/

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
