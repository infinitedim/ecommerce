/* eslint-disable jsx-a11y/label-has-associated-control */
import { ReactComponent as User } from "../assets/ico/ic-user.svg";
import { ReactComponent as Email } from "../assets/ico/ic-email.svg";
import { ReactComponent as Lock } from "../assets/ico/ic-lock.svg";

export default function Signup() {
  return (
    <div className="singup">
      <h1>Signup</h1>
      <form action="">
        <label htmlFor="">
          <User className="h-[auto] w-[auto] text-custom-black-900" />
          <input
            type="text"
            placeholder="Fullname"
          />
        </label>
        <label htmlFor="">
          <Email className="h-[auto] w-[auto]" />
          <input
            type="email"
            placeholder="Email address"
          />
        </label>
        <label htmlFor="">
          <Lock />
          <input
            type="password"
            placeholder="Password"
          />
        </label>
        <label htmlFor="">
          <Lock />
          <input
            type="password"
            placeholder="Confirm password"
          />
        </label>
      </form>
    </div>
  );
}
