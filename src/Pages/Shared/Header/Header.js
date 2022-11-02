import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Header = () => {

    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/home'>About</Link></li>
        <li><Link to='/home'>Services</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/signin'>Signin</Link></li>
    </>

  return (
    <div className="navbar bg-base-100 h-20 mb-10 pt-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-warning">APPOINTMENT</button>
      </div>
    </div>
  );
};

export default Header;
