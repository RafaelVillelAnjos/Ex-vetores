// Crie um vetor com os preços de 10 produtos. Escreva um programa que aplique
// um aumento de 10% em todos os preços e exiba o novo vetor.

// valorDesconto e valorAumentado

let precos = [10, 20, 30, 40, 50, 55, 86, 25, 15];
let precosDescontos = []

for(let i = 0; i < precos.length; i++){
    let valorDesconto = precos[i] * 0.10
    let valorAumentado = precos[i] + valorDesconto
    precosDescontos[i] = valorAumentado
}

console.log(precosDescontos)