function parimpar(n) {
    if (n%2==0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}

let res = parimpar()

for (let i = 70; i <= 100; i++) { //70 a 100 quem é par e impar
    console.log(parimpar(i))
}