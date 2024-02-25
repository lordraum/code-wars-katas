const num = 5;
function seriesSum(n) {
  let [nth, acc] = [1, 0];
  for (let i = 1; i <= n; i++) {
    acc += 1 / nth;
    nth += 3;
  }
  return acc.toFixed(2);
}

/* Estudiar mejor solución
    function seriesSum(n) {
  for (let s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }  
  return s.toFixed(2)
}
*/

// Intentar hacer con un reduce

const result = seriesSum(5);

console.log(result);
// Test 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
