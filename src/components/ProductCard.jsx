/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as IconLove } from "../assets/ico/ic-heart.svg";

export default function ProductCard({
  isSkeleton = false,
  productName = "",
  productPrice = "",
  productImage = "",
}) {
  const location = useLocation();

  const renderLinkImage = () => {
    return location.pathname === "/" ? (
      <Link
        to={`products/${productName}`}
        id="product-card"
        className="group relative flex max-h-[350px] max-w-[250px] items-center justify-center overflow-hidden"
      >
        <LazyLoadImage
          src={productImage}
          alt={`Product${" "}Image`}
          className="lazyload h-[350px] w-full object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-90"
        />
      </Link>
    ) : (
      <Link
        to={`${productName}`}
        id="product-card"
        className="group relative flex max-h-[350px] max-w-[250px] items-center justify-center overflow-hidden"
      >
        <LazyLoadImage
          src={productImage}
          alt={`Product${" "}Image`}
          className="lazyload h-[350px] w-full object-cover transition-all duration-200 group-hover:scale-105 group-hover:brightness-90"
        />
      </Link>
    );
  };

  const renderLinkText = () => {
    return location.pathname === "/" ? (
      <Link
        to={`products/${productName}`}
        id="product-card"
      >
        <h3 className="text-base font-semibold text-custom-black-900 line-clamp-1">
          {productName}
        </h3>
        <span className="text-xs line-clamp-1">$ {productPrice}</span>
      </Link>
    ) : (
      <Link
        to={`${productName}`}
        id="product-card"
      >
        <h3 className="text-base font-semibold text-custom-black-900 line-clamp-1">
          {productName}
        </h3>
        <span className="text-xs line-clamp-1">$ {productPrice}</span>
      </Link>
    );
  };

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
      {renderLinkImage()}
      <div
        id="product-card-detail"
        className="max-w-250 flex flex-row items-center justify-between gap-4 py-6"
      >
        {renderLinkText()}
        <button
          className="btn-default tooltip group border-0 hover:text-custom-black-900"
          type="button"
        >
          <IconLove className="h-6 w-6 " />

          <p className="tooltip-text-center group-hover:-bottom-[30px]">
            Like this product
          </p>
        </button>
      </div>
    </div>
  );
}
