function valor() {
    var textvalor = window.document.querySelector('input#textvalor')
    var n1 = Number(textvalor.value)
    if (n1 <= 20 && n1 > 0) {
        var n2 = (n1 * 0.45) + n1
        res1.innerHTML = `O valor do produto é de R$${n2}`
    }
    if (n1 > 20) {
        var n3 = (n1 * 0.30) + n1
        res1.innerHTML = `O valor do produto é de R$${n3}`
    }
    else if (n1 <= 0 ){
        res1.innerHTML = `Número invalido `
    }
}