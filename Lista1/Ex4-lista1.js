// Escreva um programa que receba um vetor com os nomes dos dias da semana
// em ordem normal e retorne um novo vetor com os dias em ordem reversa.

let dias = ["segunda", "terça", "quarta", "quinta", "sexta", "sábado", "domingo"]
let semanaInvertida = []

for (let i = 0; i < dias.length; i++) {
    semanaInvertida[i] = dias[dias.length - 1 - i];
}

console.log(semanaInvertida);
