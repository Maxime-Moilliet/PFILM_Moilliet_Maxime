import { movies } from "./data/movies.js";
import { Modal } from "./modal-movie.js";
import { fakeAsyncFunction } from "./utils/fakeAsyncFunction.js";

/**
 * Select movies with day feature
 * @property {HTMLSpanElement} days
 * @property {string} lastestElementClick
 * @property {Array} movies
 * @property {HTMLDivElement} wrapperContent
 */
class SelectMovies {
  lastestElementClick;

  /**
   * @param {Array} movies
   */
  constructor(movies) {
    this.handleClick = this.handleClick.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
    this.getMoviesDay = this.getMoviesDay.bind(this);
    this.createfakeCards = this.createfakeCards.bind(this);
    this.clearSwiperSlideDOM = this.clearSwiperSlideDOM.bind(this);

    this.wrapperContent = document.querySelector(".js-wrapper-content");

    const filteredMovies = movies.filter((el) => el.day_visible === "05/08");
    filteredMovies.forEach((movie) => new CreateCardMovieDOM(movie));

    this.movies = movies;
    this.days = Array.from(document.querySelectorAll(".js-day"));

    this.days.forEach((day) => day.addEventListener("click", this.handleClick));

    const modals = Array.from(document.querySelectorAll(".js-modal-movie"));
    modals.forEach((modal) => new Modal(modal));
  }

  /**
   * Handle click on day
   * @param {event} e
   */
  async handleClick(e) {
    if (
      this.wrapperContent.getAttribute("class") === "js-wrapper-content active"
    ) {
      return;
    }
    this.days.forEach((day) =>
      day.removeEventListener("click", this.handleClick)
    );
    const container = document.querySelector(
      ".js-swiper-movies .swiper-wrapper"
    );

    const day = e.target;
    if (day.dataset.day === this.lastestElementClick) return;
    this.lastestElementClick = day.dataset.day;
    this.toggleActive(day);

    this.clearSwiperSlideDOM();
    this.createfakeCards(container);

    await fakeAsyncFunction(() => {
      this.clearSwiperSlideDOM();
      const movies = this.getMoviesDay();
      movies.forEach((movie) => new CreateCardMovieDOM(movie));
      const modals = Array.from(document.querySelectorAll(".js-modal-movie"));
      modals.forEach((modal) => new Modal(modal));

      this.days.forEach((day) =>
        day.addEventListener("click", this.handleClick)
      );
    }, 1500);
  }

  /**
   * add class active on element click
   * @param {HTMLSpanElement} day
   */
  toggleActive(day) {
    this.days.forEach((day) => day.classList.remove("active"));
    day.classList.add("active");
  }

  /**
   * Get all movies day
   */
  getMoviesDay() {
    return this.movies.filter(
      (el) => el.day_visible === this.lastestElementClick
    );
  }

  /**
   * Fake cards "loading"
   * @param {HTMLDivElement} container
   */
  createfakeCards(container) {
    for (let i = 0; i < 5; i++) {
      const fakecard = document.createElement("div");
      fakecard.setAttribute("class", "swiper-slide");
      fakecard.innerHTML = `<div class="movies__card-fake"></div>`;
      container.appendChild(fakecard);
    }
  }

  /**
   * Clear all cards in swiper movies
   */
  clearSwiperSlideDOM() {
    const cards = Array.from(
      document.querySelectorAll(".js-swiper-movies .swiper-slide")
    );
    cards.forEach((el) => {
      el.parentNode.removeChild(el);
    });
  }
}

/**
 * Create new cards movies and add this element in dom
 * @property {Object} data
 * @property {HTMLDivElement} container
 */
class CreateCardMovieDOM {
  /**
   * @param {Object} data
   */
  constructor(data) {
    this.createCardMovie = this.createCardMovie.bind(this);
    this.container = document.querySelector(
      ".js-swiper-movies .swiper-wrapper"
    );
    this.data = data;
    this.createCardMovie();
  }

  /**
   * Create and add on DOM card movie
   */
  createCardMovie() {
    const card = document.createElement("div");
    card.setAttribute("class", "swiper-slide");
    card.innerHTML = `
            <div class="movies__card js-modal-movie">
                <img data-id="${this.data.id}" data-modal="#js-modal-movie" src="${this.data.image_url}" alt="${this.data.image_alt}">
                <div>
                    <h3 data-id="${this.data.id}" data-modal="#js-modal-movie">${this.data.title}</h3>
                    <span>${this.data.time}</span>
                </div>
                <span>${this.data.date}</span>
            </div>
        `;
    this.container.appendChild(card);
  }
}

new SelectMovies(movies);
