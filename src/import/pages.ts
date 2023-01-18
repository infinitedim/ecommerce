import { lazy } from "react";

export const Cart = lazy(async () => await import("@/pages/Cart"));
export const Checkout = lazy(async () => await import("@/pages/Checkout"));
export const History = lazy(async () => await import("@/pages/History"));
export const Home = lazy(async () => await import("@/pages/Home"));
export const Login = lazy(async () => await import("@/pages/Signin"));
export const NotFound = lazy(async () => await import("@/pages/NotFound"));
export const Products = lazy(async () => await import("@/pages/Products"));
export const Product = lazy(async () => await import("@/pages/Product"));
export const Dashboard = lazy(async () => await import("@/pages/Dashboard"));
export const Register = lazy(async () => await import("@/pages/Signup"));
export const Wishlist = lazy(async () => await import("@/pages/Wishlist"));
export const Settings = lazy(async () => await import("@/pages/Settings"));
