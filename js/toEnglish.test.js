import { toEnglish } from "./toEnglish";
describe("Test cases for morse input", () => {
  it("returns the correct translation for morse code to english", () => {
    expect(toEnglish(".... . .-.. .-.. ---")).toBe("HELLO");
    expect(toEnglish(".... . .-.. .-.. --- | - .... . .-. .")).toBe(
      "HELLO THERE"
    );
  });
  it("throws an error when nothing is passed", () => {
    expect(() => {
      toEnglish("");
    }).toThrow("Please provide an input");
  });
  it("throws an error when incorrect input is passed", () => {
    expect(() => {
      toEnglish(".... . .-.. .-.. --- / - .... . .-. .");
    }).toThrow(
      "Please provide your morse phrase with only dots and dashes (. or -). Please also remember to seperate the words with |."
    );
    expect(() => {
      toEnglish("hello there");
    }).toThrow(
      "Please provide your morse phrase with only dots and dashes (. or -). Please also remember to seperate the words with |."
    );
    expect(() => {
      toEnglish("***");
    }).toThrow(
      "Please provide your morse phrase with only dots and dashes (. or -). Please also remember to seperate the words with |."
    );
  });
});
