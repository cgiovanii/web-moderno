//Math é um objeto e usamos o ponto para aceder as funções que estão em Math. 
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
//obj1['nome'] = 'bola2'
console.log(obj1.nome)

// Utilizando a conotação this. tanto pode aceder aos atributos como as funções dentro do objeto.
function Obj(nome) {
    this.nome = nome,
    this.exec = function(){
        console.log('Exec...')
    }
}

const Obj2 = new Obj('cadeira')
const Obj3 = new Obj('mesa')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()