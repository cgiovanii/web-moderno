/**
 * O JavaScript faz o hoisting ou seja joga o var para cima.
 * 
 * Exemplo:
 * 
 * No javascript o código abaixo fica assim:
 *  
 *  var a
 *  console.log('a= ', a);
 *  a = 2
 *  console.log('a= ', a);
 * 
 */
console.log('a= ', a);
var a = 2
console.log('a= ', a);
