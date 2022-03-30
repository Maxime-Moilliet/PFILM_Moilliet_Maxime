import { movies } from "./data/movies.js";
import { ModalContent } from "./modal-movie-content.js";
import { fakeAsyncFunction } from "./utils/fakeAsyncFunction.js";

/**
 * Modal movie
 * @property {number} animation
 * @property {string} focusableSelector
 * @property {null | HTMLElement} modal
 * @property {Array} focusables
 * @property {null | HTMLElement} previouslyFocusedElement
 * @property {HTMLDivElement} wrapperContent
 */
export class Modal {
  focusableSelector = "button, input, select";
  modal = null;
  focusables = [];
  previouslyFocusedElement = null;

  /**
   * @param {HTMLButtonElement} modal
   */
  constructor(modal) {
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.focusInModal = this.focusInModal.bind(this);
    this.fetchMovieWithId = this.fetchMovieWithId.bind(this);

    this.wrapperContent = document.querySelector(".js-wrapper-content");

    modal.addEventListener("click", this.openModal);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" || e.key === "Esc") {
        this.closeModal(e);
      }
      if (e.key === "Tab" && this.modal !== null) {
        this.focusInModal(e);
      }
    });
  }

  /**
   * Open Modal
   * @param {Event} e
   */
  async openModal(e) {
    e.preventDefault();
    if (
      this.wrapperContent.getAttribute("class") === "js-wrapper-content active"
    ) {
      return;
    }
    const success = document.querySelector(".success");
    if (document.querySelector(".success"))
      success.parentNode.removeChild(success);
    const target = e.target.dataset.modal;
    this.modal = document.querySelector(target);
    if (!this.modal) return;
    this.focusables = Array.from(
      this.modal.querySelectorAll(this.focusableSelector)
    );
    this.previouslyFocusedElement = document.querySelector(":focus");
    this.modal.style.display = null;
    this.focusables[0].focus();
    this.modal.setAttribute("aria-hidden", "false");
    this.modal.setAttribute("aria-modal", "true");
    this.wrapperContent.classList.add("active");
    this.modal.style.overflow = "scroll";
    this.modal.style.overflowX = "hidden";
    document.body.style.overflowY = "hidden";
    const id = e.target.dataset.id;
    this.modal
      .querySelector(".js-modal-close")
      .addEventListener("click", this.closeModal);
    await fakeAsyncFunction(async () => {
      const movie = await this.fetchMovieWithId(id);
      if (movie) new ModalContent(movie);
    }, 100);
    this.modal.style.display = "block";
  }

  /**
   * Close modal
   * @param {Event} e
   */
  closeModal(e) {
    if (this.modal === null) return;
    if (this.previouslyFocusedElement !== null)
      this.previouslyFocusedElement.focus();
    e.preventDefault();
    this.modal.setAttribute("aria-hidden", "true");
    this.modal.setAttribute("aria-modal", "false");
    this.modal.removeEventListener("click", this.closeModal);
    this.modal
      .querySelector(".js-modal-close")
      .removeEventListener("click", this.closeModal);
    window.setTimeout(() => {
      this.modal.style.display = "none";
      this.modal.style.overflow = "hidden";
      this.wrapperContent.classList.remove("active");
      document.body.style.overflowY = "scroll";
    }, 150);
  }

  /**
   * Tab gestions
   * @param {Event} e
   */
  focusInModal(e) {
    e.preventDefault();
    let index = this.focusables.findIndex(
      (f) => f === this.modal.querySelector(":focus")
    );
    if (e.shiftKey === true) {
      index--;
    } else {
      index++;
    }
    if (index >= this.focusables.length) {
      index = 0;
    }
    if (index < 0) {
      index = this.focusables.length - 1;
    }
    this.focusables[index].focus();
  }

  /**
   * Fetch movie with id
   * @param {number} id
   */
  async fetchMovieWithId(id) {
    const movie = movies.filter((el) => el.id == id);
    return movie;
  }
}
