// Dado um array vectors2D em JavaScript, onde cada elemento é um objeto { x: number, y:
// number}, crie uma função encontrarMaximaMagnitude(vectors2D) que retorne o
// vetor de maior módulo (magnitude).
// ● Se houver mais de um vetor com o mesmo módulo máximo, retorne o primeiro que aparecer no array.
// ● Lance um erro se o array estiver vazio ou contiver elementos inválidos.

let vectors2D = [
    {x: 2, y: 7},
    {x: 6, y: 4},
    {x: 5, y: 3}
]

let vetores = []
let maiorVetor = 0

function encontrarMaximaMagnitude(vectors2D, vetores, maiorVetor){
    if(vectors2D.length <= 0){
    console.log('A lista de vetores está vazia!')
    } else {
    for(let i = 0; i < vectors2D.length;i++){
        let j = vectors2D[i]

        if(typeof j !== "object" || j === null || typeof j.x !== "number" || typeof j.y !== "number"){
            console.log('Erro! Algum elemento da lista não é válido.')
            return
        } 

        let quadradoX = vectors2D[i].x ** 2
        let quadradoY = vectors2D[i].y ** 2
        let somaQuadrados = quadradoX + quadradoY
        let valorVetor = somaQuadrados ** 0.5
        vetores[i] = valorVetor  
    }

    for(let i = 0; i < vectors2D.length;i++){
        if(vetores[i] > maiorVetor){
        maiorVetor = vetores[i]
    }
    }


    console.log(maiorVetor)
}
}

encontrarMaximaMagnitude(vectors2D, vetores, maiorVetor)