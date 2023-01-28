/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Pagination, WishlistCard } from "@/import";
import { Search } from "@/assets";
import { useSortAllProductsQuery } from "@/services";

export default function Products(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [wishlists, setWishlists] = useState<object[]>([]);
  const [filteredProduct, setFilteredProduct] = useState<object[]>([]);
  const [wishlistName, setWishlistName] = useState<string>("");
  const { data } = useSortAllProductsQuery();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = data;

      setWishlists(response);
      setIsLoading(false);
    };

    void fetchData();
  }, [data]);

  useEffect(() => {
    if (wishlists?.length === 0) return;

    const filteredByKeyword = wishlists?.filter((wishlist) =>
      wishlist.title.toLowerCase().includes(wishlistName),
    );

    setFilteredProduct(filteredByKeyword);
  }, [wishlistName]);

  return (
    <div className="products flex flex-col items-center">
      <h1 className="m-auto mt-40 mb-10 font-sans text-3xl font-bold text-custom-black-900">
        Wishlist
      </h1>
      <div className="content flex w-full justify-around">
        <div>
          <h1 className="font-sans text-3xl font-normal text-custom-black-900">
            Search Wishlist Prouduct
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
              value={wishlistName}
              onChange={(e) => {
                setWishlistName(e.target.value);
              }}
            />
          </label>
          <div className="categories mt-20">
            <h1 className="font-sans text-3xl font-bold text-custom-black-800">
              Filter Categories
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
        </div>
        <div className="products-container grid w-[70%] grid-cols-3 grid-rows-3">
          {isLoading && (
            <>
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
              <WishlistCard isSkeleton />
            </>
          )}
          <Fade
            cascade
            triggerOnce
            duration={500}
          >
            {!isLoading && filteredProduct?.length > 0
              ? filteredProduct?.map((product: any) => (
                  <WishlistCard
                    key={product.id}
                    id={product.id}
                    productName={product.title}
                    productPrice={product.price}
                    productImage={product.image}
                  />
                ))
              : wishlists?.map((product: any) => (
                  <WishlistCard
                    key={product.id}
                    id={product.id}
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
