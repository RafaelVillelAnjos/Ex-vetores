// Com base em uma lista de cinco estudantes, cada um identificado pelo número de matrícula e pela nota obtida, imprima os números de matrícula dos alunos cuja nota seja superior à média da turma.

const alunos = [
    {matriculaAluno: 101, nota: 7.5},
    {matriculaAluno: 102, nota: 4},
    {matriculaAluno: 201, nota: 8.8},
    {matriculaAluno: 301, nota: 10},
    {matriculaAluno: 401, nota: 5.2}
]

const notasMedia = []

let somaNotas = 0;

for (let i = 0; i < alunos.length; i++) {
    somaNotas = somaNotas + alunos[i].nota;
}

let mediaTurma = somaNotas / alunos.length;

for (let i = 0; i < alunos.length; i++) {
    if(alunos[i].nota > mediaTurma){
        notasMedia[i] = alunos[i].matriculaAluno
    }
}

console.log(notasMedia);
