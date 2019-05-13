/**
 *  As variaveis declaradas com VAR estão no escopo Global e de funcção
 *  As Variaveis declaradas com LET estão no escopo Global, Função e de bloco.
 * 
 */

/* var numero = 1
{
    let numero = 2
    console.log('Dentro= ', numero)
}
console.log('Fora= ', numero) */

/**
 * O let procura dentro do escopo a variavel se não existir ele
 * vai buscar no escopo mais proximo.
 * 
 * exemplo:
 */

let numero = 1
{
    let numero2 = 2
    console.log('Dentro= ', numero)
}
console.log('Fora= ', numero)