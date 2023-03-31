/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

"use client";

import Link from "next/link";
import { MenuItemsTypes } from "@/interfaces";

export default function NavbarMenu({ state, onClose }) {
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
    <div className={`navbar-menu ${state ? "active" : ""}`} onClick={onClose}>
      <ul
        className={state ? "active" : ""}
        onClick={(event) => event.stopPropagation()}
      >
        {menuItems.flatMap((menu: MenuItemsTypes) => (
          <li key={menu.title}>
            <Link id="hover-link" onClick={onClose} href={menu.href}>
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
