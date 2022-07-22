import { check,testButton,word } from "../index.js";

export function secondLine1() {
    if (check.includes(b1.value) === false && b1.value != '') {
        b1.value = ''
    }
    if (check.includes(b1.value) === true && b1.value != '') {
        b2.focus()
    }
    if (b1.value != '' && b2.value != '' && b3.value != '' && b4.value != '' && b5.value != '') {
        console.log('tudo preenchido')
        testButton.style.display = 'inline'
    } else {
        testButton.style.display = 'none'
    }
}
export function secondLine2() {
    if (check.includes(b2.value) === false && b2.value != '') {
        b2.value = ''
    }
    if (check.includes(b2.value) === true && b2.value != '') {
        b3.focus()
    }
    if (b1.value != '' && b2.value != '' && b3.value != '' && b4.value != '' && b5.value != '') {
        console.log('tudo preenchido')
        testButton.style.display = 'inline'
    } else {
        testButton.style.display = 'none'
    }
}
export function secondLine3() {
    if (check.includes(b3.value) === false && b3.value != '') {
        b3.value = ''
    }
    if (check.includes(b3.value) === true && b3.value != '') {
        b4.focus()
    }
    if (b1.value != '' && b2.value != '' && b3.value != '' && b4.value != '' && b5.value != '') {
        console.log('tudo preenchido')
        testButton.style.display = 'inline'
    } else {
        testButton.style.display = 'none'
    }
}
export function secondLine4() {
    if (check.includes(b4.value) === false && b4.value != '') {
        b4.value = ''
    }
    if (check.includes(b4.value) === true && b4.value != '') {
        b5.focus()
    }
    if (b1.value != '' && b2.value != '' && b3.value != '' && b4.value != '' && b5.value != '') {
        console.log('tudo preenchido')
        testButton.style.display = 'inline'
    } else {
        testButton.style.display = 'none'
    }
}
export function secondLine5() {
    if (check.includes(b5.value) === false && b5.value != '') {
        b5.value = ''
    }
    if (b1.value != '' && b2.value != '' && b3.value != '' && b4.value != '' && b5.value != '') {
        console.log('tudo preenchido')
        testButton.style.display = 'inline'
    } else {
        testButton.style.display = 'none'
    }
}

export function checkSecondLine() {
    // Verificar se os inputs estão preenchidos //
    if (b1.value === '' || b2.value === '' || b3.value === '' || b4.value === '' || b5.value === '') {
        alert(`Preencha a primeira palavra`)
    } else {
        // Testando letras //
        if (word[0].includes(b1.value) === true && b1.value != '') {
            b1.style.backgroundColor = `green`
        } else if (word[1].includes(b1.value) === true) {
            b1.style.backgroundColor = `yellow`
        } else if (word[2].includes(b1.value) === true) {
            b1.style.backgroundColor = `yellow`
        } else if (word[3].includes(b1.value) === true) {
            b1.style.backgroundColor = `yellow`
        } else if (word[4].includes(b1.value) === true) {
            b1.style.backgroundColor = `yellow`
        }
        else {
            b1.style.backgroundColor = `red`
        } 
        
        // Testando letras //
        if (word[1].includes(b2.value) === true && b2.value != '') {
            b2.style.backgroundColor = `green`
        } else if (word[0].includes(b2.value) === true) {
            b2.style.backgroundColor = `yellow`
        } else if (word[2].includes(b2.value) === true) {
            b2.style.backgroundColor = `yellow`
        } else if (word[3].includes(b2.value) === true) {
            b2.style.backgroundColor = `yellow`
        } else if (word[4].includes(b2.value) === true) {
            b2.style.backgroundColor = `yellow`
        } else {
            b2.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[2].includes(b3.value) === true && b3.value != '') {
            b3.style.backgroundColor = `green`
        } else if (word[0].includes(b3.value) === true) {
            b3.style.backgroundColor = `yellow`
        } else if (word[1].includes(b3.value) === true) {
            b3.style.backgroundColor = `yellow`
        } else if (word[3].includes(b3.value) === true) {
            b3.style.backgroundColor = `yellow`
        } else if (word[4].includes(b3.value) === true) {
            b3.style.backgroundColor = `yellow`
        } else {
            b3.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[3].includes(b4.value) === true && b4.value != '') {
            b4.style.backgroundColor = `green`
        } else if (word[0].includes(b4.value) === true) {
            b4.style.backgroundColor = `yellow`
        } else if (word[1].includes(b4.value) === true) {
            b4.style.backgroundColor = `yellow`
        } else if (word[2].includes(b4.value) === true) {
            b4.style.backgroundColor = `yellow`
        } else if (word[4].includes(b4.value) === true) {
            b4.style.backgroundColor = `yellow`
        } else {
            b4.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[4].includes(b5.value) === true && b5.value != '') {
            b5.style.backgroundColor = `green`
        } else if (word[0].includes(b5.value) === true) {
            b5.style.backgroundColor = `yellow`
        } else if (word[1].includes(b5.value) === true) {
            b5.style.backgroundColor = `yellow`
        } else if (word[2].includes(b5.value) === true) {
            b5.style.backgroundColor = `yellow`
        } else if (word[3].includes(b5.value) === true) {
            b5.style.backgroundColor = `yellow`
        } else {
            b5.style.backgroundColor = `red`
        }
        // Desativando os inputs //
        b1.readOnly = true
        b2.readOnly = true
        b3.readOnly = true
        b4.readOnly = true
        b5.readOnly = true
        // Desativando os inputs //
        c1.readOnly = false
        c2.readOnly = false
        c3.readOnly = false
        c4.readOnly = false
        c5.readOnly = false
    }
    testButton.style.display = 'none'
    c1.focus()
}


