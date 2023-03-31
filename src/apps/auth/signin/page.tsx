import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Mail, Miolica, Lock, EyeShown } from "@/components/atoms";

export default function Signin() {
  return (
    <div className="bg-noise-white h-screen overflow-y-hidden">
      <Fade cascade triggerOnce duration={1500}>
        <Miolica className="m-auto mb-0 mt-10 h-[auto] w-[auto]" />
        <form
          action=""
          className="form-group inset-0 flex w-[auto] flex-col items-center justify-evenly bg-transparent p-5"
        >
          <h1 className="my-6 self-center text-2xl font-semibold text-custom-black-700">
            Login
          </h1>
          <label
            htmlFor="Email"
            className="mb-2 flex w-1/4 items-center justify-start border-b-2 border-custom-black-900"
          >
            <Mail className="mr-5 h-6 w-6 text-custom-black-900" />

            <input
              type="text"
              placeholder="Email Address"
              id="email"
              className="border-none bg-transparent focus:ring-0"
            />
          </label>
          <label
            htmlFor="Password"
            className="mb-2 flex w-1/4 items-center justify-between border-b-2 border-custom-black-900"
          >
            <Lock className="mr-5 h-6 w-6 text-custom-black-900" />
            <input
              type="password"
              placeholder="Password"
              id="email"
              className="self-start border-none bg-transparent focus:ring-0"
            />
            <EyeShown className="h-6 w-6 self-end text-custom-black-900" />
          </label>
          <p>
            <Link href="/" id="Forget Password">
              Forgot password
            </Link>
          </p>
          <button
            type="submit"
            className="btn tooltip m-5 w-1/4 px-8"
            aria-label="login-button"
          >
            <span>Login</span>
            <p className="tooltip-text-center">Login</p>
          </button>

          <p>
            Do not have account?{" "}
            <Link href="/register" id="Register">
              <span className="font-bold">Sign Up Here</span>
            </Link>
          </p>
          <p>
            Need help?{" "}
            <Link href="/services" id="Help Center">
              <span className="font-bold"> Help Center</span>
            </Link>
          </p>
        </form>
      </Fade>
    </div>
  );
}
