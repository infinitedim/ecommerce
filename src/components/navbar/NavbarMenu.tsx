/* eslint-disable react/prop-types */
import { MenuItemsTypes } from "@/types";
import { NavLink } from "react-router-dom";

export default function NavbarMenu({ state, onClose }): JSX.Element {
  const menuItems: MenuItemsTypes[] = [
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
        onClick={(
          event: React.MouseEvent<HTMLUListElement, MouseEvent>,
        ): void => {
          event.stopPropagation();
        }}
      >
        {menuItems.flatMap(
          (menu: MenuItemsTypes): JSX.Element => (
            <li key={menu.title}>
              <NavLink
                id="hover-link"
                onClick={onClose}
                to={menu.href}
              >
                {menu.title}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
