function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)    
}

const Obj = {min:80, max: 160}

//console.log(rand({min:50, max:80}))
console.log(rand(Obj))
console.log(rand({min:955}))
