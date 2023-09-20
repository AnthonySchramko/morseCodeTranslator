import { toMorse } from "./toMorse";
describe("Test cases for morse input", () => {
  it("returns the correct translation for morse code to english", () => {
    expect(toMorse("HELLO")).toBe(".... . .-.. .-.. ---");
    expect(toMorse("HELLO THERE")).toBe(".... . .-.. .-.. ---|- .... . .-. .");
  });
  it("throws an error when nothing is passed", () => {
    expect(() => {
      toMorse("");
    }).toThrow("Please provide an input");
  });
  it("throws an error when incorrect input is passed", () => {
    expect(() => {
      toMorse("Hello there!");
    }).toThrow(
      "Please provide your english phrase with alphabetic characters. This means no special characters, such as !@8'."
    );
    expect(() => {
      toMorse(".... . .-.. .-.. ---");
    }).toThrow(
      "Please provide your english phrase with alphabetic characters. This means no special characters, such as !@8'."
    );
    expect(() => {
      toMorse("they're");
    }).toThrow(
      "Please provide your english phrase with alphabetic characters. This means no special characters, such as !@8'."
    );
  });
});
