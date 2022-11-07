import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Miolica from "../assets/img/Logo_miolica.png";
import io from "../assets/img/Logo_io.png";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  const updateMedia = () => setIsMobile(window.innerWidth < 640);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
  });

  return (
    <nav className="flex flex-row items-center justify-between p-5">
      <div className="brand">
        {isMobile ? (
          <LazyLoadImage src={io} />
        ) : (
          <LazyLoadImage src={Miolica} />
        )}
      </div>
      <ul className="nav-lists hidden w-1/3 list-none flex-row justify-between sm:flex">
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
}
