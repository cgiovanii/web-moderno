const escola = "Cod3r"

console.log(escola.charAt(4));
// Se a letra estiver fora do indice não gera erro, gera um valor vazio.
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));
//pode usar um literal=valor declarado direto
console.log('Escola '.concat(escola).concat("!"));
//Normal
console.log(escola.replace(3, 'e'));
//Regex \d= digito \w string /g Global
console.log(escola.replace(/\d/, 'e'));

console.log('Ana,Maria,João'.split(','));
