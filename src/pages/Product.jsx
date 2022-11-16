import { Outlet, useParams } from "react-router-dom";

export default function Product() {
  useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <h2>Detail Product</h2>
      <Outlet />
    </>
  );
}
