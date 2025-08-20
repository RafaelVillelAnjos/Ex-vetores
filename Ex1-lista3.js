//Escreva um programa que receba um vetor qualquer e um número inteiro n, e retorne um novo vetor com os elementos rotacionados n posições para a direita.

let vegetais = ["manga", "batata", "quiabo", "inhame", "cenoura"];
let vegetaisRotacionados = []
let deslocamento1 = Number(prompt('Quantas posições os elementos vão andar para a direita?'))
let contador = 0

if(deslocamento1 < 0){
    deslocamento1 = deslocamento1 * (-1)

    for(let i = vegetais.length - 1; i >= 0; i--){
    if(i - deslocamento1 < 0){
        vegetaisRotacionados[vegetais.length - 1 - contador] = vegetais[i]
        contador++
    } else {
        vegetaisRotacionados[i - deslocamento1] = vegetais[i]
    }
}

console.log(vegetaisRotacionados);

} else {

    for(let i = vegetais.length - 1; i >= 0; i--){
    if(i - deslocamento1 < 0){
        vegetaisRotacionados[vegetais.length - 1 - contador] = vegetais[i]
        contador++
    } else {
        vegetaisRotacionados[i - deslocamento1] = vegetais[i]
    }
}

    console.log(vegetaisRotacionados);

}