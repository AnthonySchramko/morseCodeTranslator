export const nullInput = new Error("Please provide an input");
export const incorrectInputEnglish = new Error(
  "Please provide your english phrase without special characters, such as !@#*. Please only use alphabetic characters"
);
export const incorrectInputMorse = new Error(
  "Please provide your morse phrase with only dots and dashes (. or -). Please also remember to seperate the words with |."
);
