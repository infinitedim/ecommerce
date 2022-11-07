import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./pages/Loading";

const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Signin = lazy(() => import("./pages/Signin"));
const Signup = lazy(() => import("./pages/Signup"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/singin"
            element={<Signin />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
