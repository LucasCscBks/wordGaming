import { check,tryButton,word } from "../index.js"

export function firstLine1() {
    if (check.includes(a1.value) === false && a1.value != '') {
        a1.value = ''
    }
    if (check.includes(a1.value) === true && a1.value != '') {
        a2.focus()
    }
    if (a1.value != '' && a2.value != '' && a3.value != '' && a4.value != '' && a5.value != '') {
        console.log('tudo preenchido')
        tryButton.style.display = 'inline'
    } else {
        tryButton.style.display = 'none'
    }
}
export function firstLine2() {
    if (check.includes(a2.value) === false && a2.value != '') {
        a2.value = ''
    }
    if (check.includes(a2.value) === true && a2.value != '') {
        a3.focus()
    }
    if (a1.value != '' && a2.value != '' && a3.value != '' && a4.value != '' && a5.value != '') {
        console.log('tudo preenchido')
        tryButton.style.display = 'inline'
    } else {
        tryButton.style.display = 'none'
    }
}
export function firstLine3() {
    if (check.includes(a3.value) === false && a3.value != '') {
        a3.value = ''
    }
    if (check.includes(a3.value) === true && a3.value != '') {
        a4.focus()
    }
    if (a1.value != '' && a2.value != '' && a3.value != '' && a4.value != '' && a5.value != '') {
        console.log('tudo preenchido')
        tryButton.style.display = 'inline'
    } else {
        tryButton.style.display = 'none'
    }
}
export function firstLine4() {
    if (check.includes(a4.value) === false && a4.value != '') {
        a4.value = ''
    }
    if (check.includes(a4.value) === true && a4.value != '') {
        a5.focus()
    }
    if (a1.value != '' && a2.value != '' && a3.value != '' && a4.value != '' && a5.value != '') {
        console.log('tudo preenchido')
        tryButton.style.display = 'inline'
    } else {
        tryButton.style.display = 'none'
    }
}
export function firstLine5() {
    if (check.includes(a5.value) === false && a5.value != '') {
        a5.value = ''
    }
    if (a1.value != '' && a2.value != '' && a3.value != '' && a4.value != '' && a5.value != '') {
        console.log('tudo preenchido')
        tryButton.style.display = 'inline'
    } else {
        tryButton.style.display = 'none'
    }
}

export function checkFirstLine() {
    // Verificar se os inputs estão preenchidos //
    if (a1.value === '' || a2.value === '' || a3.value === '' || a4.value === '' || a5.value === '') {
        alert(`Preencha a primeira palavra`)
    } else {
        // Testando letras //
        if (word[0].includes(a1.value) === true && a1.value != '') {
            a1.style.backgroundColor = `green`
        } else if (word[1].includes(a1.value) === true) {
            a1.style.backgroundColor = `yellow`
        } else if (word[2].includes(a1.value) === true) {
            a1.style.backgroundColor = `yellow`
        } else if (word[3].includes(a1.value) === true) {
            a1.style.backgroundColor = `yellow`
        } else if (word[4].includes(a1.value) === true) {
            a1.style.backgroundColor = `yellow`
        }
        else {
            a1.style.backgroundColor = `red`
        } 
        
        // Testando letras //
        if (word[1].includes(a2.value) === true && a2.value != '') {
            a2.style.backgroundColor = `green`
        } else if (word[0].includes(a2.value) === true) {
            a2.style.backgroundColor = `yellow`
        } else if (word[2].includes(a2.value) === true) {
            a2.style.backgroundColor = `yellow`
        } else if (word[3].includes(a2.value) === true) {
            a2.style.backgroundColor = `yellow`
        } else if (word[4].includes(a2.value) === true) {
            a2.style.backgroundColor = `yellow`
        } else {
            a2.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[2].includes(a3.value) === true && a3.value != '') {
            a3.style.backgroundColor = `green`
        } else if (word[0].includes(a3.value) === true) {
            a3.style.backgroundColor = `yellow`
        } else if (word[1].includes(a3.value) === true) {
            a3.style.backgroundColor = `yellow`
        } else if (word[3].includes(a3.value) === true) {
            a3.style.backgroundColor = `yellow`
        } else if (word[4].includes(a3.value) === true) {
            a3.style.backgroundColor = `yellow`
        } else {
            a3.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[3].includes(a4.value) === true && a4.value != '') {
            a4.style.backgroundColor = `green`
        } else if (word[0].includes(a4.value) === true) {
            a4.style.backgroundColor = `yellow`
        } else if (word[1].includes(a4.value) === true) {
            a4.style.backgroundColor = `yellow`
        } else if (word[2].includes(a4.value) === true) {
            a4.style.backgroundColor = `yellow`
        } else if (word[4].includes(a4.value) === true) {
            a4.style.backgroundColor = `yellow`
        } else {
            a4.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[4].includes(a5.value) === true && a5.value != '') {
            a5.style.backgroundColor = `green`
        } else if (word[0].includes(a5.value) === true) {
            a5.style.backgroundColor = `yellow`
        } else if (word[1].includes(a5.value) === true) {
            a5.style.backgroundColor = `yellow`
        } else if (word[2].includes(a5.value) === true) {
            a5.style.backgroundColor = `yellow`
        } else if (word[3].includes(a5.value) === true) {
            a5.style.backgroundColor = `yellow`
        } else {
            a5.style.backgroundColor = `red`
        }
        // Desativando os inputs //
        a1.readOnly = true
        a2.readOnly = true
        a3.readOnly = true
        a4.readOnly = true
        a5.readOnly = true
        // Desativando os inputs //
        b1.readOnly = false
        b2.readOnly = false
        b3.readOnly = false
        b4.readOnly = false
        b5.readOnly = false 
    }
    tryButton.style.display = 'none'
    b1.focus()
}