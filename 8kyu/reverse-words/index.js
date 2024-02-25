// Reverse words

/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

/* 
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

const reverseWords = (str) => {
  let word;
  const arr = [];
  for (x of str) {
    if (x !== " ") {
      console.log("No soy un espacio");
    } else console.log("soy un espacio");
  }
};

console.log(reverseWords("casa casa"));

// Investigar método push y métodos similares

// Probar Iterar con búcle for

// Falta:
// if no espacio => añadir letra a word
// else espacio => añadir palabra reverse() a array con reverse() y resetear word
// Devolver strin a partir de array con método reverse y join, con espacios

/* console.log(reverseWord.reverse().join("")); */
