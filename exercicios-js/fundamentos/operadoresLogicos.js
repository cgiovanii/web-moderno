
//  *  No caso do &(and) os dois tem que ser verdadeiros
//  *  v e v -> v
//  *  v e f -> f
//  *  f e ? -> f
//  *  
//  *  No caso do OR um dos dois tem que ser vedadeiro
//  *  v ou f -> v
//  *  f ou v -> v
//  *  f ou f -> f
//  * 
//  *  No caso do ou exclusivo os valores tem que ser diferentes para ser verdadeiro
//  *  v xor v -> f
//  *  v xor f -> v
//  *  f xor v -> v
//  *  f xor f -> v
//  * 
//  *  Operadores unarios
//  *  !v -> f
//  *  !f -> v
//  * 