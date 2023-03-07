const nome1 = ["Ana Paula", "Leonardo", "Lyvia", "Marcelo"]

const notas = [10, 8, 9, 10]

const generos = ["A aluna", "O aluno", "A aluna", "O aluno"]

const tudo = [nome1, notas, generos]

function nomeEMedia(aluno) {
    if (tudo[0].includes(aluno)) {
        const indice = tudo[0].indexOf(aluno)
        const media = tudo[1][indice]

        console.log(`${tudo[2][indice]} ${aluno} tem a nota = ${tudo[1][indice]}`)
    } else {
        console.log("Aluno(a) não encontrado")
    }
}

nomeEMedia("Leonardo")
