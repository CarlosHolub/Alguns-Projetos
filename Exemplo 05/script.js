function area() {
    var select1 = window.document.querySelector('select#select').value
    var textarea1 = window.document.querySelector('input#area1')
    var textarea2 = window.document.querySelector('input#area2')
    var n1 = Number(textarea1.value)
    var n2 = Number(textarea2.value)
    if (select1 == 'Circulo') {
        var s = 3.1415 * (n1)
        res.innerHTML = `A Area do circulo é de ${s.toFixed(2)}`
    }
    if (select1 == 'Triangulo') {
        var s = (n1 * n2) /2
        res.innerHTML = `A Area do triangulo é de ${s.toFixed(2)}`
    }
    if (select1 == 'Quadrado') {
        var s = n1 * n2
        res.innerHTML = `A Area do quadrado ou demais é de ${s.toFixed(2)}`
    }
    if (select1 == 'Demais') {
        var s = n1 * n2
        res.innerHTML = `A Area de demais é de ${s.toFixed(2)}`
    }
    else if (n1 < 0) {
        res.innerHTML = `Não existe medida negativa revise seus dados`
    }
    else if (n2 < 0) {
        res.innerHTML = `Não existe medida negativa revise seus dados`
    }
    else if (n1 < 0 && n2 < 0) {
        res.innerHTML = `Não existe medida negativa revise seus dados`
    }
}

