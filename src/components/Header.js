import { Link } from "react-router-dom";
import { LOGO_URL, cartUrl } from "../Utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../Utils/useOnlineStatus";
import userContext from "../Utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  // ✅ Correct way to use useState
  let [btnNamereact, setBtnNamereact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(userContext);
  // console.log("🤑", data.loggedInUser);
  const loggedInUser = data.loggedInUser;
  const cartItems = useSelector((store) => store.cart.items); // subscribing to the store using slectors

  return (
    <div className=" header flex justify-between items-center px-3 py-1 bg-gray-200 shadow-xl">
      <div className="logo-container">
        <img
          className="w-56 object-contain rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
          src={LOGO_URL}
        />
      </div>
      <div className="flex">
        <ul className="flex gap-4 items-center font-semibold">
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-yellow-600 transition-colors duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-300">
            <Link to="/About">About Us</Link>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-300">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="hover:text-yellow-600 transition-colors duration-300">
            <Link to="/Grocery">Grocery Store</Link>
          </li>
          <li className="flex items-center space-x-2 font-semibold text-gray-700 hover:text-gray-900 transition-all duration-200">
            <Link to="/Cart" className="flex items-center relative">
              <img src={cartUrl} alt="Cart" className="w-8 h-8" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

          <li>
            <button
              className="bg-yellow-600 text-white px-4 py-1 rounded font-bold"
              onClick={() => {
                setBtnNamereact((prev) =>
                  prev === `${loggedInUser}` ? "Logout" : `${loggedInUser}`
                );
              }}
            >
              {btnNamereact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
