/* 
Two to One
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
const a = 'xyaabbbccccdefww'
const b = 'xxxxyyyyabklmopq'

/* function longest(s1, s2) {
  return Array.from(new Set([...s1.split(''), ...s2.split('')].sort())).join('')
} */

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

console.log(longest(a, b))
