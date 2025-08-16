import {LOGO_URL} from "./utils/constants";
import { useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // console.log("Header Rendered!")

  const {loggedInUser} = useContext(UserContext); //we can pass as many context we want to make global in our app
  //u will get the data from the usercontext over in loggedInUser
  console.log(loggedInUser);

  //Subscribing to the store using a Selector
  const cartItems = useSelector((store)=> store.cart.items);

  useEffect(() => {
    console.log("useEffect Called!");
  }, [btnNameReact]);
  return (
    <div className="flex justify-between bg-green-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-35" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✔" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 ">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          {/* if i click on login i should changed to logout and vice-versa*/}
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;