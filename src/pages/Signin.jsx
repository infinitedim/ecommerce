import { useRef } from "react";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { ReactComponent as IconFormEmail } from "../assets/ico/ic-email.svg";
import { ReactComponent as IconFormLock } from "../assets/ico/ico-password.svg";

export default function Signin() {
  const ref = useRef(null);

  return (
    <>
      <LoadingBar
        color="#0a0c0f"
        height={5}
        shadowStyle={{
          boxShadow: "0 0 1rem #0a0c0f",
        }}
        ref={ref}
      />

      <div
        id="appContainer"
        className="bg-noise-white"
      >
        <div>
          <div className="app-container h-screen">
            <form className="m-[auto] w-full max-w-sm">
              <div className="font-norma mb-6 flex items-center border-b-2 border-custom-black-700 py-2 font-neue-machina">
                <IconFormEmail className="h-6 w-6" />

                <input
                  id="InputUsername"
                  type="text"
                  placeholder="Email Address"
                  className="mr-9 w-full appearance-none bg-transparent py-0.5 px-2 leading-tight text-custom-black-700 focus:outline-none"
                  required
                />
              </div>

              <div className="font-norma mb-6 flex items-center border-b-2 border-custom-black-700 py-2 font-neue-machina">
                <IconFormLock className="h-6 w-6" />

                <input
                  id="InputPassword"
                  type="password"
                  placeholder="Password"
                  className="mr-9 w-full appearance-none bg-transparent py-0.5 px-2 leading-tight text-custom-black-700 focus:outline-none"
                  required
                />
              </div>
            </form>
            {/* <div className="app-container">
              <div className="bg-noise-black box-border h-12 w-60">
                <div className="flex justify-center">
                  <span className="text-custom-white-900">Login</span>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center">
              <span>Forgot Password?</span>
            </div>
            <div className="app-container flex justify-center">
              <button
                type="button"
                className="bg-noise-black h-18 box-border flex w-60 justify-center py-3 text-custom-white-700"
              >
                Forgot Password
              </button>
            </div>
            <div className="app-container flex justify-center">
              <button
                type="button"
                className="bg-noise-black h-18 my-5 box-border flex w-60 items-center justify-center py-3 text-custom-white-700"
              >
                Login
              </button>
            </div>
            <div className="flex flex-col tracking-normal">
              <div className="flex justify-center">
                Dont have an account?{" "}
                <Link
                  to="/Home"
                  id="Forget Password"
                >
                  <span className="font-bold underline">Sign up Here</span>
                </Link>
              </div>
              <div className="flex justify-center">
                Need help?{" "}
                <Link
                  to="/Home"
                  id="Forget Password"
                >
                  <span className="font-bold underline">Help Center</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="app-container flex justify-center">
          <button
            type="button"
            className="bg-noise-black h-18 box-border flex w-60 items-center justify-center py-3 text-custom-white-700"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
