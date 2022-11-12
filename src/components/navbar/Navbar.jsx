/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import { useState } from "react";
import { ReactComponent as Io } from "../../assets/ico/IO.svg";
import { ReactComponent as Miolica } from "../../assets/ico/Logo_full.svg";
import { ReactComponent as IconShoppingBag } from "../../assets/ico/ic-shopping-bag.svg";
import { ReactComponent as IconLove } from "../../assets/ico/ic-heart.svg";
import { ReactComponent as IconUser } from "../../assets/ico/ic-user.svg";
import getBreakpoint from "../../utils/get-breakpoint";
import NavbarMenu from "./NavbarMenu";
import NavbarProfileMenu from "./NavbarProfileMenu";

export default function Navbar({ isScrolled }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isProfileMenuOpened, setIsProfileMenuOpened] = useState(false);

  const renderLogo = () => {
    const logoClassName = "navbar-logo h-[auto] w-[auto] text-custom-black-900";
    if (
      getBreakpoint() === "xs" ||
      getBreakpoint() === "sm" ||
      getBreakpoint() === "md"
    ) {
      return <Io className={logoClassName} />;
    }

    return <Miolica className={logoClassName} />;
  };

  const toggleBodyScroll = (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  const handleOpenMenu = () => {
    if (isProfileMenuOpened) setIsProfileMenuOpened(false);

    if (getBreakpoint() === "xs" || getBreakpoint() === "sm") {
      setIsMenuOpened(!isMenuOpened);
      toggleBodyScroll(!isMenuOpened);
      return;
    }

    setIsMenuOpened(false);
  };

  const handleOpenProfileMenu = () => {
    if (isMenuOpened) setIsMenuOpened(false);

    setIsProfileMenuOpened(!isProfileMenuOpened);
    toggleBodyScroll(!isProfileMenuOpened);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {renderLogo()}

        <NavbarMenu
          state={isMenuOpened}
          onClose={handleOpenMenu}
        />

        <div className="flex items-center gap-5">
          {/* Icons */}
          <button
            type="button"
            className="tooltip flex items-center"
          >
            <IconShoppingBag
              className="h-[auto] w-[auto]"
              stroke="text-custom-black-900"
            />
            <p className="tooltip-text-left">Shopping bag</p>
          </button>
          <button
            type="button"
            className="tooltip flex items-center"
          >
            <IconLove
              className="h-[auto] w-[auto]"
              stroke="text-custom-white-900"
            />
            <p className="tooltip-text-center">Liked Product</p>
          </button>
          <button
            type="button"
            className="tooltip flex items-center"
            onClick={handleOpenProfileMenu}
          >
            <IconUser
              className="h-[auto] w-[auto]"
              stroke="text-custom-white-900"
            />
            <p className="tooltip-text">Profile</p>
          </button>
          {/* End Icons */}

          <button
            onClick={handleOpenMenu}
            type="button"
            className={`navbar-burger ${isMenuOpened ? "active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <NavbarProfileMenu
          isProfileMenuOpened={isProfileMenuOpened}
          onClose={handleOpenProfileMenu}
        />
      </div>
    </nav>
  );
}
