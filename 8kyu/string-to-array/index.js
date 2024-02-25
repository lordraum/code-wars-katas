// Convert string to array

/* 
Write a function to split a string and convert it into an array of words.
*/

// input / output
/* 
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// solución con método .split

function stringToArray(string){

	return string.split(' ')

}

// Solución sin métodos

const str = "Jhon Doe"
let word = ''

word[word.length] = 'w'

console.log(word)

/* for (const x of str) {
    if (x !== ' ') word[word.length] = x
    else if (x === ' ') console.log('Soy un espacio')
} */

