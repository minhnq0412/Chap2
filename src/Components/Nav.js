import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const listLink = [
  {
    to: "/",
    id: 1,
    title: "Home",
  },
  {
    to: "/profile",
    id: 2,
    title: "Profile",
  },
  {
    to: "/blog",
    id: 3,
    title: "Blog",
  },
  {
    to: "/contact",
    id: 4,
    title: "Contact",
  }
];

const Nav = () => {
  return (
    <>
      <div className="p-5 bg-white shadow-md flex items-center justify-center gap-x-5">
        {listLink &&
          listLink.length > 0 &&
          listLink.map((o) => (
            <NavLink
              key={o.id}
              className={({ isActive }) => (isActive ? "text-green-400" : "")}
              to={o.to}
            >
              {o?.title}
            </NavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
