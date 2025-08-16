// Escreva um programa que receba um vetor com 10 números inteiros e crie um
// novo vetor contendo o quadrado de cada número.

let numeros = [2, 4, 6, 8, 10, 3, 5, 7, 8, 11]
let quadradoNumeros = []
let valorQuadrados

for(let i = 0; i < numeros.length; i++){
    valorQuadrados = numeros[i] ** 2
    quadradoNumeros[i] = valorQuadrados
}

console.log(quadradoNumeros)