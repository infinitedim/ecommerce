import axios from "axios";
import { useRef, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [sampleData, setSampleData] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      ref?.current?.continuousStart();

      const response = await axios(
        "https://random-data-api.com/api/restaurant/random_restaurant?size=15",
      );

      setSampleData(response.data);
      ref?.current?.complete();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="products flex flex-col items-center">
      <h1 className="m-auto mt-40 font-syne text-3xl">All Products</h1>

      <div className="products-container flex flex-col md:w-[90%] md:flex-row md:flex-wrap md:items-center md:justify-around">
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
              productName={item.name}
              productPrice={213.08}
              productImage={`https://picsum.photos/id/${Math.floor(
                Math.random() * 100,
              )}/200/300`}
            />
          ))}
      </div>
    </div>
  );
}
