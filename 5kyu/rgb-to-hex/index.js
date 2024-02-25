const rgbToHex = (str) => {
  // Extraer los valores de R, G y B utilizando una expresión regular y el método map() de JavaScript
  const [r, g, b] = str.match(/\d+/g).map((num) => parseInt(num));

  // Convertir los valores de R, G y B a sus equivalentes en hexadecimal y concatenarlos en un solo string
  return (
    "#" + [r, g, b].map((num) => num.toString(16).padStart(2, "0")).join("")
  );
};

// Ejemplo de uso
const rgb = "rgb(15, 15, 15)";
const hex = rgbToHex(rgb);
// console.log(hex);

console.log(-5 + -5 + -5);
