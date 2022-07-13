function temperatura() {
    var number1 = window.document.querySelector('input#n1')
    var select1 = window.document.querySelector('select#origem').value
    var select2 = window.document.querySelector('select#saida').value
    var tn1 = Number(number1.value)
    if (select1 == 'Celcius' && select2 == 'Kelvin'){
        var s = tn1 + 273.15
        res.innerHTML = `A temperatura é de ${s.toFixed(2)} K`
    }
    if (select1 == 'Celcius' && select2 == 'Fahrenheit') {
        var s = (1.8 * tn1) + 32
        res.innerHTML = `A temperatura é de ${s.toFixed(2)} °F`
    }
    if (select1 == 'Fahrenheit' && select2 == 'Celcius') {
        var s = (tn1 - 32) / 1.8
        res.innerHTML = `A temperatura é de ${s.toFixed(2)} °C`
    }
    if (select1 == 'Fahrenheit' && select2 == 'Kelvin') {
        var s = (tn1 + 459.67) / 1.8
        res.innerHTML = `A temperatura é de ${s.toFixed(2)} K`
    }
    if (select1 == 'Kelvin' && select2 == 'Fahrenheit') {
        var s = (tn1 * 1.8) - 459.67
        res.innerHTML = `A temperatura é de ${s.toFixed(2)} °F`
    }
    if (select1 == 'Kelvin' && select2 == 'Celcius') {
        var s = tn1 - 273.15
        res.innerHTML = `A temperatura é de ${s.toFixed(2)} °C`
    }
}