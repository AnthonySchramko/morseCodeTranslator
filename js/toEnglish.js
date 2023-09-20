import { morseCode } from "./toMorse.js";
const reverseMorseCode = {};

for (const [character, index] of Object.entries(morseCode)) {
  reverseMorseCode[index] = character;
}
export const toEnglish = (phrase) => {
  if (phrase === "") {
    throw new Error("Please provide an input");
  }
  if (/[^-.|\s]/.test(phrase)) {
    throw new Error(
      "Please provide your morse phrase with only dots and dashes (. or -). Please also remember to seperate the words with |."
    );
  }
  const seperated = phrase.split("|");
  const translated = seperated.map((word) => {
    return word
      .split(" ")
      .map((letter) => {
        return reverseMorseCode[letter] ? reverseMorseCode[letter] : null;
      })
      .join("");
  });
  return translated.join(" ");
};
try {
  toEnglish("....");
} catch (e) {
  alert(e);
}
