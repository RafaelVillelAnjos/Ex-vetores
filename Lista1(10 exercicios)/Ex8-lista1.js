// Escreva um programa que receba um vetor com nomes de cidades e verifique
// se a cidade “Florianópolis” está presente no vetor.

let cidades = ["São Paulo", "Curitiba", "Florianópolis", "Rio de Janeiro"];
let florianopolis = 0

for(let i = 0; i < cidades.length; i++){
    if(cidades[i] == 'Florianópolis' || cidades[i] == 'florianópolis'){
        florianopolis++
    }
}

if(florianopolis > 0){
    console.log('A cidade de Florianópolis aparece na lista!')
} else {
    console.log('A cidade de Florianópolis não aparece na lista :(')
}