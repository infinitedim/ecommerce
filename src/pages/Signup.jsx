/* eslint-disable jsx-a11y/label-has-associated-control */
import { Fade } from "react-awesome-reveal";
import { ReactComponent as User } from "../assets/ico/ic-user.svg";
import { ReactComponent as Email } from "../assets/ico/ic-email.svg";
import { ReactComponent as Lock } from "../assets/ico/ico-password.svg";
import { ReactComponent as Miolica } from "../assets/ico/Logo_full.svg";

export default function Signup() {
  return (
    <div className="signup bg-noise-white h-screen overflow-hidden">
      <Fade
        cascade
        triggerOnce
        duration={1000}
        direction="down"
      >
        <Miolica className="m-auto mb-0 mt-10 h-[auto] w-[auto]" />
        <form className="form-group top-0 bottom-0 right-0 left-0 flex h-[60vh] w-[auto] flex-col items-center justify-evenly bg-transparent p-5">
          <h1 className="self-center text-2xl text-custom-black-700">
            Sign up
          </h1>
          <label
            htmlFor="name"
            className="flex w-3/5 justify-start border-b-2 border-custom-black-900"
          >
            <User className="mr-5 h-6 w-6 text-custom-black-900" />
            <input
              type="text"
              placeholder="Fullname"
              id="name"
              name="name"
              className="border-none bg-transparent focus:outline-none"
            />
          </label>
          <label
            htmlFor="email"
            className="flex w-3/5 justify-start border-b-2 border-custom-black-900"
          >
            <Email className="mr-5 h-6 w-6" />
            <input
              type="email"
              placeholder="Email address"
              name="email"
              id="email"
              className="border-none bg-transparent focus:outline-none"
            />
          </label>
          <label
            htmlFor="password"
            className="flex w-3/5 justify-start border-b-2 border-custom-black-900"
          >
            <Lock className="mr-5 h-6 w-6" />
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className="border-none bg-transparent focus:outline-none"
            />
          </label>
          <label
            htmlFor="confirm-password"
            className="flex w-3/5 justify-start border-b-2 border-custom-black-900"
          >
            <Lock className="mr-5 h-6 w-6" />
            <input
              type="password"
              placeholder="Confirm password"
              id="confirm-password"
              name="confirm-password"
              className="border-none bg-transparent focus:outline-none"
            />
          </label>
          <label
            htmlFor=""
            className="flex w-3/5 items-center justify-start text-custom-black-700"
          >
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="h-5 w-5 border-none"
            />
            <p>
              By Clicking the{" "}
              <span className="text-custom-black-900">“Sign Up”</span> button,
              you are creating an account, and agree to out{" "}
              <span className="text-custom-black-900">“Terms of Service”</span>{" "}
              and <span className="text-custom-black-900">“Privacy Policy</span>
            </p>
          </label>
        </form>
      </Fade>
    </div>
  );
}
