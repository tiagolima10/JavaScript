function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Digite uma data válida')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-h.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if(fsex[1].checked) {
            genero ='Mulher'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulta-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `${genero} com ${idade} anos`
        res.appendChild(img)
    }
}