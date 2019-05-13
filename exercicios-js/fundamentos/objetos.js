/** 
 *  * Definição de objeto:
 *  * O objeto é um conjunto de chave/valor
 *  * Dentro de um objeto pode ter outros conjutos de objetos aninhados.
 * 
 *  ! Para simplificar:
 *  ! Um objeto recebe um conjunto de chaves {}, e depois pode receber chaves/valores dinamicamente.
 */

 // * Método 1 de inserção de dados em um objeto
const prod1 = {}
prod1.nome = 'Iphone XR'
prod1.preco = 1290.00
prod1.marca = 'Apple'
prod1['cor'] = 'branco'
console.log(prod1);

// * Método 2 de inserção de dados em um objeto.(Estilo JSON)
// * Exemplo:
/** 
const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90,
    obj: {
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}
*/

const prod2 = {
    nome: 'Camisa Polo',
    preço: 79.90
}
/** 
*  *  Exemplo JSON do objeto prod2 para mostrar que não é escrito da mesma forma.
*  *  {"nome": "Camisa Polo", "preço": 79.90}
**/

console.log(prod2);