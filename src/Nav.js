import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  const navStyle = {
    textDecoration: "none",
  };
  return (
    <nav>
      <div id="sidenav" class="sidenav">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link style={navStyle} to="/dance">
          <li>Dance</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>Contact</li>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
