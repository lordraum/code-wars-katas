// Cada num en arr sólo puede aparecer n veces

// input => 2, [1,2,3,1,2,1,2,3] | output [1,2,3,1,2,3]

const numbers = [1, 2, 3, 1, 2, 1, 2, 3]
const numbers_2 = [20,37,20,21]
const num = 1

const deleteNth = (arr, n) => arr.reduce((acc, i) => (acc.filter(j => j === i).length < n && acc.push(i), acc), [])

console.log(deleteNth(numbers, num))
console.log(deleteNth(numbers_2, num))

// Mejor solución => Explicación en markdown

/* 

const deleteNth = (a, x) => {
  let m = {};
  return a.filter( v => (m[v] = m[v]+1||1) <= x );

}

*/
