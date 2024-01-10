import { Deque } from "..";

export const palindromeChecker = (string: string): boolean => {
  const palindrome = new Deque();

  // Split chars
  const item = string.toLocaleLowerCase().split("");

  // Add to deque
  for (let i = 0; i < item.length; i++) {
    palindrome.addBack(item[i]);
  }

  // Check if is even AND if have only one char
  const isEven = (num: number) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };

  if (palindrome.size() <= 2 || !isEven(palindrome.size())) {
    return false;
  }

  // Check if the first letter is them same as the last
  let first;
  let last;
  let isEqual = true;

  while (palindrome.size() > 1 && isEqual) {
    first = palindrome.removeFront();
    last = palindrome.removeBack();

    if (first != last) {
      isEqual = false;
    }
  }
  return isEqual;
};

console.log(palindromeChecker("abaaa"));
