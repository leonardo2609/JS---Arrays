const notas = [10, 10, 10, 10]

let somaDasNotas = 0

notas.forEach(function (nota) {
    somaDasNotas += nota
})

const media = somaDasNotas / notas.length

console.log(`A media do Aluno Leonardo é ${media}`)