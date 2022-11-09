/* eslint-disable no-bitwise */
/* eslint-disable no-undef */
/* eslint-disable no-self-compare */
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Navbar from "./navbar/Navbar";
import { routes as AppRoutes } from "../app/routes-config";
import useCursor from "../hooks/useCursor";

function Router() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showText, setShowText] = useState(null);

  const { PublicRoutes } = AppRoutes;

  const cursorRef = useRef(null);

  const handleMouseEnter = () => {
    const onEnter = (text) => {
      setShowText(text);
      cursorRef.current?.style.setProperty("--w", "5rem");
      cursorRef.current?.style.setProperty("--h", "5rem");
      cursorRef.current?.classList.remove("mix-blend-difference");
      cursorRef.current?.classList.add("hover");
    };

    const onLeave = () => {
      setShowText(null);
      cursorRef.current?.style.setProperty("--w", "1.5rem");
      cursorRef.current?.style.setProperty("--h", "1.5rem");
      cursorRef.current?.classList.add("mix-blend-difference");
      cursorRef.current?.classList.remove("hover");
    };

    const links = document.querySelectorAll("a[href]:not(#product-card)");
    const productCards = document.querySelectorAll("#product-card");
    const buttons = document.querySelectorAll("button");

    links?.forEach((item) => {
      item.addEventListener("mouseenter", () => onEnter("Click link"));
      item.addEventListener("mouseleave", onLeave);
    });

    productCards?.forEach((item) => {
      item.addEventListener("mouseenter", () => onEnter("View Product"));
      item.addEventListener("mouseleave", onLeave);
    });

    buttons?.forEach((item) => {
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
    <BrowserRouter>
      <Navbar isScrolled={isScrolled} />
      <div
        className="custom-cursor opacity-0 mix-blend-difference"
        ref={cursorRef}
      >
        <span className="absolute-center text-center">{showText || ""}</span>
      </div>

      <Routes>
        {PublicRoutes.flatMap((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
