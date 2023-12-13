// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true if the word is a palindrome, returns false is word is not a palindrome", () => {
    const palindrome = "racecar";

    const response1 = isPalindrome(palindrome);

    expect(response1).toBe(true);
    
    const notPalindrome="angel"

    const response2 = isPalindrome(notPalindrome)

    expect(response2).toBe(false)
  });
});


it("handles uppercase and lowercase input", () => {
  const  mixedCasePalindrome = "RAceCar";

  const mixedCasePalindromeResponce = isPalindrome(mixedCasePalindrome);

  expect(mixedCasePalindromeResponce).toBe(true);
});