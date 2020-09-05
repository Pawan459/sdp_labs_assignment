/*
1. Write a program to print a series with a while loop
    0,1,1,2,3,5,8,13,21
*/

const NUMBER_OF_TERMS = 30;

(function printSeries() {
  let first_term = 0,
    second_term = 1;
  if (NUMBER_OF_TERMS == 1) {
    console.log(first_term);
    return;
  }
  if (NUMBER_OF_TERMS == 2) {
    console.log(first_term + "\n" + second_term);
    return;
  }

  // Printing first two terms
  console.log(first_term + "\n" + second_term);
  let curr_total_terms = 2;
  while (curr_total_terms < NUMBER_OF_TERMS) {
    // Adding and printing last two_terms
    let last_two_terms_sum = first_term + second_term;
    console.log(last_two_terms_sum);

    // updating the variables
    first_term = second_term;
    second_term = last_two_terms_sum;

    // updating the current total terms
    curr_total_terms += 1;
  }
})();
// We can optimize it further using fast-doubling method
