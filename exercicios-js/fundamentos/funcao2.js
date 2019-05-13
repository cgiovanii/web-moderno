// Função anonima
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))

// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(10, 2))

// Exemplo de arrow function mais reduzida.
const imprimir2 = a => console.log(a)

imprimir2('Muito legal !!!')