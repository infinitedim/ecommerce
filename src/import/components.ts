import { lazy } from "react";

export const Navbar = lazy(
  async () => await import("@/components/navbar/Navbar"),
);
export const Footer = lazy(async () => await import("@/components/Footer"));
export const Pagination = lazy(
  async () => await import("@/components/Pagination"),
);
export const WishlistCard = lazy(
  async () => await import("@/components/WishlistCard"),
);
