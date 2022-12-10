import { Fade } from "react-awesome-reveal";
import Error from "../assets/img/404.webp";

export default function NotFound() {
  return (
    <div className="not-found bg-noise-white m-autos flex h-screen flex-col items-center justify-center">
      <Fade
        cascade
        triggerOnce
        duration={1000}
      >
        <img
          src={Error}
          alt="404 Page Not Found"
        />
        <h2>Page Not Found</h2>
      </Fade>
    </div>
  );
}
