import Swiper from "../js/libs/swiper.min.js";
import { movies } from "./data/movies.js";
import { SelectMovies } from "./select-movies.js";
import { ContactValidation } from "./contact-validation.js";
import { BookingValidation } from "./booking-validation.js";

// Select movies
new SelectMovies(movies);

// Validations
new ContactValidation();
new BookingValidation();

// Slider days
new Swiper(".js-swiper-days", {
  slidesPerView: "auto",
  spaceBetween: 16,
});

// Slider movies
new Swiper(".js-swiper-movies", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-movie-button-next",
    prevEl: ".swiper-movie-button-prev",
  },
});

// Slider actualities
new Swiper(".js-swiper-actualities", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 32,
  navigation: {
    nextEl: ".swiper-actuality-button-next",
    prevEl: ".swiper-actuality-button-prev",
  },
});
