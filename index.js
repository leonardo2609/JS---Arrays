const numero = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
}

const numeroMultiplicado = numero.map(multiplicaPorDez)

console.log(numeroMultiplicado)