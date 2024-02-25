/* function getDivisorsCnt(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) count++;
  }
  return count;
} */

const getDivisorsCnt = (n) =>
  Array.from({ length: n }, (_, i) => (n % (i + 1) === 0 ? 1 : 0)).reduce(
    (x, y) => x + y
  );

console.log(getDivisorsCnt(10));
