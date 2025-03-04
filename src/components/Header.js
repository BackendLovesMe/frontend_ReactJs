import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";

const Header = () => {
  // ✅ Correct way to use useState
  let [btnNamereact, setBtnNamereact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to ={'/'}> Home </Link></li>
          <li>
            <Link to={'/About'}> About Us </Link>
          </li>
          <li>
            <Link to ={'/Contact'}>Contact Us</Link>
            </li>
          <li>Cart</li>
          {/* ✅ Use function correctly */}
          <button
            className="login"
            onClick={() => {
              btnNamereact === "Login"
                ? setBtnNamereact("Logout")
                : setBtnNamereact("Login");
            }}
          >
            {btnNamereact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
