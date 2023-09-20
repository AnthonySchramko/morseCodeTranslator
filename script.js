import { toEnglish } from "./js/toEnglish.js";
import { toMorse } from "./js/toMorse.js";
const englishBox = document.querySelector("#englishBox");
const morseBox = document.querySelector("#morseBox");
const morseToEnglish = document.querySelector("#morseToEnglish");
const englishToMorse = document.querySelector("#englishToMorse");

morseToEnglish.addEventListener("click", () => {
  console.log("morsetoEnglish");
  englishBox.value = toEnglish(morseBox.value);
});
englishToMorse.addEventListener("click", () => {
  console.log("englishToMorse");
  morseBox.value = toMorse(englishBox.value);
});
