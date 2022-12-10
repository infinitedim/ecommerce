/* eslint-disable react/prop-types */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ShoppingBag } from "../assets/ico/ic-shopping-bag.svg";

export default function WishlistCard({
  isSkeleton = false,
  productName = "",
  productPrice = "",
  productImage = "",
  id = "",
}) {
  const location = useLocation();

  // Skeleton for product card
  if (isSkeleton) {
    return (
      <div className="min-w-[250px] p-4">
        <div className="relative flex h-[350px] max-w-[250px] animate-pulse items-center justify-center overflow-hidden bg-custom-white-600" />
        <div
          id="product-card-detail"
          className="max-w-250 flex flex-row items-center justify-between gap-4 py-6"
        >
          <div className="h-auto w-full">
            <div className="mb-2 block h-5 w-full animate-pulse bg-custom-white-600 text-base font-semibold line-clamp-1" />
            <span className="block h-3 w-[80%] animate-pulse bg-custom-white-600 text-xs line-clamp-1" />
          </div>
          <div className="btn-default h-[2.5rem] w-[2rem] animate-pulse bg-custom-white-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-w-[250px] p-4">
      <Link
        to={location.pathname === "/" ? `products/${id}` : `${id}`}
        id="product-card"
        className="group relative flex max-h-[350px] max-w-[250px] items-center justify-center overflow-hidden"
      >
        <LazyLoadImage
          src={productImage}
          alt={`Product${" "}Image`}
          className="lazyload h-[350px] w-full object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-90"
        />
      </Link>
      <div
        id="product-card-detail"
        className="max-w-250 flex flex-col items-center justify-between gap-4 py-6"
      >
        <Link
          to={location.pathname === "/" ? `products/${id}` : `${id}`}
          id="product-card"
        >
          <h3 className="text-base font-semibold text-custom-black-900 line-clamp-1">
            {productName}
          </h3>
          <span className="text-xs line-clamp-1">$ {productPrice}</span>
        </Link>
        <div className="button-container flex w-full flex-row items-center justify-between">
          <button
            className="tooltip group flex w-4/5 items-center justify-around border-2 border-custom-black-900 p-2 hover:text-custom-black-900"
            type="button"
            aria-label="cart-button"
          >
            <span className="text-custom-black-900">Add to shopping bag</span>
            <ShoppingBag className="h-6 w-6 " />
            <p className="tooltip-text-center group-hover:-bottom-[30px]">
              Add to shopping bag
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
