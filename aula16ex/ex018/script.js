let num = document.getElementById("numero")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let numeros = []

function isNumero(n) { //Para saber se é um número
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //Para saber se o número ja está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, numeros)) {
        numeros.push(Number(num.value))
        let item = document.createElement('option') // Cria uma option ao clicar
        item.text = `Valor ${num.value} adicionado` // Interpola e mostra o valor adicionado
        lista.appendChild(item) // adiciona o valor na lista
        res.innerHTML = "" //Limpa o resultado
    } else {
        alert("Número inválido ou já declarado!")
    }
    num.value = "" // Apaga o número que foi digitado
    num.focus() // Volta o foco para a caixa de texto num
    console.log(numeros) //mostra no console o vetor
}

function finalizar() {
    if (numeros.length == 0) { //Se o vetor estiver vazio faz isso
        alert("Adicionar valores antes de finalizar!")
    } else {
        let total = numeros.length
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0
        let media = 0

        for (let pos in numeros) { //Verifica um por um
            soma += numeros[pos]
            media = soma / total
            if(numeros[pos] > maior) {
                maior = numeros[pos] //guarda o maior número
            }
            if(numeros[pos] < menor) {
                menor = numeros[pos] //guarda o menor número
            }
        }

        res.innerHTML = " " //Zera o valor de res
        res.innerHTML += `<p> Ao todo temos ${total} número(s) cadastrados</p>`
        res.innerHTML += `<p> O maior número da lista é ${maior}</p>`
        res.innerHTML += `<p> O menor número da lista é ${menor}</p>`
        res.innerHTML += `<p> A soma de todos os números da lista é ${soma}</p>`
        res.innerHTML += `<p> A media de todos os números da lista é ${media}</p>`
    }
}