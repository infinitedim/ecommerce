import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/ico/ic-arrow-left.svg";
import { ReactComponent as Plus } from "../assets/ico/ic-plus.svg";
import { ReactComponent as Minus } from "../assets/ico/ic-minus.svg";
import { ReactComponent as Trash } from "../assets/ico/ic-trash.svg";

export default function Cart() {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="mx-auto mt-20 w-4/5">
      <div className="my-10 flex">
        <div className="w-3/4 bg-custom-white-900 px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="text-2xl font-semibold">Shopping Cart</h1>
            <h2 className="text-2xl font-semibold">3 Items</h2>
          </div>
          <div className="mt-10 mb-5 flex">
            <h3 className="w-2/5 text-xs font-semibold uppercase text-gray-600">
              Product Details
            </h3>
            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
              Quantity
            </h3>
            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
              Price
            </h3>
            <h3 className="w-1/5 text-center text-xs font-semibold uppercase text-gray-600">
              Total
            </h3>
          </div>

          <div className="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
            <div className="flex w-2/5">
              <div className="w-20">
                <img
                  className="h-24"
                  src=""
                  alt=""
                />
              </div>
              <div className="ml-4 flex flex-grow flex-col justify-between">
                <span className="text-md font-bold text-custom-black-900">
                  Xiaomi Mi 20000mAh
                </span>
                <span className="text-xs">Xiaomi</span>
                <Link
                  to="#"
                  className="flex items-center justify-start text-xs font-semibold text-gray-500 hover:text-red-500"
                >
                  <Trash />
                  <span>Remove</span>
                </Link>
              </div>
            </div>
            <div className="flex w-1/5 items-center justify-around">
              <Minus onClick={() => setQuantity(quantity - 1)} />
              <span>{quantity}</span>
              <Plus onClick={() => setQuantity(quantity + 1)} />
            </div>
            <span className="w-1/5 text-center text-sm font-semibold">
              $40.00
            </span>
            <span className="w-1/5 text-center text-sm font-semibold">
              $40.00
            </span>
          </div>

          <Link
            to="/products"
            className="mt-10 flex items-center justify-start text-sm font-semibold text-custom-black-900"
          >
            <ArrowLeft />
            Continue Shopping
          </Link>
        </div>

        <div
          id="summary"
          className="w-1/4 px-8 py-10"
        >
          <h1 className="border-b pb-8 text-2xl font-semibold">
            Order Summary
          </h1>
          <div className="mt-10 mb-5 flex justify-between">
            <span className="text-sm font-semibold uppercase">Items 3</span>
            <span className="text-sm font-semibold">590$</span>
          </div>
          <div>
            <label
              className="mb-3 inline-block text-sm font-medium uppercase"
              htmlFor="shipping"
            >
              Shipping
            </label>
            <select
              className="block w-full p-2 text-sm text-custom-black-900 focus:border-custom-black-900 focus:ring-custom-black-900"
              id="shipping"
              name="shipping"
            >
              <option>Standard shipping - $10.00</option>
            </select>
          </div>

          <div className="mt-8 border-t">
            <div className="flex justify-between py-6 text-sm font-semibold uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <Link to="/checkout">
              <button
                className="btn tooltip w-full"
                type="button"
              >
                Checkout
                <p className="tooltip-text-center">Checkout</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
