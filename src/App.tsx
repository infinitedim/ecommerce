import React, { useState, useRef, useEffect, lazy, Suspense, Ref } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useCursor } from "@/hooks";
import Loading from "@/pages/Loading";
import {
  Navbar,
  History,
  Home,
  Login,
  Dashboard,
  Register,
  Products,
  Product,
  Cart,
  Wishlist,
  Checkout,
  Settings,
  NotFound,
  Footer,
} from "./import";

export default function App(): JSX.Element {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [showText, setShowText] = useState<string | null>(null);
  const cursorRef: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (): void => {
    const onEnter = (text: any): void => {
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

    links?.forEach((item: Element): void => {
      item.addEventListener("mouseenter", () => {
        onEnter("Click link");
      });
      item.addEventListener("mouseleave", onLeave);
    });

    productCards?.forEach((item: Element): void => {
      item.addEventListener("mouseenter", () => {
        onEnter("View Product");
      });
      item.addEventListener("mouseleave", onLeave);
    });

    buttons?.forEach((item: Element): void => {
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

  const handleScroll = (): void => {
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
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/loading" && <Navbar isScrolled={isScrolled} />}
      <div
        className="custom-cursor opacity-0 mix-blend-difference"
        ref={cursorRef}
      >
        <span className="absolute-center text-center">{showText || ""}</span>
      </div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route path="/users">
            <Route
              path=":username"
              element={<Dashboard />}
            />
          </Route>
          <Route
            path="/register"
            element={<Register />}
          />
          <Route path="products">
            <Route
              index
              element={<Products />}
            />
            <Route
              path=":id"
              element={<Product />}
            />
          </Route>
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
            path="/settings"
            element={<Settings />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/loading" && <Footer />}
    </>
  );
}
