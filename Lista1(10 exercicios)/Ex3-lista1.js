// Dado um vetor com os tempos (em minutos) que um atleta levou para
// completar 5 corridas, escreva um programa que calcule a média dos tempos.

let tempoMinutos = [6, 10, 4, 12, 8]
let somaTempos = 0

for(i = 0; i < tempoMinutos.length; i++){
    somaTempos = tempoMinutos[i] + somaTempos
}

let mediaTempos = somaTempos / tempoMinutos.length

console.log('A média de tempo foi '+mediaTempos+ 'minutos')