
/**
 *  o mantra do javaScript é fugir do escopo global
 */

var numero = 1
{
    var numero = 2
    console.log('Dentro= ', numero)
}
console.log('Fora= ', numero)
