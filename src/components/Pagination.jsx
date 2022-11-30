import { Link } from "react-router-dom";
import { ReactComponent as LeftArrow } from "../assets/ico/ic-arrow-left.svg";
import { ReactComponent as RightArrow } from "../assets/ico/ic-arrow-right.svg";

export default function Pagination() {
  return (
    <nav
      aria-label="Page navigation example"
      className="mb-20 flex w-[25%] items-center justify-evenly"
    >
      <Link
        to="/"
        className="flex justify-between opacity-60"
      >
        <LeftArrow />
        Prev
      </Link>
      <ul className="flex w-full items-center justify-around">
        <li>
          <Link
            to="/"
            className="bg-custom-black-500  p-2 px-4 text-custom-white-900"
          >
            1
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="border-[1px] p-2 px-4"
          >
            2
          </Link>
        </li>
        <li>
          <Link
            to="/"
            aria-current="page"
            className="border-[1px] p-2 px-4"
          >
            3
          </Link>
        </li>
      </ul>
      <Link
        to="/"
        className="flex justify-between"
      >
        Next
        <RightArrow />
      </Link>
    </nav>
  );
}
