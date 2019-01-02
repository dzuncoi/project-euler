/** Largest palindrome product */

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = input => 
  String(input) === String(input).split('').reverse().join('')

const findLargestPalindromeProduct = (digitNumbers = 2) => {
  let max = -1
  const limit = Math.pow(10, digitNumbers)
  for (var i = limit - 1; i > 0; i--) {
    for (var j = limit - 1; j > 0; j--) {
      var product = i*j
      if (product > max && isPalindrome(product)) max = product
    }
  }
  return max
}

const optimizedFindLargestPalindromeProduct = (digitNumbers = 2) => {
  let max = -1
  const limit = Math.pow(10, digitNumbers)
  for (var i = limit - 1; i > 0; i--) {
    // If we found max > i*999, there is no need to loop through j (< 1000) 
    if (max > i*(limit - 1)) break
    // Duplicated i*j vs j*i, just need to check when j > i
    for (var j = limit - 1; j > i; j--) {
      var product = i*j
      if (product > max && isPalindrome(product)) max = product
    }
  }
  return max
}

const benchmark = (args) => {
  const f1 = Date.now()
  for (var i = 0; i < 100; i++) {
    findLargestPalindromeProduct(args)
  }
  console.log((Date.now() - f1) / 100)

  const f2 = Date.now()
  for (var j = 0; j < 100; j++) {
    optimizedFindLargestPalindromeProduct(args)
  }
  console.log((Date.now() - f2) / 100)
}

// optimizedFindLargestPalindromeProduct() -> 9009
// optimizedFindLargestPalindromeProduct(3) -> 906609
// optimizedFindLargestPalindromeProduct(4) -> 99000099

// (Tested on Chrome 71.0.3578.98) - Time is reduced significantly as number of number increases
// benchmark | unoptimized | optimized 
// 3         | ~7.5ms    | ~2.3ms
// 4         | ~250ms    | ~4.5ms
// 5         | ~27000ms  | ~80ms
