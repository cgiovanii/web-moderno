/**
 * ! Tomar cuidado com estas espressões:
 */

 // Ao invés de bugar por ser um numero infinito ele retorna o elemento Infinity
console.log(7 / 0); 
// Divide na mesma, o js verifica o valor e converte
console.log("10" / 2); 
//Não duplica a palavra show.
console.log("Show!" * 2);
// Gera uma imprecisão devido especificação
console.log(0.1 + 0.7);
//console.log(10.toString());
console.log((10.354).toFixed(2)); //Chama funcao se o valor estiver entre ().
