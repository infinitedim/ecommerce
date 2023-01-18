import { NavLink } from "react-router-dom";

interface menuItemsTypes {
  title: string;
  href: string;
}

export default function NavbarMenu({
  state,
  onClose,
}: {
  state: any;
  onClose: any;
}): JSX.Element {
  const menuItems: menuItemsTypes[] = [
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
          (menu: menuItemsTypes): JSX.Element => (
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
