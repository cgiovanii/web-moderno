const nome = 'Rebeca'
const concatenacao = 'Ola ' + nome + '!'

// * Template string usa a crase `` e o ${nome} faz a interpolação da variavel
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei.. ${up('cuidado')}!`)