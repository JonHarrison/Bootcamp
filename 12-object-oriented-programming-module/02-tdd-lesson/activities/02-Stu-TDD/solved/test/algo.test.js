const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it("should take a string as an argument and return a new reversed version of the string", () => {
      const input = "Hello";
      const output = "olleH";
      const result = new Algo().reverse(input);
      expect(result).toEqual(output);
    });
  });

  describe("isPalindrome", () => {
    it("should take a string as an argument and return the Boolean `true` if the provided string is a palindrome", () => {
      const input = "racecar";
      const result = new Algo().isPalindrome(input);
      expect(result).toEqual(true);
    });

    it("should take a string as an argument and return the Boolean `false` if the provided string is not a palindrome", () => {
      const input = "notapalindrome";
      const result = new Algo().isPalindrome(input);
      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should take a string as an argument and return a new string with the first letter of each word capitalized", () => {
      const input = "hello world!";
      const output = "Hello World!";
      const result = new Algo().capitalize(input);
      expect(result).toEqual(output);
    })
  });

});
