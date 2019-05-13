// Par Nome/Valor
const saudacao = 'Epá' // Contexto léxico 1

// como a const saudacao esta dentro de uma funcção não entrar en conflito com a que está fora.
function exec() {
    const saudacao = 'Falaaa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    morada: {
        rua: 'Rua das amoras',
        numero: 161,
        cp: '2775-252',
        localidade: 'Carcavelos',
        pais: 'Portugal'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)