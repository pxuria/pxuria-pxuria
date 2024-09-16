import React from "react";
import { navLinks } from "../constants";
import { NavLink } from "react-router-dom";

const NavbarList = (props) => {
  return (
    <ul className={`list-none hidden sm:flex flex-row gap-10`}>
      {navLinks.map((link) => {
        return (
          <li
            className={`${
              props.active === link.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            key={link.id}
            onClick={() => setActive(link.title)}
          >
            <NavLink to={`#${link.id}`}>{link.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarList;
