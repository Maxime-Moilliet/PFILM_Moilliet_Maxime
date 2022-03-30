/**
 * Add values in modal
 * @property {Array[movie]} movie
 */
export class ModalContent {
  /**
   * @param {Array[movie]} movie
   */
  constructor(movie) {
    this.setValueModal = this.setValueModal.bind(this);
    this.movie = movie[0];
    this.setValueModal();
  }

  setValueModal() {
    const title = document.querySelector(".js-modal-movie-title");
    const time = document.querySelector(".js-modal-movie-time");
    const img = document.querySelector(".js-modal-movie-img");
    const author = document.querySelector(".js-modal-movie-author");
    const desc = document.querySelector(".js-modal-movie-desc");
    const radio = document.querySelector(".js-modal-movie-radio");
    const idMovie = document.querySelector(".js-form-idMovie");
    title.innerHTML = `${this.movie.title} <span>${this.movie.date}</span>`;
    time.innerHTML = `${this.movie.time} <i class="far fa-clock"></i>`;
    img.src = this.movie.image_url;
    img.alt = this.movie.image_alt;
    author.innerHTML = this.movie.film_director;
    desc.innerHTML = this.movie.content;
    radio.innerHTML = "";
    const p = document.createElement("p");
    p.innerHTML = "Date";
    radio.appendChild(p);
    this.movie.booking_date.forEach((el, idx) => {
      const div = document.createElement("div");
      div.innerHTML = `<input type="radio" id="${el}" name="booking" value="${el}" ${
        idx === 0 && "checked"
      }><label for="${el}">${el}</label>`;
      radio.appendChild(div);
    });
    idMovie.value = this.movie.id;
  }
}
