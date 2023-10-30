import React from "react";
import { Navbar, NavItem } from "./styled";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar>
      {/* <Link to="/home"> */}
        <NavItem>Home</NavItem>
      {/* </Link> */}
      {/* <Link to="/cats"> */}
        <NavItem>Cats</NavItem>
      {/* </Link>
      <Link to="/breeds"> */}
        <NavItem>Breeds</NavItem>
      {/* </Link>
      <Link to="/favorites"> */}
        <NavItem>Favorites</NavItem>
      {/* </Link> */}
    </Navbar>
  );
};

export default NavBar;
