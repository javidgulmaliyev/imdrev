import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

/** @type {HTMLDivElement} */
const similarSlider = document.querySelector(".similar-slider");

if (similarSlider) {
  const similarSliderGap = () => Math.min(75, 25 + 50 * ((innerWidth - 400) / 1440));

  const swiper = new Swiper(similarSlider, {
    modules: [Keyboard,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    breakpoints: {
      "768.1": {
        slidesPerView: 2,
      },
      "1024.1": {
        slidesPerView: 3,
      },
    },
    on: {
      resize: (swiper) => {
        const { params } = swiper;

        params.spaceBetween = similarSliderGap();
      }
    },
    slidesPerView: 1,
    spaceBetween: similarSliderGap(),
    rewind: true,
  });
}
