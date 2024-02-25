// Dado un string con nombre y apellido separado por un espacio, devolver un string con las iniciales en mayúscula separadas por un punto
// Ejemplo david gomez => D.G

const string = 'sam Harris'

function abbrevName(name) {
  return name
    .split(' ')
    .map(x => x[0].toUpperCase())
    .join('.')
}

console.log(abbrevName(string))
