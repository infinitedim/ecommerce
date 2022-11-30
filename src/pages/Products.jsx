import axios from "axios";
import { useRef, useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

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
      <h1 className="m-auto mt-40 mb-10 font-sans text-3xl font-bold text-custom-black-900">
        All Products
      </h1>
      <div className="content flex w-full justify-around">
        <SearchBar />
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
      </div>
      <Pagination />
    </div>
  );
}
