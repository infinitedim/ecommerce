import Image from "next/image";

export default function ProductsNotFound() {
  return (
    <div className="products-not-found">
      <Image src="/img/404.webp" alt="Products Not Found" quality={100} />
      <h1>Products Not Found</h1>
    </div>
  );
}
