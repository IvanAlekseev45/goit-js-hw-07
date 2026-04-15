const refs = {
  btn: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.span.textContent = document.body.style.backgroundColor;
}

refs.btn.addEventListener("click", onBtnClick);
