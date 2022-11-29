import { Link } from "react-router-dom";
import { ReactComponent as Search } from "../assets/ico/ic-search.svg";

export default function SearchBar() {
  return (
    <div>
      <h1 className="font-sans text-3xl font-normal text-custom-black-900">
        Search Bar
      </h1>
      <label
        htmlFor="search"
        className="flex w-full items-center justify-start border-b-2 border-custom-black-900"
      >
        <Search />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="border-none bg-transparent focus:border-0 focus:bg-white focus:outline-none focus:ring-0"
        />
      </label>
      <div className="categories mt-20">
        <h1 className="font-sans text-3xl font-bold text-custom-black-800">
          All Categories
        </h1>
        <ul className="flex h-[30vh] flex-col items-start justify-around text-custom-black-900">
          <li>All</li>
          <li>T-shirt</li>
          <li>Jacket</li>
          <li>Hoodie</li>
          <li>Hat</li>
          <li>Shoes</li>
        </ul>
      </div>
      <div className="relevance mt-10">
        <h1 className="font-sans text-3xl font-bold text-custom-black-800">
          Relevance
        </h1>
        <ul className="flex h-[25vh] flex-col items-start justify-around text-custom-black-900">
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/latest">Latest Arrivals</Link>
          </li>
          <li>
            <Link to="/low-to-high">Price: low to high</Link>
          </li>
          <li>
            <Link to="/high-to-low">Price: high to low</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
