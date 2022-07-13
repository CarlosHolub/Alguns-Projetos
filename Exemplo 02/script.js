function salario() {
    var textsal = window.document.querySelector('input#textsal')
    var n1 = Number(textsal.value)
    
    if (n1 <= 800 && n1 >0) {
        var n2 = (n1 * 0.30) + n1
        res.innerHTML = `Seu salario ai ser de R$${n2.toFixed(2)}`
    } 
    else if (n1 >= 800.01 && n1 <= 1200) {
        var n3 = (n1 * 0.25) + n1
        res.innerHTML = `Seu salario vai ser de R$${n3.toFixed(2)}`
    }
    else if (n1 >= 1200.01 && n1 <= 2400) {
        var n4 = (n1 * 0.20) + n1
        res.innerHTML = `Seu salario vai ser de R$${n4.toFixed(2)}`
    }
    else if (n1 >= 2400.01 && n1 <= 3550) {
        var n5 = (n1 * 0.15) + n1
        res.innerHTML = `Seu salario vai ser de R$${n5.toFixed(2)}`
    }
    else if (n1 > 3550.01) {
        var n6 = (n1 * 0.10) + n1
        res.innerHTML = `Seu salario vai ser de R$${n6.toFixed(2)}`
    }
    else if (n1 <= 0) {
        res.innerHTML = `Número invalido`
    }
}