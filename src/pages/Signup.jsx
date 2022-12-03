/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
// import axios from "axios";
import { ReactComponent as User } from "../assets/ico/ic-user.svg";
import { ReactComponent as Email } from "../assets/ico/ic-mail.svg";
import { ReactComponent as Lock } from "../assets/ico/ic-lock.svg";
import { ReactComponent as Miolica } from "../assets/ico/Logo_full.svg";

export default function Signup() {
  return (
    <div className="signup bg-noise-white h-screen overflow-y-hidden">
      <Fade
        cascade
        triggerOnce
        duration={1500}
      >
        <Miolica className="m-auto mb-0 mt-10 h-[auto] w-[auto]" />
        <form
          action=""
          className="form-group top-0 bottom-0 right-0 left-0 flex h-[85vh] w-[auto] flex-col items-center justify-evenly bg-transparent p-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="self-center text-2xl font-semibold text-custom-black-700">
            Sign up
          </h1>
          <label
            htmlFor="name"
            className="flex w-3/5 items-center justify-start border-b-2 border-custom-black-900"
          >
            <User className="mr-5 h-6 w-6 text-custom-black-900" />
            <input
              type="text"
              placeholder="Fullname"
              id="name"
              name="name"
              className="border-none bg-transparent focus:border-0 focus:outline-none focus:ring-0"
            />
          </label>
          <label
            htmlFor="email"
            className="flex w-3/5 items-center justify-start border-b-2 border-custom-black-900"
          >
            <Email className="mr-5 h-6 w-6" />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              className="border-none bg-transparent focus:border-0 focus:outline-none focus:ring-0"
            />
          </label>
          <label
            htmlFor="password"
            className="flex w-3/5 items-center justify-start border-b-2 border-custom-black-900"
          >
            <Lock className="mr-5 h-6 w-6" />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="border-none bg-transparent focus:border-0 focus:outline-none focus:ring-0"
            />
          </label>
          <label
            htmlFor="confirm-password"
            className="flex w-3/5 items-center justify-start border-b-2 border-custom-black-900"
          >
            <Lock className="mr-5 h-6 w-6" />
            <input
              type="password"
              placeholder="Confirm password"
              id="confirm-password"
              name="confirm-password"
              className="border-none bg-transparent focus:border-0 focus:outline-none focus:ring-0"
            />
          </label>
          <label
            htmlFor=""
            className="mt-5 flex w-3/5 items-center justify-start text-custom-black-700"
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="mr-5 h-4 w-4 border-custom-black-900 text-custom-black-600 focus:ring-2 focus:ring-custom-black-500"
            />
            <p>
              By Clicking the{" "}
              <span className="font-bold text-custom-black-900">“Sign Up”</span>{" "}
              button, you are creating an account, and agree to out{" "}
              <span className="font-bold text-custom-black-900">
                “Terms of Service”
              </span>{" "}
              and{" "}
              <span className="font-bold text-custom-black-900">
                “Privacy Policy
              </span>
            </p>
          </label>
          <button
            type="submit"
            className="btn tooltip m-5 px-8"
          >
            <span>Sign up</span>
            <p className="tooltip-text-center">Sign Up</p>
          </button>
          <p>
            Already have account?{" "}
            <Link
              to="/login"
              className="font-bold"
            >
              Login here
            </Link>
          </p>
          <p>
            Need help?{" "}
            <Link
              to="/services"
              className="font-bold"
            >
              Help center
            </Link>
          </p>
        </form>
      </Fade>
    </div>
  );
}
