// Desenvolva um programa que solicite ao usuário as notas dos alunos de uma turma. Em seguida, atribua a cada nota o conceito correspondente conforme a tabela abaixo
// Por fim, deverá ser fornecido o percentual de notas da turma para cada conceito.

let quantidadeNotas = Number(prompt('Quantas notas você deseja cadastrar?'))
let notasAlunos = []
let percentuaisNotas = []
let notasA = 0
let notasB = 0
let notasC = 0
let notasD = 0
let notasE = 0

for(let i = 0; i < quantidadeNotas; i++){
    let nota = Number(prompt('Digite a nota do aluno:'))
    notasAlunos[i] = nota
}

for(let j = 0; j < notasAlunos.length; j++){
    if(notasAlunos[j] >= 9 && notasAlunos[j] <= 10){
        notasAlunos[j] = 'A'
        notasA++
    } else if(notasAlunos[j] >= 7 && notasAlunos[j] < 9){
        notasAlunos[j] = 'B'
        notasB++
    } else if(notasAlunos[j] >= 5 && notasAlunos[j] < 7){
        notasAlunos[j] = 'C'
        notasC++
    } else if(notasAlunos[j] >= 3 && notasAlunos[j] < 5){
        notasAlunos[j] = 'D'
        notasD++
    } else if(notasAlunos[j] >= 0 && notasAlunos[j] < 3){
        notasAlunos[j] ='E'
        notasE++
    }
}

let porcentagemNotasA = (notasA * 100)/notasAlunos.length
let porcentagemNotasB = (notasB * 100)/notasAlunos.length
let porcentagemNotasC = (notasC * 100)/notasAlunos.length
let porcentagemNotasD = (notasD * 100)/notasAlunos.length
let porcentagemNotasE = (notasE * 100)/notasAlunos.length

percentuaisNotas[0] = 'Notas A: '+porcentagemNotasA+'%'
percentuaisNotas[1] = 'Notas B: '+porcentagemNotasB+'%'
percentuaisNotas[2] = 'Notas C: '+porcentagemNotasC+'%'
percentuaisNotas[3] = 'Notas D: '+porcentagemNotasD+'%'
percentuaisNotas[4] = 'Notas E: '+porcentagemNotasE+'%'

console.log(percentuaisNotas)