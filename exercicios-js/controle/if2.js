// * Exemplos de como nao escrever o codigo.
// * Usar sempre as chaves{} para definir um bloco dentro de uma estrutura de controlo
// * no caso abaixo so vai validadar a primeira linha a segunda vai imprimir sem validar porque
// * faltam as chaves 

function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('final') // Esta indentado para mostrar que esta fora do if.
}

// teste1(6)
// teste1(8)


// ! cuidado com os ;
function teste2(num) {
    if (num > 7); { // * cuidado com ; nos blocos de estrutura de controlo
        console.log(num)
        //console.log('final') // Esta indentado para mostrar que esta fora do if.
    }
}

teste2(6)
teste2(8)
