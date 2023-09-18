import { toMorse } from "./js/toMorse";
const englishBox = document.querySelector("#englishBox");
const morseBox = document.querySelector("#morseBox");
const submitButton = document.querySelector("#submitButton");
const translateDirection = document.querySelector("#translateOption");
submitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  if (translateDirection.value === "→") {
    morseBox.innerHTML = toMorse(englishBox.textContent);
  }
});
