import React from "react";
import { Link } from "react-router-dom";
import error from "./images/404.png";
const NotFound = () => {
  return (
    <Link to="/recipe-finder">
      {" "}
      <img src={error} alt="page not found" className="error responsive-img" />
    </Link>
  );
};

export default NotFound;
