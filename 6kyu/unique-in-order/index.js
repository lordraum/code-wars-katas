/* 
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

const input = 'AAACBBBBDCdA'
// const output = [3, 2, 4, 4]

// Mi solución

/* const uniqueInOrder = (iterable) => {
  const arr = Array.isArray(iterable) ? iterable : iterable.split('')
  return arr
    .reduce(((acc, i) => {
      i !== acc[acc.length - 1] && acc.push(i)
      return acc
      }
    ), [])
} */

// Mejor solución

const uniqueInOrder = (iterable) =>
    [...iterable].filter((a, i) => a !== iterable[i - 1])

uniqueInOrder(input)

// const result = [ ...input ]