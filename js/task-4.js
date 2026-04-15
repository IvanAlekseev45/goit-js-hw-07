const refs = {
  form: document.querySelector(".login-form"),
};

function onSubmitForm(event) {
  event.preventDefault();
  if (refs.form.elements.email.value === "" || refs.form.elements.password.value === "") {
    return alert("All form fields must be filled in");
  }
  const result = {
    email: refs.form.elements.email.value,
    password: refs.form.elements.password.value,
  };
  console.log(result);
  refs.form.reset();
}

const result = refs.form.addEventListener("submit", onSubmitForm);
