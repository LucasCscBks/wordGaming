import { check,word,button4 } from "../index.js";

export function fourLine1() {
    if (check.includes(d1.value) === false && d1.value != '') {
        d1.value = ''
    }
    if (check.includes(d1.value) === true && d1.value != '') {
        d2.focus()
    }
    if (d1.value != '' && d2.value != '' && d3.value != '' && d4.value != '' && d5.value != '') {
        console.log('tudo preenchido')
        button4.style.display = 'inline'
    } else {
        button4.style.display = 'none'
    }
}
export function fourLine2() {
    if (check.includes(d2.value) === false && d2.value != '') {
        d2.value = ''
    }
    if (check.includes(d2.value) === true && d2.value != '') {
        d3.focus()
    }
    if (d1.value != '' && d2.value != '' && d3.value != '' && d4.value != '' && d5.value != '') {
        console.log('tudo preenchido')
        button4.style.display = 'inline'
    } else {
        button4.style.display = 'none'
    }
}
export function fourLine3() {
    if (check.includes(d3.value) === false && d3.value != '') {
        d3.value = ''
    }
    if (check.includes(d3.value) === true && d3.value != '') {
        d4.focus()
    }
    if (d1.value != '' && d2.value != '' && d3.value != '' && d4.value != '' && d5.value != '') {
        console.log('tudo preenchido')
        button4.style.display = 'inline'
    } else {
        button4.style.display = 'none'
    }
}
export function fourLine4() {
    if (check.includes(d4.value) === false && d4.value != '') {
        d4.value = ''
    }
    if (check.includes(d4.value) === true && d4.value != '') {
        d5.focus()
    }
    if (d1.value != '' && d2.value != '' && d3.value != '' && d4.value != '' && d5.value != '') {
        console.log('tudo preenchido')
        button4.style.display = 'inline'
    } else {
        button4.style.display = 'none'
    }
}
export function fourLine5() {
    if (check.includes(d5.value) === false && d5.value != '') {
        d5.value = ''
    }
    if (d1.value != '' && d2.value != '' && d3.value != '' && d4.value != '' && d5.value != '') {
        console.log('tudo preenchido')
        button4.style.display = 'inline'
    } else {
        button4.style.display = 'none'
    }
}

export function checkFourLine() {
    // Verificar se os inputs estão preenchidos //
    if (d1.value === '' || d2.value === '' || d3.value === '' || d4.value === '' || d5.value === '') {
        alert(`Preencha a primeira palavra`)
    } else {
        // Testando letras //
        if (word[0].includes(d1.value) === true && d1.value != '') {
            d1.style.backgroundColor = `green`
        } else if (word[1].includes(d1.value) === true) {
            d1.style.backgroundColor = `yellow`
        } else if (word[2].includes(d1.value) === true) {
            d1.style.backgroundColor = `yellow`
        } else if (word[3].includes(d1.value) === true) {
            d1.style.backgroundColor = `yellow`
        } else if (word[4].includes(d1.value) === true) {
            d1.style.backgroundColor = `yellow`
        }
        else {
            d1.style.backgroundColor = `red`
        } 
        
        // Testando letras //
        if (word[1].includes(d2.value) === true && d2.value != '') {
            d2.style.backgroundColor = `green`
        } else if (word[0].includes(d2.value) === true) {
            d2.style.backgroundColor = `yellow`
        } else if (word[2].includes(d2.value) === true) {
            d2.style.backgroundColor = `yellow`
        } else if (word[3].includes(d2.value) === true) {
            d2.style.backgroundColor = `yellow`
        } else if (word[4].includes(d2.value) === true) {
            d2.style.backgroundColor = `yellow`
        } else {
            d2.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[2].includes(d3.value) === true && d3.value != '') {
            d3.style.backgroundColor = `green`
        } else if (word[0].includes(d3.value) === true) {
            d3.style.backgroundColor = `yellow`
        } else if (word[1].includes(d3.value) === true) {
            d3.style.backgroundColor = `yellow`
        } else if (word[3].includes(d3.value) === true) {
            d3.style.backgroundColor = `yellow`
        } else if (word[4].includes(d3.value) === true) {
            d3.style.backgroundColor = `yellow`
        } else {
            d3.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[3].includes(d4.value) === true && d4.value != '') {
            d4.style.backgroundColor = `green`
        } else if (word[0].includes(d4.value) === true) {
            d4.style.backgroundColor = `yellow`
        } else if (word[1].includes(d4.value) === true) {
            d4.style.backgroundColor = `yellow`
        } else if (word[2].includes(d4.value) === true) {
            d4.style.backgroundColor = `yellow`
        } else if (word[4].includes(d4.value) === true) {
            d4.style.backgroundColor = `yellow`
        } else {
            d4.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[4].includes(d5.value) === true && d5.value != '') {
            d5.style.backgroundColor = `green`
        } else if (word[0].includes(d5.value) === true) {
            d5.style.backgroundColor = `yellow`
        } else if (word[1].includes(d5.value) === true) {
            d5.style.backgroundColor = `yellow`
        } else if (word[2].includes(d5.value) === true) {
            d5.style.backgroundColor = `yellow`
        } else if (word[3].includes(d5.value) === true) {
            d5.style.backgroundColor = `yellow`
        } else {
            d5.style.backgroundColor = `red`
        }
        // Desativando os inputs //
        d1.readOnly = true
        d2.readOnly = true
        d3.readOnly = true
        d4.readOnly = true
        d5.readOnly = true
        // Desativando os inputs //
        e1.readOnly = false
        e2.readOnly = false
        e3.readOnly = false
        e4.readOnly = false
        e5.readOnly = false
    }
    button4.style.display = 'none'
    e1.focus()
}


