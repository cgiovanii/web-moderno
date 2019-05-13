/**
 *  * Com os booleanos o 0 é false e qualquer valor diferente é true.
 * 
 **/

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
// ! = inverte a lógica e passa a ser falso, !! = Verdadiro
console.log(!!isAtivo)

console.log("os verdadeiros..")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("para finalizar")
// Retorna o valor verdadeiro que é o ultimo ' ' 
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')

