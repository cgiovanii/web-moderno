// No caso do VAR que não tem escopo de bloco ele aparece fora do laço
for (var i = 0; i < 10; i++) {
   console.log(i);
    
}
console.log('i= ',i);