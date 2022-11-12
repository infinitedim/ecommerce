import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useCursor from "./hooks/useCursor";

// Import Pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Signin"));
const Register = lazy(() => import("./pages/Signup"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/Shop"));
const History = lazy(() => import("./pages/History"));
const Shop = lazy(() => import("./pages/Shop"));

// Import Components
const Navbar = lazy(() => import("./components/navbar/Navbar"));

function App() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showText, setShowText] = useState(null);
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
    <>
      {location.pathname !== "/login" && <Navbar isScrolled={isScrolled} />}
      <div
        className="custom-cursor opacity-0 mix-blend-difference"
        ref={cursorRef}
      >
        <span className="absolute-center text-center">{showText || ""}</span>
      </div>
      <Suspense>
        <Routes>
          <Route
            index
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/login"
            element={<Login />}
          />
          <Route
            exact
            path="/register"
            element={<Register />}
          />
          <Route
            path="/products"
            element={<Shop />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/history"
            element={<History />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
