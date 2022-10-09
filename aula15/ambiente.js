let num = [5, 8, 4]
num[3] = 6
num.push(7) // Push coloca o elemento na última posição do vetor
console.log(`O vetor tem ${num.length} posições`)
num.sort() // Ordena os números do vetor
console.log(`O promeiro valor do vetor é ${num[0]}`)
console.log(num)
let pos = num.indexOf(7) // busca valores e mostra a posição deles
console.log(`O número 7 está na posição ${pos}`)
/*
for(let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}
*/
for (let pos in num) {
    console.log(num[pos])
}