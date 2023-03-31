/* eslint-disable react/prop-types */
import { useState } from "react";
import Link from "next/link";
import { getBreakpoint } from "@/utils";
import { Heart, ShopBag, Miolica, IO, User } from "@/components/atoms";
import NavbarMenu from "./NavbarMenu";

export default function Navbar({ isScrolled }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const renderLogo = () => {
    const logoClassName = "navbar-logo h-[auto] w-[auto] text-custom-black-900";
    if (
      getBreakpoint() === "xs" ||
      getBreakpoint() === "sm" ||
      getBreakpoint() === "md"
    ) {
      return <IO className={logoClassName} />;
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
    if (getBreakpoint() === "xs" || getBreakpoint() === "sm") {
      setIsMenuOpened(!isMenuOpened);
      toggleBodyScroll(!isMenuOpened);
      return;
    }

    setIsMenuOpened(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {renderLogo()}

        <NavbarMenu state={isMenuOpened} onClose={handleOpenMenu} />

        <div className="flex items-center gap-5">
          {/* Icons */}
          <button
            aria-label="cart"
            className="tooltip flex items-center"
            type="button"
          >
            <Link href="/cart" className="cart">
              <ShopBag
                className="h-[auto] w-[auto]"
                stroke="text-custom-white-900"
              />
              <p className="tooltip-text-left">Shopping bag</p>
            </Link>
          </button>
          <button
            type="button"
            className="tooltip flex items-center"
            aria-label="wishlist"
          >
            <Link href="/wishlist" className="wishlist">
              <Heart
                className="h-[auto] w-[auto]"
                stroke="text-custom-white-900"
              />
              <p className="tooltip-text-center">Liked Product</p>
            </Link>
          </button>
          <button
            type="button"
            aria-label="user"
            className="tooltip flex items-center"
          >
            <User
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
      </div>
    </nav>
  );
}
