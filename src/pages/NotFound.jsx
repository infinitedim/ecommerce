/* eslint-disable jsx-a11y/alt-text */
import { Fade } from "react-awesome-reveal";
import Error from "../assets/img/404.png";

export default function NotFound() {
  return (
    <div className="not-found bg-noise-white m-autos flex h-screen flex-col items-center justify-center">
      <Fade
        cascade
        triggerOnce
        duration={1000}
        direction="down"
      >
        <img src={Error} />
        <h2>Page Not Found</h2>
      </Fade>
    </div>
  );
}
