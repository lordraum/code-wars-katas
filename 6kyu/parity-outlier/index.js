const evenExample = [2, 4, 0, 100, 4, 11, 2602, 36]

const oddExample = [160, 3, 1719, 19, 11, 13, -21]

// Evaluar el primer número
// Identificar si es par o inpar
// Si es par
// Buscar si hay otro número par dentro del array
// true => Es un array de pares => buscar y devolver el único inpar
// Se es inpar ...

const findOutlier = integers => {
    const evenNumbers = []
    for (let i = 0; i <= 2; i++) {
        integers[i] % 2 === 0 && evenNumbers.push(integers[i])
    }
    return evenNumbers.length > 1 ? integers.find(odd) : integers.find(even)
}

const even = num => num % 2 === 0
const odd = num => !even(num)

const result = findOutlier([0, 1, 2])

// Mejor solución

/*
function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >=2 ? integers.find(odd) : integers.find(even);
}

function even(num){
  return (num % 2 == 0);
}

function odd(num){
  return !even(num)
}
*/

console.log(result)