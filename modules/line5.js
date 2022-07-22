import { check,word,button5 } from "../index.js";

export function fiveLine1() {
    if (check.includes(e1.value) === false && e1.value != '') {
        e1.value = ''
    }
    if (check.includes(e1.value) === true && e1.value != '') {
        e2.focus()
    }
    if (e1.value != '' && e2.value != '' && e3.value != '' && e4.value != '' && e5.value != '') {
        console.log('tudo preenchido')
        button5.style.display = 'inline'
    } else {
        button5.style.display = 'none'
    }
}
export function fiveLine2() {
    if (check.includes(e2.value) === false && e2.value != '') {
        e2.value = ''
    }
    if (check.includes(e2.value) === true && e2.value != '') {
        e3.focus()
    }
    if (e1.value != '' && e2.value != '' && e3.value != '' && e4.value != '' && e5.value != '') {
        console.log('tudo preenchido')
        button5.style.display = 'inline'
    } else {
        button5.style.display = 'none'
    }
}
export function fiveLine3() {
    if (check.includes(e3.value) === false && e3.value != '') {
        e3.value = ''
    }
    if (check.includes(e3.value) === true && e3.value != '') {
        e4.focus()
    }
    if (e1.value != '' && e2.value != '' && e3.value != '' && e4.value != '' && e5.value != '') {
        console.log('tudo preenchido')
        button5.style.display = 'inline'
    } else {
        button5.style.display = 'none'
    }
}
export function fiveLine4() {
    if (check.includes(e4.value) === false && e4.value != '') {
        e4.value = ''
    }
    if (check.includes(e4.value) === true && e4.value != '') {
        e5.focus()
    }
    if (e1.value != '' && e2.value != '' && e3.value != '' && e4.value != '' && e5.value != '') {
        console.log('tudo preenchido')
        button5.style.display = 'inline'
    } else {
        button5.style.display = 'none'
    }
}
export function fiveLine5() {
    if (check.includes(e5.value) === false && e5.value != '') {
        e5.value = ''
    }
    if (e1.value != '' && e2.value != '' && e3.value != '' && e4.value != '' && e5.value != '') {
        console.log('tudo preenchido')
        button5.style.display = 'inline'
    } else {
        button5.style.display = 'none'
    }
}

export function checkFiveLine() {
    // Verificar se os inputs estão preenchidos //
    if (e1.value === '' || e2.value === '' || e3.value === '' || e4.value === '' || e5.value === '') {
        alert(`Preencha a primeira palavra`)
    } else {
        // Testando letras //
        if (word[0].includes(e1.value) === true && e1.value != '') {
            e1.style.backgroundColor = `green`
        } else if (word[1].includes(e1.value) === true) {
            e1.style.backgroundColor = `yellow`
        } else if (word[2].includes(e1.value) === true) {
            e1.style.backgroundColor = `yellow`
        } else if (word[3].includes(e1.value) === true) {
            e1.style.backgroundColor = `yellow`
        } else if (word[4].includes(e1.value) === true) {
            e1.style.backgroundColor = `yellow`
        }
        else {
            e1.style.backgroundColor = `red`
        } 
        
        // Testando letras //
        if (word[1].includes(e2.value) === true && e2.value != '') {
            e2.style.backgroundColor = `green`
        } else if (word[0].includes(e2.value) === true) {
            e2.style.backgroundColor = `yellow`
        } else if (word[2].includes(e2.value) === true) {
            e2.style.backgroundColor = `yellow`
        } else if (word[3].includes(e2.value) === true) {
            e2.style.backgroundColor = `yellow`
        } else if (word[4].includes(e2.value) === true) {
            e2.style.backgroundColor = `yellow`
        } else {
            e2.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[2].includes(e3.value) === true && e3.value != '') {
            e3.style.backgroundColor = `green`
        } else if (word[0].includes(e3.value) === true) {
            e3.style.backgroundColor = `yellow`
        } else if (word[1].includes(e3.value) === true) {
            e3.style.backgroundColor = `yellow`
        } else if (word[3].includes(e3.value) === true) {
            e3.style.backgroundColor = `yellow`
        } else if (word[4].includes(e3.value) === true) {
            e3.style.backgroundColor = `yellow`
        } else {
            e3.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[3].includes(e4.value) === true && e4.value != '') {
            e4.style.backgroundColor = `green`
        } else if (word[0].includes(e4.value) === true) {
            e4.style.backgroundColor = `yellow`
        } else if (word[1].includes(e4.value) === true) {
            e4.style.backgroundColor = `yellow`
        } else if (word[2].includes(e4.value) === true) {
            e4.style.backgroundColor = `yellow`
        } else if (word[4].includes(e4.value) === true) {
            e4.style.backgroundColor = `yellow`
        } else {
            e4.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[4].includes(e5.value) === true && e5.value != '') {
            e5.style.backgroundColor = `green`
        } else if (word[0].includes(e5.value) === true) {
            e5.style.backgroundColor = `yellow`
        } else if (word[1].includes(e5.value) === true) {
            e5.style.backgroundColor = `yellow`
        } else if (word[2].includes(e5.value) === true) {
            e5.style.backgroundColor = `yellow`
        } else if (word[3].includes(e5.value) === true) {
            e5.style.backgroundColor = `yellow`
        } else {
            e5.style.backgroundColor = `red`
        }
        // Desativando os inputs //
        e1.readOnly = true
        e2.readOnly = true
        e3.readOnly = true
        e4.readOnly = true
        e5.readOnly = true
        // Desativando os inputs //
    }
    button5.style.display = 'none'
    e1.focus()
}


