import { Link } from "react-router-dom";

function Header(props) {
  return (
      //"Link to" changes us back to the home page
    <nav className="nav">
      <Link to="/">
        <div>People App</div>
      </Link>
    </nav>
  );
}

export default Header;