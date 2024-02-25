/* We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100" */

const x = -100;

const numToString = (num) => String(num);

console.log(numToString(x), x);
