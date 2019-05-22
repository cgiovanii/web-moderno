function soBoaNoticia(nota) {
    if (nota >= 7.1) {
        console.log('Foi aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('E verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo([])
seForVerdadeEuFalo({})
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('')
