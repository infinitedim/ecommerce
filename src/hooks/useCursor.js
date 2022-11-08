import React from "react";

export default function useCursor({ ref, onMouseMove }) {
  const mouseMove = (event) => {
    const { clientX, clientY } = event;

    if (ref?.current) {
      ref.current.classList.remove("opacity-0");
      ref.current.style.setProperty("--x", `${clientX}px`);
      ref.current.style.setProperty("--y", `${clientY}px`);
    }
    // eslint-disable-next-line no-unused-expressions
    onMouseMove && onMouseMove();
  };

  React.useEffect(() => {
    if (ref?.current) window.addEventListener("mousemove", mouseMove);

    return () => {
      if (ref?.current) window.removeEventListener("mousemove", mouseMove);
    };
  }, [ref]);

  return {
    ref,
  };
}
