/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Input must be a non-negative integer.");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Example usage:
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`);
