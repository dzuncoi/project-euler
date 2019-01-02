/** Largest prime factor */

// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const findlargestPrimeFactor = (number) => {
	if (number < 1) return 1;
	if (number === 1) return 1
	if (number % 2 === 0) return 2;
	let res = 3;
	while (res <= number) {
		if (number % res === 0) number = number/res;
		else res += 1;
	}
	return res
}

// findlargestPrimeFactor(45) -> 5
// findlargestPrimeFactor(33) -> 11
// findlargestPrimeFactor(13195) -> 29
// findlargestPrimeFactor(600851475143) -> 6857
