const input = '4556364607935616'
const expectedOutput = '############5616'

const maskify = cc => cc.split('').fill('#', 0, -4).join('')

const result = maskify(input)

/* Soluciones de otros usuarios */

/* Usando slice y padStart ==> Estudiar
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}
*/

/* Usando regExp y replace ==> Estudiar
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}
*/



console.log(result, result === expectedOutput)