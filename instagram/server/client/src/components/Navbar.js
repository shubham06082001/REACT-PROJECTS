import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link to="/profile" className="link">
            PROFILE
          </Link>
        </li>,
        <li>
          <Link to="/create" className="link">
            CREATE POST
          </Link>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link to="/signin" className="link">
            SIGNIN
          </Link>
        </li>,
        <li>
          <Link to="/signup" className="link">
            SIGNUP
          </Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/signin"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
