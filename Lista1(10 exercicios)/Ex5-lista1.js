// Dado um vetor com 20 números inteiros aleatórios entre 1 e 100, escreva um
// programa que conte quantos desses números são pares.

let nums = [12, 33, 44, 55, 66, 77, 88, 99, 100, 21, 7, 19, 33, 22, 45, 54, 38, 5, 10, 23];
let numsPares = 0

for(let i = 0; i < nums.length; i++){
    if(nums[i] % 2 == 0){
        numsPares++
    }
}

console.log('Netsa lista, existem '+numsPares+' números pares.')