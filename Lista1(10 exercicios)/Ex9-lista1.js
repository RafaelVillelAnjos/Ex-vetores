// Dado um vetor com os resultados de uma pesquisa de opinião (valores de 1 a
// 5), escreva um programa que conte quantas vezes cada nota foi atribuída.

let respostas = [1, 2, 3, 4, 5, 3, 2, 1, 5, 4, 3, 5, 4, 4];

let nota1 = 0
let nota2 = 0
let nota3 = 0
let nota4 = 0
let nota5 = 0

for(let i = 0; i < respostas.length; i++){
    if(respostas[i] == 1){
        nota1++
    } else if (respostas[i] == 2){
        nota2++
    } else if (respostas[i] == 3){
        nota3++
    } else if (respostas[i] == 4){
        nota4++
    } else if (respostas[i] == 5){
        nota5++
    }
}

console.log('A nota 1 apareceu '+nota1+' vezes\nA nota 2 apareceu '+nota2+' vezes\nA nota 3 apareceu '+nota3+' vezes\nA nota 4 apareceu '+nota4+' vezes\nA nota 5 apareceu '+nota5+' vezes\n')