
import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useUserOnline from "../utils/useUserOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useUserOnline();

  const userContextData = useContext(UserContext);
  console.log(userContextData)

  const cart = useSelector((store)=>store.cart.items)

  return (
    <div className="flex justify-between items-center bg-slate-100 shadow-lg mb-2">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex p-4 m-4">
          <li className="px-4">online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            {" "}
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to = "/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to = "/cart">Cart - {cart.length} items</Link>
          </li>
          <button
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4">{userContextData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
