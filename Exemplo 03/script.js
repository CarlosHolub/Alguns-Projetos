function calcular() {
    var biscoito = window.document.querySelector('input#bis')
    var trento = window.document.querySelector('input#tren')
    var bala = window.document.querySelector('input#bala')
    var sonhodevalsa = window.document.querySelector('input#sonho')
    var paçoca = window.document.querySelector('input#paçoca')
    var n1 = Number(biscoito.value)
    var n2 = Number(trento.value)
    var n3 = Number(bala.value)
    var n4 = Number(sonhodevalsa.value)
    var n5 = Number(paçoca.value)
    if (n1 >= 0 && n2 >= 0 && n3 >= 0 && n4 >= 0 && n5 >= 0) {
        var tn1 = n1 * 2.50
        var tn2 = n2 * 2
        var tn3 = n3 * 0.15
        var tn4 = n4 * 1.50
        var tn5 = n5 * 0.35
        var res = tn1 + tn2 + tn3 + tn4 + tn5
        res21.innerHTML = `Você vai pagar R$${res.toFixed(2)}`
    }
    else if (n1 < 0) {
        res21.innerHTML = `Algum numero errado`
    }
    else if (n2 < 0) {
        res21.innerHTML = `Algum numero errado`
    }
    else if (n3 < 0) {
        res21.innerHTML = `Algum numero errado`
    }
    else if (n4 < 0) {
        res21.innerHTML = `Algum numero errado`
    }
    else if (n5 < 0) {
        res21.innerHTML = `Algum numero errado`
    }
    else if (n1 < 0 && n2 < 0 && n3 < 0 && n4 < 0 && n5 < 0) {
        res21.innerHTML = `Algum numero errado`
    }
}