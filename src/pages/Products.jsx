import axios from "axios";
import { useRef, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
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
    <div className="products flex flex-col items-center">
      <h1 className="m-auto mt-40 font-syne text-3xl">All Products</h1>

      <div className="products-container grid w-4/5 grid-cols-4 grid-rows-4">
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
    </div>
  );
}
