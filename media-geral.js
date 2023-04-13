const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function CalculaMedia(somaDasNotas) { // Faz as médias de todas as salas
    const soma = somaDasNotas.reduce((acumulador, nota) => { //A soma das notas
        return acumulador + nota //Efetuar a soma, começando com 0
    }, 0)

    const media = soma / somaDasNotas.length //Média da sala, pegando o tamanho da array

    return media
}

console.log(`A media da sala de JavaScript é de ${CalculaMedia(salaJS)}`)
console.log(`A media da sala de Java é de ${CalculaMedia(salaJava)}`)
console.log(`A media da sala de Python é de ${CalculaMedia(salaPython)}`)