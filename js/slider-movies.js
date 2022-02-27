import Swiper from '../js/libs/swiper.min.js'

// Slider days
new Swiper(".js-swiper-movies", {
    slidesPerView: "auto",
    slidesPerGroup: 1,
    spaceBetween: 32,
    loop: false,
    navigation: {
        nextEl: ".swiper-movie-button-next",
        prevEl: ".swiper-movie-button-prev",
    },
});