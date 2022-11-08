/* eslint-disable import/prefer-default-export */
import Signin from "../pages/Signin";
import Home from "../pages/Home";
// Add your private routes here
const PrivateRoutes = [];

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
];

export const routes = {
  PrivateRoutes,
  PublicRoutes,
};
