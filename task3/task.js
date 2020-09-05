/*
3. How to find a given number is even/odd without a conditional statement?
*/

const NUMBER = 10;

(function getEvenOrOdd() {
  // If last bit in binary is set then it is ODD else even
  // For example 2 => 10 => even, 3 => 11 => odd
  if (NUMBER & 1) {
    console.log("ODD");
  } else {
    console.log("EVEN");
  }
})();
