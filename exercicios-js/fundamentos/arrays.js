/**
 * Arrays é uma estrutura indexada e também uma estrutura heterogênia
 * porque aceita vários tipos de dados ao mesmo tempo.
 * mas o ideal é ter arrays com tipos de dados homogêneos para deixar o código
 * mais organizado.
 */
const valores = [7.9, 8.9, 6.3, 9.2] //Forma literal

const varios = [10, false, 'nome', null, valores[3]]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)
console.log(varios)

// o .push adiciona novos dados em um array
valores.push({id: 3}, true, null, 'teste')
console.log(valores)

// .pop retorna e retira do array o valor da ultima posição.
console.log(valores.pop())
console.log(valores)

//outra maneira de eliminar um valor dentro de um array
delete valores[0]
console.log(valores);

console.log(typeof valores)
