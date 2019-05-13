/**
 * Meu exemplo:
 * o valor do objeto nome pode ser alterado o objeto nome é que não.
 */

/* 
const a = {nome: 'teste'}
console.log(a);
a.nome = 'giovani'
console.log(a);
*/

/**
 *  * use sempre o null para zerar uma variável. Deixe ser o sistema atribuir o undefined
 */
let valor //Não inicializada = undefined.
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined

console.log(!!produto.preco)
//delete produto.preco
console.log(produto)
produto.preco = null //sem preço
console.log(produto)