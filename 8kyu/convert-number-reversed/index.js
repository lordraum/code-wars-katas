// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example
//348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  return [...String(n)].map(Number).reverse()
}

console.log(digitize(348597))

// Repasar

// Convertir number en string
// Repasar array reverse
// Objeto primitivo number utilización en funciones
// Método trim
// Primitivos

// Otras soluciones

/* function digitize(n) {
  return String(n).split('').map(Number).reverse()
} */

/* function digitize(n) {
  return Array.from(String(n), Number).reverse();
} */