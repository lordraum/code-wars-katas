// Count by X
/* Create a function with two arguments that will return an array of the first (n) multiples of (x). */

/* Assume both the given number and the number of times to count will be positive numbers greater than 0. */

/* 
Output example=>
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
*/

const countBy = (a, b) => {
  const arr = [];
  for (let i = 1; i <= b; i++) {
    arr.push(i * a);
  }
  return arr;
};

console.log(countBy(1, 10));

// Otra solución para estudiar
/* 
const countBy = (x, n) =>
  [...Array(n)].map((_, idx) => ++idx * x);
*/

// El guión bajo puede ser utilizado como variable
