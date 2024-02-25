const smileys = [":-)", ";~D", ":-D", ":_D"];

const countSmileys = (arr) =>
  arr.reduce(
    (a, b) =>
      (b.includes(")") || b.includes("D")) &&
      (b.includes(":") || b.includes(";"))
        ? a + 1
        : a,
    0
  );

const result = countSmileys(smileys);

console.log(result);
