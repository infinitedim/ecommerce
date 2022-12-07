import { ReactComponent as Error } from "../assets/img/404.webp";

export default function ProductsNotFound() {
  return (
    <div className="products-not-found">
      <img
        src={Error}
        alt="404 Products Not Found"
      />
      <h1>Products Not Found</h1>
    </div>
  );
}
