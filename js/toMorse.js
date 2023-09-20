export const morseCode = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};
export const toMorse = (phrase) => {
  if (phrase === "") {
    throw new Error("Please provide an input");
  }
  if (/[^A-Z\s]/.test(phrase.toUpperCase())) {
    throw new Error(
      "Please provide your english phrase with alphabetic characters. This means no special characters, such as !@8'."
    );
  }
  const seperated = phrase.split(" ");
  const translated = seperated.map((word) => {
    return word
      .toUpperCase()
      .split("")
      .map((letter) => {
        return morseCode[letter] ? morseCode[letter] : letter;
      })
      .join(" ");
  });
  return translated.join("|");
};
