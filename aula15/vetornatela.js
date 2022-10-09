let valores = [8, 1, 7, 4, 2, 9]

console.log(valores)

/*
for (let i = 0; i < valores.length; i++) {
    console.log(valores[i])
}
*/

for (let pos in valores) {
    console.log(valores[pos])
}