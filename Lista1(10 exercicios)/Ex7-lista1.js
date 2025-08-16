// Dado um vetor com nomes de frutas, onde algumas aparecem mais de uma
// vez, escreva um programa que remova os elementos duplicados e exiba
// apenas os nomes únicos.

let frutas = ["maçã", "banana", "maçã", "laranja", "banana"];
let frutasUnicas = []
let quantidadeUnicas = 0

for(let i = 0; i < frutas.length; i++){
    let existe = 0
    for(let j = 0; j < frutasUnicas.length; j++){
        if(frutas[i] === frutasUnicas[j]){
            existe++
            break
        }
    }

    if(existe === 0){
        frutasUnicas[quantidadeUnicas] = frutas[i]
        quantidadeUnicas++
    }
}

console.log(frutasUnicas)