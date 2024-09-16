import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  // States
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    // navbar
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-10 bg-parimary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* navbar logo link */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16 object-contain me-4"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Pxuriam &nbsp;
            <span className="md:block hidden">| JS Developer</span>
          </p>
        </NavLink>
        {/* list of nav links */}
        <ul className={`list-none hidden sm:flex flex-row gap-10`}>
          {navLinks.map((link) => {
            return (
              <li
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                key={link.id}
                onClick={() => setActive(link.title)}
              >
                <NavLink to={`#${link.id}`}>{link.title}</NavLink>
              </li>
            );
          })}
        </ul>
        {/* toggled menu links */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
          >
            <ul
              className={`list-none flex justify-end items-start flex-col gap-4`}
            >
              {navLinks.map((link) => {
                return (
                  <li
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    key={link.id}
                    onClick={() => {
                      setToggle(true);
                      setActive(link.title);
                    }}
                  >
                    <NavLink to={`#${link.id}`}>{link.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
