import { memo } from "react";

/**
 *
 * @returns JSX element
 */
function Marquee() {
  return (
    <div className="border-b border-custom-black-700 bg-custom-white-900">
      <div className="app-container flex flex-auto flex-row items-center overflow-x-hidden py-4">
        <div className="marquee-root text-custom-black-700">
          <div className="marquee flex w-full items-center gap-8 py-2 px-6 font-neue-machina text-base">
            <span>Inspiration</span> / <span>Clothing</span> /{" "}
            <span>eCommerce</span> / <span>Inspiration</span> /{" "}
            <span>Clothing</span> / <span>eCommerce</span> /{" "}
            <span>Inspiration</span> / <span>Clothing</span> /{" "}
            <span>eCommerce</span> /{" "}
          </div>
          <div className="marquee flex w-full items-center gap-8 py-2 px-6 font-neue-machina text-base">
            <span>Inspiration</span> / <span>Clothing</span> /{" "}
            <span>eCommerce</span> / <span>Inspiration</span> /{" "}
            <span>Clothing</span> / <span>eCommerce</span> /{" "}
            <span>Inspiration</span> / <span>Clothing</span> /{" "}
            <span>eCommerce</span> /{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Marquee);
