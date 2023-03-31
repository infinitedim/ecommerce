import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function NotFound() {
  return (
    <div className="not-found bg-noise-white m-autos flex h-screen flex-col items-center justify-center">
      <Fade cascade triggerOnce duration={1000}>
        <Image src="/img/404.webp" alt="404 Page Not Found" quality={100} />
        <h2>Page Not Found</h2>
      </Fade>
    </div>
  );
}
