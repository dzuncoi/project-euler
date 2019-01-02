/** Multiples of 3 and 5 */

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const multiples35 = (lim) => Array(lim).fill(0)
  .reduce((acc, val, index) => acc + ((index % 3 === 0 || index % 5 === 0) ? index : 0), 0)

// multiples35(10) -> 23
// multiples35(1000) -> 233168
