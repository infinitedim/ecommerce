import { UseSliderParameterTypes, UseSliderTypes } from "@/types";
import { useEffect, useState } from "react";

export function useSlider({
  ref,
  isLoadingData = true,
}: UseSliderParameterTypes): UseSliderTypes {
  const [sliderPositionX, setSliderPositionX] = useState<number>(0);
  const [sliderScrollWidth, setSliderScrollWidth] = useState<number>(0);
  const scrollNumber: number = window.innerWidth / 2 + 250;

  const next = (): void => {
    const slider: any = ref?.current;

    if (slider) {
      if (sliderPositionX <= sliderScrollWidth) {
        setSliderPositionX(sliderPositionX + scrollNumber);
        slider.scrollTo(sliderPositionX + scrollNumber, 0);
      }

      if (slider.scrollLeft + scrollNumber >= sliderScrollWidth) {
        setSliderPositionX(slider.scrollWidth - slider.clientWidth);
        slider.scrollTo(slider.scrollWidth, 0);
      }
    }
  };

  const prev = (): void => {
    const slider: any = ref?.current;

    if (slider) {
      if (sliderPositionX >= 0) {
        setSliderPositionX(sliderPositionX - scrollNumber);
        slider.scrollTo(sliderPositionX - scrollNumber, 0);
      }

      if (slider.scrollLeft - scrollNumber < 0) {
        setSliderPositionX(0);
        slider.scrollTo(0, 0);
      }
    }
  };

  const handleScroll = (): void => {
    const slider: any = ref?.current;

    if (slider) setSliderPositionX(slider.scrollLeft);
  };

  useEffect(() => {
    const slider: any = ref?.current;

    if (slider) {
      slider.removeEventListener("scroll", handleScroll);
      setSliderScrollWidth(slider.scrollWidth - slider.clientWidth);
    }

    return () => {
      ref?.current?.removeEventListener("scroll", handleScroll);
    };
  }, [isLoadingData]);

  return {
    nextSlide: next,
    prevSlide: prev,
    currentSlide: sliderPositionX,
    maxSlide: sliderScrollWidth,
  };
}
