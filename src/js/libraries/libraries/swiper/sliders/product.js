import Swiper from "swiper";
import { Keyboard, Navigation, Thumbs, } from "swiper/modules";

/** @type {HTMLDivElement} */
const productSliderContainer = document.querySelector(".product__slider");

if (productSliderContainer) {
  /** @type {HTMLDivElement} */
  const productThumbs = productSliderContainer.querySelector(".product-thumbs");

  if (productThumbs) {
    const thumbsGap = () => Math.min(75, 15 + 60 * ((innerWidth - 400) / 1440));

    const thumbs = new Swiper(productThumbs, {
      breakpoints: {
        "768.1": {
          direction: "horizontal",
        },
      },
      on: {
        resize: (swiper) => {
          const { params } = swiper;

          params.spaceBetween = thumbsGap();
        }
      },
      direction: "vertical",
      slidesPerView: 2,
      spaceBetween: thumbsGap(),
    });

    /** @type {HTMLDivElement} */
    const productSlider = productSliderContainer.querySelector(".product-slider");

    if (productSlider) {
      const prevArrow = productSliderContainer.querySelector(".slider-arrow--prev");
      const nextArrow = productSliderContainer.querySelector(".slider-arrow--next");

      const swiper = new Swiper(productSlider, {
        modules: [Keyboard, Navigation, Thumbs,],
        keyboard: {
          enabled: true,
          pageUpDown: false,
        },
        navigation: {
          enabled: true,
          nextEl: nextArrow,
          prevEl: prevArrow,
        },
        thumbs: {
          swiper: thumbs,
        },
        spaceBetween: 20,
        rewind: true,
      });
    }
  }
}
