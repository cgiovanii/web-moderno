/**
 * * Váriáveis e Constantes
 * * -> Nomes reservados: Var, Let e Const
 * !Importante: Devemos usar sempre o let ao invés de var. (boas práticas)
 * * uma vez declarada a variável pode ser reutilizada várias vezes dentro do mesmo escopo.
 */

 var  a = 3
 let b = 3

 var a = 30
 // o runtime reclama que a variável b ja foi declarada anteriormente.
 // let b = 40
 b = 40

 console.log(a, b);

 a = 300
 b = 400

 console.log(a, b);

 const c = 5

 // O runtime reclama se voltar atribuir valores a constante c porque o valor dela não muda.
 //c = 50

 console.log(c);
 