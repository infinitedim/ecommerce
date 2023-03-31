/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useMemo } from "react";
import { Fade } from "react-awesome-reveal";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery } from "@/services";
import { ProductTypes } from "@/interfaces";
import { Search } from "@/components/atoms";

export default function Products() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [filteredProduct, setFilteredProduct] = useState<any[]>([]);
  const [productName, setProductName] = useState<string>("");
  const { data } = useGetAllProductsQuery();

  useEffect(() => {
    if (data) {
      setProducts(data);
      setIsLoading(false);
    }
  }, [data]);

  useMemo(() => {
    if (products?.length === 0) return;

    const filteredByKeyword = products?.filter((product) =>
      product.title.toLowerCase().includes(productName),
    );

    setFilteredProduct(filteredByKeyword);
  }, [productName, products]);

  return (
    <div className="products flex flex-col items-center">
      <h1 className="m-auto mt-40 mb-10 font-sans text-3xl font-bold text-custom-black-900">
        All Products
      </h1>
      <div className="content flex w-full justify-around">
        <div>
          <h1 className="font-sans text-3xl font-normal text-custom-black-900">
            Search Product
          </h1>
          <label
            htmlFor="search"
            className="flex w-full items-center justify-start border-b-2 border-custom-black-900"
          >
            <Search />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              className="border-none bg-transparent focus:border-0 focus:bg-white focus:outline-none focus:ring-0"
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
          </label>
          <div className="categories mt-20">
            <h1 className="font-sans text-3xl font-bold text-custom-black-800">
              All Categories
            </h1>
            <ul className="flex h-[30vh] flex-col items-start justify-around text-custom-black-900">
              <li>All</li>
              <li>T-shirt</li>
              <li>Jacket</li>
              <li>Hoodie</li>
              <li>Hat</li>
              <li>Shoes</li>
            </ul>
          </div>
          <div className="relevance mt-10">
            <h1 className="font-sans text-3xl font-bold text-custom-black-800">
              Relevance
            </h1>
            <ul className="flex h-[25vh] flex-col items-start justify-around text-custom-black-900">
              <li>Trending</li>
              <li>Latest Arrivals</li>
              <li>Price: low to high</li>
              <li>Price: high to low</li>
            </ul>
          </div>
        </div>
        <div className="products-container grid w-[70%] grid-cols-3 grid-rows-3">
          {isLoading && (
            <>
              {[0, 1, 2, 3, 4, 5].map((num) => {
                return <ProductCard isSkeleton key={num} />;
              })}
            </>
          )}
          <Fade cascade triggerOnce duration={500}>
            {!isLoading && filteredProduct?.length > 0
              ? filteredProduct?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    productName={product.title}
                    productPrice={product.price}
                    productImage={product.image}
                  />
                ))
              : products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id.toString()}
                    productName={product.title}
                    productPrice={product.price}
                    productImage={product.image}
                  />
                ))}
          </Fade>
        </div>
      </div>
      <Pagination />
    </div>
  );
}
