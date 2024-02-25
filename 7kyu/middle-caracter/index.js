/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A" */

const oddWord = 'bachata'
const evenWord = 'papanata'
const testWord = 'A'

/* function getMiddle(s) {
  const half = s.length / 2
  return s.length % 2 === 0
    ? s.substring(half - 1, half + 1)
    : s[Math.floor(half)]
} */

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1)
}

console.log(getMiddle(testWord))
