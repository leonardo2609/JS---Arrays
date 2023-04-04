const notas = [10, 9.5, 7, 6.5] // atribuir +1 em todas as notas

const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 2 //retornando o valor de nota e atribuindo 1 ponto a todas as notas e verificando se esta nota irá passar de 10, se passar será atribuido o valor "10".
})

console.log(notasAtualizadas) // imprimindo