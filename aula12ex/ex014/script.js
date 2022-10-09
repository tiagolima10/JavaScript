function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12) {
        msg.innerHTML += ', Bom Dia!'
        img.src = 'imagens/manha-red.png'
        document.body.style.backgroundColor = 'darkgoldenrod'
    } else if(hora >= 12 && hora <= 18) {
        msg.innerHTML += ', Boa Tarde!'
        img.src = 'imagens/tarde-red.png'
        document.body.style.backgroundColor = '#e77052'
    } else {
        msg.innerHTML += ', Boa Noite!'
        img.src = 'imagens/noite-red.png'
        document.body.style.backgroundColor = '#002467'
    }

}  