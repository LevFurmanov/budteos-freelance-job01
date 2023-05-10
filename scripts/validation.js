const form = document.querySelector(".form");
const phoneSelector = document.querySelector(".input.tel");

const errors = {
  name: document.querySelector(".input-error.name"),
  tel: document.querySelector(".input-error.phone"),
};

const inputMask = new Inputmask("+38 (999) 999-99-99");
inputMask.mask(phoneSelector);

const phonePattern = /^\+?3?8?(0\d{9})$/;

const constraints = {
  name: {
    presence: true,
    length: {
      minimum: 1,
      message: "Недостатньо символів",
    },
  },
  tel: {
    presence: true,
    format: {
      pattern: /^\+?3?8?(0\d{9})$/,
      message: "Недостатньо символів",
    },
  },
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearInputErrors();

  const formData = new FormData(form);
  const formDataPhone = formData.get("tel");
  const tel = "+38" + inputMask.unmaskedvalue(formDataPhone);

  const formObj = {
    name: formData.get("name"),
    tel,
  };

  const formErrors = validate(formObj, constraints);

  if (formErrors) {
    const validationErrorsKeys = Object.keys(formErrors);

    validationErrorsKeys.forEach((key) => {
      errors[key].dataset.show = true;
    });

    return;
  }

  submitForm(formObj);
});

const clearInputErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key].dataset.show = false;
  })
}

const showThanksModal = () => {
  $("#ex1").modal({
    escapeClose: false,
    clickClose: true,
    showClose: false,
    fadeDuration: 200,
  });
};

const submitForm = (values) => {
  showThanksModal();

  /**
   * ТУТ ЛОГИКА ОТПРАВКИ ДАННЫХ ФОРМЫ
   */
}