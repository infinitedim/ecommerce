import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  Miolica,
  Twitter,
} from "@/components/atoms";

export default function Footer() {
  // eslint-disable-next-line no-unused-vars
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = (): void => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <footer className="footer bg-noise-pink p-5">
      <Fade cascade triggerOnce duration={1000}>
        <Miolica className="m-auto text-center" />
        <div className="lists-top flex h-screen w-full flex-col items-start justify-between border-b-2 border-custom-black-900 md:h-full md:flex-row md:py-5">
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Explore Miolica</h1>
            </li>
            <li>
              <Link href="/about">About Miolica</Link>
            </li>
            <li>
              <Link href="/products">Shop</Link>
            </li>
            <li>
              <Link href="/contacts">Contact us</Link>
            </li>
          </ul>
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Other resource</h1>
            </li>
            <li>
              <Link href="products/categories">Categories</Link>
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
              <Link href="https://docs.miolica.com/api">API Documentation</Link>
            </li>
          </ul>
          <ul className="pb-3">
            <li>
              <h1 className="font-bold">Get in touch</h1>
            </li>
            <li>
              <Link href="/services">Help Center</Link>
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
                  <Link href="https://instagram.com">
                    <Instagram />
                  </Link>
                </li>
                <li>
                  <Link href="https://facebook.com">
                    <Facebook />
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com">
                    <Twitter />
                  </Link>
                </li>
                <li>
                  <Link href="mailto:miolica@store.com">
                    <Mail />
                  </Link>
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
            onClick={() => {
              scrollToTop();
            }}
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
