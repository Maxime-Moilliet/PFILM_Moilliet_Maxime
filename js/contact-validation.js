/**
 * Validation contact form
 * @property {HTMLElementForm} form
 */
export class ContactValidation {
  constructor() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createOjectWithValue = this.createOjectWithValue.bind(this);
    this.validation = this.validation.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderMessageSuccess = this.renderMessageSuccess.bind(this);

    this.form = document.querySelector("#js-form-contact");

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
      document.querySelector("[name=name]").value = "";
      document.querySelector("[name=email]").value = "";
      document.querySelector("[name=message]").value = "";
    }
  }

  /**
   * Create object with inputs values
   * @returns {Object}
   */
  createOjectWithValue() {
    return {
      name: document.querySelector("[name=name]").value,
      email: document.querySelector("[name=email]").value,
      message: document.querySelector("[name=message]").value,
    };
  }

  /**
   * Validate values and return errors object
   * @param {Object} values
   * @returns {Object} errors
   */
  validation(values) {
    const regExpMail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let errors = {};
    if (values.message.trim() === "") {
      errors.message = "Veuillez écrire un message.";
    } else if (values.message.trim().length <= 2) {
      errors.message = "Veuillez renseigner au moins 3 caractères.";
    }
    if (values.name.trim() === "") {
      errors.name = "Veuillez renseigner votre nom.";
    } else if (values.name.trim().length <= 2) {
      errors.name = "Veuillez renseigner au moins 3 caractères.";
    }
    if (values.email.trim() === "") {
      errors.email = "Veuillez renseigner votre adresse mail.";
    } else if (!regExpMail.test(values.email)) {
      errors.email = "Veuillez renseigner une adresse mail valide.";
    }
    return errors;
  }

  /**
   * Render errors in DOM
   * @param {Oject} errors
   */
  renderErrors(errors) {
    const nameSpan = document.querySelector(".js-error-name");
    const nameInput = nameSpan.parentNode.querySelector("input");
    const emailSpan = document.querySelector(".js-error-email");
    const emailInput = emailSpan.parentNode.querySelector("input");
    const messageSpan = document.querySelector(".js-error-message");
    const messageInput = messageSpan.parentNode.querySelector("textarea");

    if (errors.name) {
      nameInput.setAttribute("class", "error");
      nameSpan.innerHTML = errors.name;
    } else {
      nameInput.removeAttribute("class");
      nameSpan.innerHTML = "";
    }
    if (errors.email) {
      emailInput.setAttribute("class", "error");
      emailSpan.innerHTML = errors.email;
    } else {
      emailInput.removeAttribute("class");
      emailSpan.innerHTML = "";
    }
    if (errors.message) {
      messageInput.setAttribute("class", "error");
      messageSpan.innerHTML = errors.message;
    } else {
      messageInput.removeAttribute("class");
      messageSpan.innerHTML = "";
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


