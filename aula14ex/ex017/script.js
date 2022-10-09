function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.lenght == 0) {
        window.alert('Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''

        while (c <=10 ) {
            let item = document.createElement('option') // como se tivesse criado um elemento option no HTML dentro do Select
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    

}