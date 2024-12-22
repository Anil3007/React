
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useUserOnline from "../utils/useUserOnline";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useUserOnline();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to = "/grocery">Grocery</Link>
          </li>
          <button
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
