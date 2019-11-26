import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            AnyRecipe
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
