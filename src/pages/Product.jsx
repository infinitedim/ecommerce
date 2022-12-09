import { useEffect, useState } from "react";
// import axios from "axios";
import { Link, Outlet, useParams } from "react-router-dom";
import { ReactComponent as Love } from "../assets/ico/ic-heart.svg";
import { ReactComponent as Facebook } from "../assets/ico/ic-facebook.svg";
import { ReactComponent as Twitter } from "../assets/ico/ic-twitter.svg";
import { ReactComponent as Comment } from "../assets/ico/ic-comment.svg";
import { useGetProductByIdQuery } from "../features/api/apiSlice";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { data } = useGetProductByIdQuery(id);

  useEffect(() => {
    const fetchData = async () => {
      const response = await data;

      setProduct(response);
    };

    fetchData();
  }, [data]);

  return (
    <>
      <section className="body-font overflow-hidden text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mx-auto flex flex-wrap lg:w-4/5">
            <img
              alt="ecommerce"
              className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
              src={product?.image}
            />
            <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
              <h2 className="title-font text-sm tracking-widest text-gray-500">
                BRAND NAME
              </h2>
              <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
                {product?.title}
              </h1>
              <div className="mb-4 flex">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-custom-black-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-custom-black-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-custom-black-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-custom-black-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-custom-black-900"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="ml-3 text-gray-600">
                    {product?.rating?.count} Reviews
                  </span>
                </span>
                <span className="space-x-2s ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                  <Link
                    className="text-gray-500"
                    to="/"
                  >
                    <Facebook />
                  </Link>
                  <Link
                    className="text-gray-500"
                    to="/"
                  >
                    <Twitter />
                  </Link>
                  <Link
                    className="text-gray-500"
                    to="/"
                  >
                    <Comment />
                  </Link>
                </span>
              </div>
              <p className="leading-relaxed">{product?.description}</p>
              <div className="mt-6 mb-5 flex items-center border-b-2 border-gray-100 pb-5">
                <div className="ml-6 flex items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="appearance-none rounded border border-custom-black-300 py-2 pl-3 pr-10 text-base focus:border-custom-black-500 focus:outline-none focus:ring-2 focus:ring-custom-black-200">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="title-font text-2xl font-medium text-custom-black-500">
                  ${product?.price}
                </span>
                <button
                  className="btn tooltip ml-auto flex"
                  type="button"
                >
                  Button
                </button>
                <button
                  className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 p-0 text-gray-500"
                  type="button"
                >
                  <Love />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}
