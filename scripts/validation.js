const showInputError = (formEl, inputEl, errorMsg) => {
    const errorMsgID = inputEl.id + "-error";
    const errorMsgEl = document.querySelector("#" + errorMsgID)
    errorMsgEl.textContent = errorMsg
    
    // inputElement.classList.add("form__input_type_error");
    // errorElement.textContent = errorMessage;
    // errorElement.classList.add("form__input-error_active");
  };
  
//   const hideInputError = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//     inputElement.classList.remove("form__input_type_error");
//     errorElement.classList.remove("form__input-error_active");
//     errorElement.textContent = "";
//   };

const checkInputValidity = (formEl, inputEl) => {
    if (!inputEl.validity.valid) {
      showInputError(formEl, inputEl, inputEl.validationMessage);
    // } else {
    //   hideInputError(formEl, inputEl);
    }
  };

const setEventListeners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
    const buttonElement = formEl.querySelector(".modal__submit-btn");
  
    // toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formEl, inputElement);
        // toggleButtonState(inputList, buttonElement);
      });
    });
};

const enableValiadation = () => {
const formList = document.querySelectorAll(".modal__form");
formList.forEach((formEl) => {
    setEventListeners(formEl);
});
};
enableValiadation()