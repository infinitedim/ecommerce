import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Miolica from "../assets/img/Logo_miolica.png";
import io from "../assets/img/Logo_io.png";
import bag from "../assets/ico/ic-shopping-bag.svg"
import heart from "../assets/ico/ic-heart.svg"
import user from "../assets/ico/ic-user.svg"
import { Link } from "react-router-dom";
import Home from "../pages/Home";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const updateMedia = () => setIsMobile(window.innerWidth < 640);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
  });

  return (
    <nav className="flex items-center justify-between py-5 w-full px-8">
      <div className="brand">
        {isMobile ? (
          <LazyLoadImage src={io} />
        ) : (
          <LazyLoadImage src={Miolica} />
        )}
      </div>
      <ul className="hidden w-1/5 list-none flex-row justify-around sm:flex">
        <li><Link to="/" element={<Home />}>Home</Link></li>
        <li><Link to="/shop" element={<Home />}>Shop</Link></li>
        <li><Link to="/contacts" element={<Home />}>Contact us</Link></li>
      </ul>
      <ul className="flex justify-around w-1/12">
        <li><LazyLoadImage src={bag} /></li>
        <li><LazyLoadImage src={heart} /></li>
        <li><LazyLoadImage src={user} /></li>
      </ul>
    </nav>
  );
}
