const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"]

const nomesAtualizados = [...new Set(nomes)] //Criando uma nova variável , criando uma nova lista (array) , 
// copiando a lista "nomes" e atribuindo a lista "nomesAtualizados".
// Por fim criando um novo Set que não deixa repetir elementos.

console.log(nomesAtualizados)