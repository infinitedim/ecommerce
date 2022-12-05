import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const [isLoading, setIsLoading] = useState(true);
  const [sampleData, setSampleData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      ref?.current?.continuousStart();

      const response = await axios("https://fakestoreapi.com/products", {
        setTimeout: 2500,
      });

      setSampleData(response.data);
      ref?.current?.complete();
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <h1>Wishlist</h1>
      <div className="products-container grid w-[70%] grid-cols-3 grid-rows-3">
        {isLoading && (
          <>
            <ProductCard isSkeleton />
            <ProductCard isSkeleton />
            <ProductCard isSkeleton />
            <ProductCard isSkeleton />
            <ProductCard isSkeleton />
            <ProductCard isSkeleton />
            <ProductCard isSkeleton />
          </>
        )}
        {/* FAFCFF */}
        {!isLoading &&
          sampleData.flatMap((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.title}
              productPrice={item.price}
              productImage={item.image}
            />
          ))}
      </div>
      <Pagination />
    </>
  );
}
