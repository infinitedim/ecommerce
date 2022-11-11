/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { NavLink } from "react-router-dom";

export default function NavbarMenu({ state, onClose }) {
  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/products",
    },
  ];

  return (
    <div
      className={`navbar-menu ${state ? "active" : ""}`}
      onClick={onClose}
    >
      <ul
        className={state ? "active" : ""}
        onClick={(e) => e.stopPropagation()}
      >
        {menuItems.flatMap((menu) => (
          <li key={menu.title}>
            <NavLink
              id="hover-link"
              onClick={onClose}
              to={menu.href}
            >
              {menu.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
