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
      <div className="nav-text d-none d-md-block d-lg-block d-xl-block">Menu</div>
      <div className="navbar-toggler" onClick={toggleSidebar}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <Collapse navbar />
    </RSNavbar>
  )
}



Navbar.propTypes = {
  solid: PropTypes.bool,
  toggleSidebar: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
  solid: false,
}

export default Navbar


