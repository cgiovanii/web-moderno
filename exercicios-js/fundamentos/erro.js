function tratarErroELancar(erro) {
    // throw new Error('Erro...')
    // throw 10
    // throw true
    // throw 'Messagem'

    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGritando(Obj) {
    try {
        console.log(Obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Final')
    }
}

const Obj = {nome: 'Roberto'}
imprimirNomeGritando(Obj)