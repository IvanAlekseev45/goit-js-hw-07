const refs = {
  form: document.querySelector(".login-form"),
};

function onSubmitForm(event) {
  event.preventDefault();
  if (
    refs.form.elements.email.value.trim() === "" ||
    refs.form.elements.password.value.trim() === ""
  ) {
    return alert("All form fields must be filled in");
  }
  const result = {
    email: refs.form.elements.email.value.trim(),
    password: refs.form.elements.password.value.trim(),
  };
  console.log(result);
  refs.form.reset();
}

const result = refs.form.addEventListener("submit", onSubmitForm);
