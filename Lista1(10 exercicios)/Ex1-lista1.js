// Dado um vetor de números inteiros representando as alturas (em cm) de um
// grupo de alunos, escreva um programa em JavaScript que identifique e exiba a
// maior altura.
// Exemplo de vetor: let alturas = [160, 172, 158, 180, 165];

let alturas = [180, 156, 200, 199, 175]
maiorAltura = 0

for(let i = 0; i < alturas.length; i++){
    if(alturas[i] > maiorAltura){
        maiorAltura = alturas[i]
    }
}

console.log('A maior altura é '+maiorAltura+ ' cm')