function IMC() {
    var nome = window.document.querySelector('input#nome').value
    var email = window.document.querySelector('input#email').value
    var sexo = window.document.querySelector('select#sexo').value
    var data = window.document.querySelector('input#data').value
    var altura = window.document.querySelector('input#altura')
    var peso = window.document.querySelector('input#peso')
    var alt = Number(altura.value)
    var pes = Number(peso.value)
    var s = pes / (alt * alt)
    if (s < 16) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg com Magreza grau III eviaremos a seu ao email ${email} alguns procedimentos`
    }
    else if (s >= 16 && s <= 16.9) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg com Magreza grau II eviaremos a seu ao email ${email} alguns procedimentos`
    }
    else if (s >= 17 && s <= 18.4) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg com Magreza grau I eviaremos a seu ao email ${email} alguns procedimentos`
    }
    else if (s >= 18.5 && s <= 24.9) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg está Normal eviaremos a seu ao email ${email} alguns procedimentos para você manter seu IMC normal`
    }
    else if (s >= 25 && s <= 29.9) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg com Pré-Obesidade eviaremos a seu ao email ${email} alguns procedimentos`
    }
    else if (s >= 30 && s <= 34.9) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg com Obesidade Grau I eviaremos a seu ao email ${email} alguns procedimentos`
    }
    else if (s >= 35.9 && s <= 39.9) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg com Obesidade Grua II eviaremos a seu ao email ${email} alguns procedimentos`
    }
    else if (s >= 40) {
        res.innerHTML = `Olá ${nome} do sexo ${sexo} da data de nascimento ${data} você os IMC de ${s.toFixed(2)}Kg com Obesidade Grau III eviaremos a seu ao email ${email} alguns procedimentos`
    }
}