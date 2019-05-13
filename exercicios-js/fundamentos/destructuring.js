// Recurso ES 2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        rua: 'AAA, 171',
        cep: '2775-552'
    }
}

/**
 *  Forma mais simples de pegar os atributos de um objeto em uma unica linha
 *  como era antes desse operador:
 *  const nome = pessoa.nome ou pessoa['nome']
 *  const idade = pessoa.idade ou pessoa['idade']
 * 
 *  No caso de objeto é: const {vara, varb} = objeto.
 *  No caso de uma array é: const [vara, varb] = array.
 */

const {nome, idade} = pessoa

console.log(nome, idade)

// Outra maneira de extrair de um objeto atributos nomeando variaveis

const {nome: a, idade: b} = pessoa
console.log(a, b)

// Valores não atribuidos no objeto, podemos setar um padrão por exemplo o true

const {sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome, bemHumorada)

// Valores dentro de um atributo aninhado

const {endereco: {rua, cep, localidade}} = pessoa
console.log(rua, cep, localidade)