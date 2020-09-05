/*
2. Write a program to get a sum of even and odd numbers between 1-100.
*/

const NUMBER = 9;

function sumOfSeriesWithFirstAndLastTermKnown(
  total_terms,
  first_term,
  last_term
) {
  return parseInt((total_terms * (first_term + last_term)) / 2);
}

(function getEvenAndOddSum() {
  let totalEvenSum = undefined,
    totalOddSum = undefined,
    totalTerms = parseInt(NUMBER / 2);
  if (NUMBER % 2 == 0) {
    let lastEvenTerm = NUMBER;
    let lastOddTerm = NUMBER - 1;

    // if number of terms is even then we have equal even and odd terms
    totalEvenSum = sumOfSeriesWithFirstAndLastTermKnown(
      totalTerms,
      2,
      lastEvenTerm
    );
    totalOddSum = sumOfSeriesWithFirstAndLastTermKnown(
      totalTerms,
      1,
      lastOddTerm
    );
  } else {
    let lastEvenTerm = NUMBER - 1;
    let lastOddTerm = NUMBER;

    // if number of terms is odd then we have unequal even and odd terms one less even term is there
    totalEvenSum = sumOfSeriesWithFirstAndLastTermKnown(
      totalTerms,
      2,
      lastEvenTerm
    );
    totalOddSum = sumOfSeriesWithFirstAndLastTermKnown(
      totalTerms + 1,
      1,
      lastOddTerm
    );
  }

  console.log("EVEN SUM", totalEvenSum);
  console.log("ODD SUM", totalOddSum);
})();
