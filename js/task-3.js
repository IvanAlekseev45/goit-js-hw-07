const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

function onInput() {
  refs.span.textContent = refs.input.value.trim();
  if (!refs.input.value.trim()) {
    refs.span.textContent = "Anonymous";
  }
}

refs.input.addEventListener("input", onInput);
