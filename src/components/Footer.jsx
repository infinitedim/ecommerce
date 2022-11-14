/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { ReactComponent as Miolica } from "../assets/ico/Logo_full.svg";
import { ReactComponent as Instagram } from "../assets/ico/ic-instagram.svg";
import { ReactComponent as Facebook } from "../assets/ico/ic-facebook.svg";
import { ReactComponent as Twitter } from "../assets/ico/ic-twitter.svg";
import { ReactComponent as Mail } from "../assets/ico/ic-mail.svg";
import { ReactComponent as ArrowUp } from "../assets/ico/ic-arrow-up.svg";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <footer className="footer bg-noise-pink p-5">
      <Fade
        cascade
        triggerOnce
        duration={1000}
      >
        <Miolica className="m-auto text-center" />
        <div className="lists-top flex h-screen w-full flex-col items-start justify-between border-b-2 border-custom-black-900 md:h-full md:flex-row md:py-5">
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Explore Miolica</h1>
            </li>
            <li>
              <Link to="/about">About Miolica</Link>
            </li>
            <li>
              <Link to="/products">Shop</Link>
            </li>
            <li>
              <Link to="/contacts">Contact us</Link>
            </li>
          </ul>
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Other resource</h1>
            </li>
            <li>
              <Link to="products/categories">Categories</Link>
            </li>
            <li>
              <h4>Discount</h4>
            </li>
            <li>
              <h4>Latest Product</h4>
            </li>
          </ul>
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Developers</h1>
            </li>
            <li>
              <a href="https://docs.miolica.com/api">API Documentation</a>
            </li>
          </ul>
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Get in touch</h1>
            </li>
            <li>
              <Link to="/services">Help Center</Link>
            </li>
          </ul>
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Guide</h1>
            </li>
            <li>
              <h4>Shopping Guide</h4>
            </li>
            <li>
              <h4>Safety Guide</h4>
            </li>
          </ul>
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Connect with us</h1>
            </li>
            <li>
              <ul className="flex w-full items-center justify-around pt-2">
                <li>
                  <a href="https://instagram.com">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <Twitter />
                  </a>
                </li>
                <li>
                  <a href="mailto:miolica@store.com">
                    <Mail />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="lists-bottom flex h-full flex-col pt-5 text-custom-black-900">
          <ul>
            <li>Privacy policy</li>
            <li>Terms & Condition</li>
            <li>Cookies Settings</li>
          </ul>
          <button
            type="button"
            className="align-center m-auto flex w-2/5 items-center justify-center border-[3px] border-custom-black-900 px-4 py-5"
            onClick={() => scrollToTop()}
          >
            <span className="text-custom-black-900">Back To Top</span>
            <p className="tooltip-text-center">Back To Top</p>
            <ArrowUp />
          </button>
        </div>
      </Fade>
    </footer>
  );
}
