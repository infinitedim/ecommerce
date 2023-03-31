/* eslint-disable no-undef */

"use client";

import React, { useState, useRef, useEffect, Ref } from "react";
import { Navbar } from "@/components/molecules";
import { useCursor } from "@/hooks";
import { Provider } from "react-redux";
import { store } from "./store";
import "@/sass/root.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showText, setShowText] = useState<string | null>(null);
  const cursorRef: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const onEnter = (text) => {
      setShowText(text);
      cursorRef.current?.style.setProperty("--w", "5rem");
      cursorRef.current?.style.setProperty("--h", "5rem");
      cursorRef.current?.classList.remove("mix-blend-difference");
      cursorRef.current?.classList.add("hover");
    };

    const onLeave = (): void => {
      setShowText(null);
      cursorRef.current?.style.setProperty("--w", "1.5rem");
      cursorRef.current?.style.setProperty("--h", "1.5rem");
      cursorRef.current?.classList.add("mix-blend-difference");
      cursorRef.current?.classList.remove("hover");
    };

    const links: NodeListOf<Element> = document.querySelectorAll(
      "a[href]:not(#product-card)",
    );
    const productCards: NodeListOf<Element> =
      document.querySelectorAll("#product-card");
    const buttons: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll("button");

    links?.forEach((item: Element) => {
      item.addEventListener("mouseenter", () => {
        onEnter("Click link");
      });
      item.addEventListener("mouseleave", onLeave);
    });

    productCards?.forEach((item: Element) => {
      item.addEventListener("mouseenter", () => {
        onEnter("View Product");
      });
      item.addEventListener("mouseleave", onLeave);
    });

    buttons?.forEach((item: Element) => {
      item.addEventListener("mouseenter", () =>
        cursorRef.current?.style.setProperty("--scale", "0"),
      );
      item.addEventListener("mouseleave", () =>
        cursorRef.current?.style.setProperty("--scale", "1"),
      );
    });
  };

  useCursor({
    ref: cursorRef,
    onMouseMove: handleMouseEnter,
  });

  const handleScroll = () => {
    if (window.scrollY > 75) {
      setIsScrolled(true);
      return;
    }

    setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en" translate="yes">
      <body>
        <Provider store={store}>
          <div
            className="custom-cursor opacity-0 mix-blend-difference"
            ref={cursorRef}
          >
            <span className="absolute-center text-center">
              {showText ?? ""}
            </span>
          </div>
          <Navbar isScrolled={isScrolled} />
          {children}
        </Provider>
      </body>
    </html>
  );
}
