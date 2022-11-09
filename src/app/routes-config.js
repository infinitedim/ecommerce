/* eslint-disable import/prefer-default-export */
import Signin from "../pages/Signin";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Signup from "../pages/Signup";
import Wishlist from "../pages/Wishlist";
import Shop from "../pages/Shop";
import History from "../pages/History";
import Cart from "../pages/Cart";

// Add your private routes here
const PrivateRoutes = [
  {
    path: "/checkout",
    element: Checkout,
  },
  {
    path: "/wishlist",
    element: Wishlist,
  },
  {
    path: "/history",
    element: History,
  },
  {
    path: "/cart",
    element: Cart,
  },
];

// Add your public routes here
const PublicRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: Signin,
  },
  {
    path: "/register",
    element: Signup,
  },
  {
    path: "/shop",
    element: Shop,
  },
];

export const routes = {
  PrivateRoutes,
  PublicRoutes,
};
