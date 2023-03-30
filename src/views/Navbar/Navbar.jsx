import React from "react";
import { AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../../images/TOP.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="w-full md:w-11/12 m-0 mx-auto sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-lg shadow-white-500/50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className=" px-3 text-black font-normal rounded-full py-2"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className=" px-3 text-black font-normal rounded-full py-2"
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className="text-base px-3 text-black font-normal rounded-full py-2 "
                >
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/news"
                  className="text-base px-3 text-black font-normal rounded-full py-2"
                >
                  NEWS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="text-base px-3 text-black font-normal rounded-full py-2"
                >
                  BLOG
                </NavLink>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-base px-3 text-black font-normal rounded-full py-2"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <NavLink
                  to="/order"
                  className=" px-4 bg-rose-500 text-white font-normal rounded-full py-2"
                >
                  ORDER
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            <img className="w-28 h-10" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className=" px-3 text-black font-normal rounded-full py-2 "
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className=" px-3 text-black font-normal rounded-full py-2"
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/gallery"
                className=" px-3 text-black font-normal rounded-full py-2"
              >
                GALLERY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className=" px-3 text-black font-normal rounded-full py-2"
              >
                NEWS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="px-3 text-black font-normal rounded-full py-2"
              >
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-base px-3 text-black font-normal rounded-full py-2"
              >
                ABOUT US
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div class="vl"></div>
          <div class="vl "></div>
          <div className="">
            <a href="..">
              <FaFacebookF
                title="Follow on Facebook"
                className="h-5 w-6 mx-2 text-slate-400 hover:text-black hover:cursor-pointer"
              />
            </a>
          </div>
          <div className="">
            <IoLogoInstagram
              title="Follow on Instagram"
              className="h-6 w-6 mx-1 text-slate-400 hover:text-black hover:cursor-pointer"
            />
          </div>
          <div className="">
            <AiFillLinkedin
              title="Follow on Linkedin"
              className="h-6 w-6 mx-1 text-slate-400 hover:text-black hover:cursor-pointer"
            />
          </div>
          <div className="">
            <AiFillYoutube
              title="Follow on Youtube"
              className="h-6 w-6 mx-1 text-slate-400 hover:text-black hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
