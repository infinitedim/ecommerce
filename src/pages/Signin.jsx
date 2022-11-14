import { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { ReactComponent as IconFormEmail } from "../assets/ico/ic-mail.svg";
import { ReactComponent as IconFormLock } from "../assets/ico/ic-lock.svg";
import { ReactComponent as Miolica } from "../assets/ico/Logo_full.svg";
import { ReactComponent as IconShown } from "../assets/ico/ic-eye-shown.svg";

export default function Signin() {
  const [passwordShown, setpasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setpasswordShown(!passwordShown);
  };
  function funcLog() {
    console.log("hello");
  }
  return (
    <div className="bg-noise-white h-screen overflow-y-hidden">
      <Fade
        cascade
        triggerOnce
        duration={1500}
      >
        <Miolica className="m-auto mb-0 mt-10 h-[auto] w-[auto]" />
        <form
          action=""
          className="form-group inset-0 flex w-[auto] flex-col items-center justify-evenly bg-transparent p-5"
          onSubmit={(e) => {
            e.preventDefault();
            funcLog();
          }}
        >
          <h1 className="my-6 self-center text-2xl font-semibold text-custom-black-700">
            Login
          </h1>
          <label
            htmlFor="Email"
            className="mb-2 flex w-1/4 items-center justify-start border-b-2 border-custom-black-900"
          >
            <IconFormEmail className="mr-5 h-6 w-6 text-custom-black-900" />

            <input
              type="text"
              placeholder="Email Address"
              id="email"
              className="border-none bg-transparent focus:ring-0"
            />
          </label>
          <label
            htmlFor="Password"
            className="mb-2 flex w-1/4 items-center justify-start border-b-2 border-custom-black-900"
          >
            <IconFormLock className="mr-5 h-6 w-6 text-custom-black-900" />
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              id="email"
              className="border-none bg-transparent focus:ring-0"
            />
            <IconShown
              onClick={togglePasswordVisibility}
              className="h-6 w-6 text-custom-black-900"
            />
          </label>
          <p>
            <Link
              to="/Home"
              id="Forget Password"
            >
              Forgot password
            </Link>
          </p>
          <button
            type="submit"
            className="btn tooltip m-5 w-1/4 px-8"
          >
            <span>Login</span>
            <p className="tooltip-text-center">Login</p>
          </button>

          <p>
            Dont have an account?{" "}
            <Link
              to="/register"
              id="Register"
            >
              <span className="font-bold">Sign Up Here</span>
            </Link>
          </p>
          <p>
            Need help?{" "}
            <Link
              to="/Home"
              id="Help Center"
            >
              <span className="font-bold"> Help Center</span>
            </Link>
          </p>
        </form>
      </Fade>
    </div>
  );
}
