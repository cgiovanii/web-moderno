//Autor: Giovani Oliveira 13/05/2019

//Diferenças entre JSON e JavaScript Object

//JavaScript object
let person = {
    name: "Giovani",
    age: 43,
    email: "cgiovanii@gmail.com",
    adress:{
        street: "AAA, 171",
        city: "Lisbon"
    },
    children: [
        'Alícia', 
        'Quiara'
    ]
}

console.log('JavaScript Object:')
console.log(person)
console.log('Convertido em JSON:')

//Coverte para JSON:
person = JSON.stringify(person)

//Conversor de JSON para javaScript:
//person = JSON.parse(person)

console.log(person)
