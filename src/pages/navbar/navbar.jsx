import { Logo } from "../../components/Logo";
import { Navbar, NavItem } from "./styled";
import { Link } from "react-router-dom";
import { logo } from "../../assets/logo.png"

const NavBar = () => {
  return (
    <Navbar>
      <Logo src="logo.png"></Logo>
      <Link to="/home">
        <NavItem>Home</NavItem>
      </Link>
      <Link to="/cats">
        <NavItem>Cats</NavItem>
      </Link>
      <Link to="/breeds">
        <NavItem>Breeds</NavItem>
      </Link>
      <Link to="/favorites">
        <NavItem>Favorites</NavItem>
      </Link>
    </Navbar>
  );
};

export default NavBar;
