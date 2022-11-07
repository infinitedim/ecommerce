import { LazyLoadImage } from "react-lazy-load-image-component";
import Miolica from "../assets/img/Logo_miolica.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around flex-row p-5">
      <div className="brand">
        <LazyLoadImage src={Miolica} />
      </div>
      <ul className="list-none flex justify-between flex-row">
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
}
