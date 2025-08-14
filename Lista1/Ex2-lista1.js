// Crie um vetor com os valores das notas de um aluno em 5 provas. Escreva um
// programa que calcule a soma total das notas.

let notasProvas = [5.7, 8.9, 10.0, 6.6, 6.0]
let somaNotas = 0

for(let i = 0; i < notasProvas.length; i++){
    somaNotas = notasProvas[i] + somaNotas
}

console.log('A soma de todas as notas do aluno é: '+somaNotas)