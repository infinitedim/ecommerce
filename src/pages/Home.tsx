/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, useState, Ref } from "react";
import { Fade } from "react-awesome-reveal";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import { Link } from "react-router-dom";
import { useSlider } from "@/hooks";
import { getBreakpoint } from "@/utils";
import ProductCard from "@/components/ProductCard";
import { useGetAllProductsQuery } from "@/services";
import {
  HeroImage1,
  HeroImage2,
  HeroImage3,
  ImageForMen,
  ImageForWomen,
  ImageForMenMobile,
  ImageForWomenMobile,
  ChevronLeft,
  ChevronRight,
} from "@/assets";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<object[]>([]);
  const ref: Ref<any> = useRef<LoadingBarRef>(null);
  const HeroImage1Ref: Ref<HTMLImageElement> = useRef<HTMLImageElement>(null);
  const HeroImage2Ref: Ref<HTMLImageElement> = useRef<HTMLImageElement>(null);
  const HeroImage3Ref: Ref<HTMLImageElement> = useRef<HTMLImageElement>(null);
  const productSlideRef: Ref<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const { nextSlide, prevSlide, maxSlide, currentSlide } = useSlider({
    ref: productSlideRef,
    isLoadingData: isLoading,
  });

  const { data } = useGetAllProductsQuery();

  const renderWomenImage = () => {
    if (getBreakpoint() === "xs" || getBreakpoint() === "sm") {
      return (
        <img
          src={ImageForWomenMobile}
          alt="Product Categories for women"
        />
      );
    }

    return (
      <img
        src={ImageForWomen}
        alt="Product Categories for women"
      />
    );
  };

  const renderMenImage = () => {
    if (getBreakpoint() === "xs" || getBreakpoint() === "sm") {
      return (
        <img
          src={ImageForMenMobile}
          alt="Product Categories for men"
        />
      );
    }

    return (
      <img
        src={ImageForMen}
        alt="Product Categories for men"
      />
    );
  };

  const handleScroll = () => {
    if (window.scrollY >= 500) return;

    HeroImage1Ref?.current?.style?.setProperty(
      "--translate-y",
      `${window.scrollY / 4}px`,
    );
    HeroImage2Ref?.current?.style?.setProperty(
      "--translate-y",
      `${window.scrollY / 3.5}px`,
    );
    HeroImage3Ref?.current?.style?.setProperty(
      "--translate-y",
      `${window.scrollY / 5}px`,
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (data) {
      setProducts(data);
      setIsLoading(false);
    }
  }, [data]);

  return (
    <>
      <LoadingBar
        color="#0a0c0f"
        height={5}
        shadowStyle={{
          boxShadow: "0 0 1rem #0a0c0f",
        }}
        ref={ref}
      />
      <div
        id="appContainer"
        className="bg-noise-white relative z-0"
      >
        <div className="app-container relative flex max-h-[768px] min-h-screen flex-col items-center justify-center overflow-hidden md:h-screen md:min-h-[unset]">
          <Fade
            cascade
            triggerOnce
            duration={1000}
            direction="up"
          >
            <h1 className="mb-4 w-full text-4xl text-custom-black-900 md:text-5xl lg:text-7xl">
              <span className="font-syne text-6xl font-semibold">Wear</span>{" "}
              <span className="font-neue-machina">Looks</span>
              ,
              <br />
              <span className="font-syne text-6xl font-semibold">Not</span>{" "}
              <span className="font-neue-machina">Outfits</span>.
            </h1>

            <Link to="/products">
              <button
                className="btn tooltip px-8"
                type="button"
              >
                <span>Shop Now</span>
                <p className="tooltip-text-center">Shop Now</p>
              </button>
            </Link>
          </Fade>

          <img
            src={HeroImage1}
            alt="Hero"
            className="img-animation-load hero-image absolute left-[5%] bottom-[5%] z-[1] w-full max-w-[100px] sm:left-[10%] sm:bottom-[10%] sm:max-w-[125px] md:left-[15%] md:max-w-[175px] lg:left-[20%]"
            ref={HeroImage1Ref}
          />
          <img
            src={HeroImage2}
            alt="Hero"
            className="img-animation-load hero-image absolute right-[-15%] top-[10%] z-[1] w-full max-w-[125px] sm:right-[5%] sm:top-[10%] sm:max-w-[150px] md:max-w-[240px] lg:right-[15%]"
            ref={HeroImage2Ref}
            style={{
              animationDelay: "1s",
            }}
          />
          <img
            src={HeroImage3}
            alt="Hero"
            className="img-animation-load hero-image absolute -left-[5%] top-[10%] z-[2] w-full max-w-[100px] sm:left-0 sm:top-[30%] sm:max-w-[125px] md:left-[5%] md:max-w-[225px] lg:left-[10%]"
            ref={HeroImage3Ref}
            style={{
              animationDelay: "1.5s",
            }}
          />
        </div>
      </div>

      <div className="bg-noise-black">
        <div className="app-container flex min-h-screen items-center justify-center p-6 sm:min-h-[unset] sm:py-12 md:py-20">
          <Fade
            triggerOnce
            duration={1000}
            direction="up"
          >
            <h2 className="headline max-w-[500px] text-center font-syne text-3xl font-bold text-custom-white-900 sm:text-4xl">
              No One{" "}
              <span className="font-neue-machina font-normal">
                {" "}
                person is the same
              </span>{" "}
              So why do{" "}
              <span className="font-neue-machina font-normal">
                clothes
              </span>{" "}
              ‍HAVE TO BE
            </h2>
          </Fade>
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
              <Fade
                triggerOnce
                duration={1000}
                direction="up"
              >
                <h2 className="font-syne text-4xl font-semibold text-custom-black-900">
                  Latest Product
                </h2>

                <button
                  className="btn whitespace-nowrap"
                  type="button"
                  aria-label="notify-button"
                >
                  Notify me
                </button>
              </Fade>
            </div>

            <div className="my-2 flex w-full items-center justify-center gap-6 sm:justify-end">
              <Fade
                triggerOnce
                duration={1000}
                direction="up"
              >
                <button
                  className="btn-outline rounded-full px-3"
                  type="button"
                  onClick={prevSlide}
                  disabled={currentSlide === 0 && true}
                  aria-label="prev-slide-button"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  className="btn-outline rounded-full px-3"
                  type="button"
                  onClick={nextSlide}
                  disabled={currentSlide >= maxSlide && true}
                  aria-label="next-slide-button"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </Fade>
            </div>
          </div>
          <div className="product-slider-root w-full">
            <div
              className="product-slider-container h-[470px] w-full"
              ref={productSlideRef}
            >
              {isLoading && (
                <>
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                  <ProductCard isSkeleton />
                </>
              )}
              {/* FAFCFF */}
              {!isLoading &&
                products?.map((item: any) => (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    productName={item.title}
                    productPrice={item.price}
                    productImage={item.image}
                  />
                ))}
            </div>
          </div>
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
          <div className="my-20 flex flex-col items-center justify-around md:flex-row">
            <Fade
              triggerOnce
              duration={1000}
            >
              <div className="women">
                {renderWomenImage()}
                <h1 className="mt-3 font-sans text-xl font-light">Women</h1>
              </div>
              <div className="men">
                {renderMenImage()}
                <h1 className="mt-3 font-sans text-xl font-light">Men</h1>
              </div>
            </Fade>
          </div>
          <button
            type="submit"
            className="mt-10 mb-10 bg-custom-white-900 px-5 py-3 text-custom-black-900"
            aria-label="all-products-button"
          >
            <Link to="/products">See all products</Link>
          </button>
        </div>
      </div>
    </>
  );
}
