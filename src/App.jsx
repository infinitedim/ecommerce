// import React, { lazy, Suspense } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Loading from "./pages/Loading";

// const Home = lazy(() => import("./pages/Home"));
// const NotFound = lazy(() => import("./pages/NotFound"));
// const Signin = lazy(() => import("./pages/Signin"));
// const Signup = lazy(() => import("./pages/Signup"));
// const Wishlist = lazy(() => import("./pages/Wishlist"));
// const Shop = lazy(() => import("./pages/Shop"));
// const Cart = lazy(() => import("./pages/Cart"));

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />}
//           />
//           <Route
//             path="/signin"
//             element={<Signin />}
//           />
//           <Route
//             path="/signup"
//             element={<Signup />}
//           />
//           <Route
//             path="/shop"
//             element={<Shop />}
//           />
//           <Route
//             path="/cart"
//             element={<Cart />}
//           />
//           <Route
//             path="/wishlist"
//             element={<Wishlist />}
//           />
//           <Route
//             path="*"
//             element={<NotFound />}
//           />
//         </Routes>
//       </Suspense>
//     </BrowserRouter>
//   );
// }
