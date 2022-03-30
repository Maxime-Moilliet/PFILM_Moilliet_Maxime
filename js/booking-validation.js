/**
 * Validation contact form
 * @property {HTMLElementForm} form
 */
class BookingValidation {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createOjectWithValue = this.createOjectWithValue.bind(this);
    this.validation = this.validation.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderMessageSuccess = this.renderMessageSuccess.bind(this);

    this.form = document.querySelector("#js-form-booking");

    if (this.form) {
      this.form.addEventListener("submit", this.handleSubmit);
    }
  }

  /**
   * Handle submit form
   * @param {event} e
   */
  handleSubmit(e) {
    e.preventDefault();
    const values = this.createOjectWithValue();
    const errors = this.validation(values);
    this.renderErrors(errors);
    if (Object.keys(errors).length === 0) {
      this.renderMessageSuccess();
      console.log(values);
      document.querySelector("[name=emailBooking]").value = "";
      document.querySelector("[name=nb_places]").value = "1";
      document.querySelector("[name=booking]:checked").value = "";
      document.querySelector("[name=idMovie]").value = "";
    }
  }

  /**
   * Create object with inputs values
   * @returns {Object}
   */
  createOjectWithValue() {
    return {
      email: document.querySelector("[name=emailBooking]").value,
      nb_places: document.querySelector("[name=nb_places]").value,
      booking: document.querySelector("[name=booking]:checked").value,
      id_movie: document.querySelector("[name=idMovie]").value,
    };
  }

  /**
   * Validate values and return errors object
   * @param {Object} values
   * @returns {Object} errors
   */
  validation(values) {
    const regExpNbPlaces = /^[1-9]{1}$/;
    const regExpMail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = {};
    if (values.email.trim() === "") {
      errors.email = "Veuillez renseigner votre adresse mail.";
    } else if (!regExpMail.test(values.email)) {
      errors.email = "Veuillez renseigner une adresse mail valide.";
    }
    if (!regExpNbPlaces.test(values.nb_places)) {
      errors.nb_places = "Veuillez saisir un nombre compris entre 1 et 9.";
    }
    if (!values.id_movie) {
      console.log("No id movie");
    }
    return errors;
  }

  /**
   * Render errors in DOM
   * @param {Oject} errors
   */
  renderErrors(errors) {
    const emailSpan = document.querySelector(".js-error-emailBooking");
    const emailInput = emailSpan.parentNode.querySelector("input");
    const nbPlacesSpan = document.querySelector(".js-error-nb_places");
    const nbPlacesInput = nbPlacesSpan.parentNode.querySelector("input");

    if (errors.email) {
      emailInput.setAttribute("class", "error");
      emailSpan.innerHTML = errors.email;
    } else {
      emailInput.removeAttribute("class");
      emailSpan.innerHTML = "";
    }
    if (errors.nb_places) {
      nbPlacesInput.setAttribute("class", "error");
      nbPlacesSpan.innerHTML = errors.nb_places;
    } else {
      nbPlacesInput.removeAttribute("class");
      nbPlacesSpan.innerHTML = "";
    }
  }

  /**
   * Render message success if form is submitting and no errors
   */
  renderMessageSuccess() {
    if (document.querySelector(".success")) return;
    const cardSuccess = document.createElement("div");
    cardSuccess.setAttribute("class", "success");
    cardSuccess.innerHTML = "<span>Le formulaire à bien été envoyé.</span>";
    this.form.prepend(cardSuccess);
  }
}

new BookingValidation();
