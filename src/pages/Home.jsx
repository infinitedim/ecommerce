/* eslint-disable import/no-cycle */
/* eslint-disable jsx-a11y/control-has-associated-label */
export default function Home() {
  return (
    <main className="main">
      <div
        id="appContainer"
        className="bg-noise-white relative z-0"
      >
        <div className="app-container relative flex max-h-[768px] min-h-screen flex-col items-center justify-center overflow-hidden md:h-screen md:min-h-[unset]">
          <h1 className="mb-4 text-4xl text-custom-black-900 md:text-5xl lg:text-7xl">
            <span className="font-syne font-semibold">Wear</span>{" "}
            <span className="font-neue-machina">Looks</span>
            ,
            <br />
            <span className="font-syne font-semibold">Not</span>{" "}
            <span className="font-neue-machina">Outfits</span>.
          </h1>

          <button
            className="btn tooltip px-8"
            type="button"
          >
            <span>Shop now</span>
            <p className="tooltip-text-center">Shop now</p>
          </button>
        </div>
      </div>

      <div className="bg-noise-black">
        <div className="app-container flex min-h-screen items-center justify-center p-6 sm:min-h-[unset] sm:py-12 md:py-20">
          <h2 className="headline max-w-[500px] text-center font-syne text-3xl font-bold text-custom-white-900 sm:text-4xl">
            No One{" "}
            <span className="font-neue-machina font-normal">
              {" "}
              person is the same
            </span>{" "}
            So why do{" "}
            <span className="font-neue-machina font-normal">clothes</span> ‍HAVE
            TO BE
          </h2>
        </div>
      </div>

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

      <div className="bg-noise-pink">
        <div className="app-container px-[0!important] md:py-8">
          <div className="flex flex-col items-center justify-start px-6 md:flex-row md:justify-between">
            <div className="my-6 mx-2 flex w-full flex-row items-center gap-6">
              <h2 className="font-syne text-4xl font-semibold text-custom-black-900">
                Latest Product
              </h2>

              <button
                className="btn whitespace-nowrap"
                type="button"
              >
                Notify me
              </button>
            </div>

            <div className="my-2 flex w-full items-center justify-center gap-6 sm:justify-end">
              <button
                className="btn-outline rounded-full px-3"
                type="button"
              />

              <button
                className="btn-outline rounded-full px-3"
                type="button"
              />
            </div>
          </div>
          {/* <div className="product-slider-root w-full">
            <div className="product-slider-container h-[470px] w-full" ref={productSlideRef}>

            </div>
          </div> */}
        </div>
      </div>

      <div className="bg-noise-black text-custom-white-900">
        <div className="app-container min-h-screen px-6 py-8 text-center md:min-h-[unset]">
          <h2 className="mx-auto max-w-[550px] font-syne text-4xl font-bold">
            all of{" "}
            <span className="font-neue-machina font-normal">our products</span>{" "}
            are available for{" "}
            <span className="font-neue-machina font-normal">men</span> and{" "}
            <span className="font-neue-machina font-normal">women</span>
          </h2>
        </div>
      </div>
    </main>
  );
}
