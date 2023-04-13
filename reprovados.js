const alunos = ["Ana", "Marcos", "Maria", "Mauro"]
const medias = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((alunos, indice) => {
    return medias[indice] < 7 //Analisando se a media é menor que 7, se for então é "TRUE"
})

console.log(reprovados)