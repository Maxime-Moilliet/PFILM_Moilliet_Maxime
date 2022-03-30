import Swiper from "../js/libs/swiper.min.js";

// Slider days
new Swiper(".js-swiper-actualities", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-actuality-button-next",
    prevEl: ".swiper-actuality-button-prev",
  },
});
