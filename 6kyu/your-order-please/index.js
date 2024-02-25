/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers. */

/* "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

const str = "is2 Thi1s T4est 3a";
//let x = /\d+/.exec("is2");

const orderA = (str) => {
  const Regex = /\d/;
  const arr = str.split(" ").sort((a, b) => {
    const x = Regex.exec(a);
    const y = Regex.exec(b);
    return x < y ? -1 : x > y ? 1 : 0;
  });
  return arr.join(" ");
};

const order = (str) =>
  str
    .split(" ")
    .sort((a, b) => /\d/.exec(a) - /\d/.exec(b))
    .join(" ");

console.log(order(str));
