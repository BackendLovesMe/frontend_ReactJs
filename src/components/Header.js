import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import useOnlineStatus from '../Utils/useOnlineStatus'

const Header = () => {
  // ✅ Correct way to use useState
  let [btnNamereact, setBtnNamereact] = useState("Login");
   const onlineStatus=useOnlineStatus();
  // return (
  //   <div className="flex justify-between">
  //     <div className="logo-container">
  //       <img className="w-56" src={LOGO_URL} />
  //     </div>
  //     <div className="flex gap-6 items-center">
  //       <ul>
  //        <li>Status:{onlineStatus ?'🟢':'🔴'}</li> 
  //         <li><Link to ={'/'}> Home </Link></li>
  //         <li>
  //           <Link to={'/About'}> About Us </Link>
  //         </li>
  //         <li>
  //           <Link to ={'/Contact'}>Contact Us</Link>
  //           </li>
  //           <li>
  //           <Link to ={'/Grocery'}>Grocery Strore</Link>
  //           </li>
  //         <li>Cart</li>
  //         {/* ✅ Use function correctly */}
  //         <button
  //           className="login"
  //           onClick={() => {
  //             btnNamereact === "Login"
  //               ? setBtnNamereact("Logout")
  //               : setBtnNamereact("Login");
  //           }}
  //         >
  //           {btnNamereact}
  //         </button>
  //       </ul>
  //     </div>
  //   </div>
  // );
  return (
    <div className=" header flex justify-between items-center px-3 py-1 bg-gray-200 shadow-xl">
      <div className="logo-container">
        <img className="w-56 object-contain rounded-xl shadow-md hover:shadow-xl transition-all duration-300" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex gap-4 items-center">
          <li>Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery Store</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="bg-blue-500 text-white px-4 py-1 rounded"
              onClick={() => {
                setBtnNamereact((prev) => (prev === "Login" ? "Logout" : "Login"));
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
