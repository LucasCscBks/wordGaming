import { check,word,button3 } from "../index.js";

export function thirdLine1() {
    if (check.includes(c1.value) === false && c1.value != '') {
        c1.value = ''
    }
    if (check.includes(c1.value) === true && c1.value != '') {
        c2.focus()
    }
    if (c1.value != '' && c2.value != '' && c3.value != '' && c4.value != '' && c5.value != '') {
        console.log('tudo preenchido')
        button3.style.display = 'inline'
    } else {
        button3.style.display = 'none'
    }
}
export function thirdLine2() {
    if (check.includes(c2.value) === false && c2.value != '') {
        c2.value = ''
    }
    if (check.includes(c2.value) === true && c2.value != '') {
        c3.focus()
    }
    if (c1.value != '' && c2.value != '' && c3.value != '' && c4.value != '' && c5.value != '') {
        console.log('tudo preenchido')
        button3.style.display = 'inline'
    } else {
        button3.style.display = 'none'
    }
}
export function thirdLine3() {
    if (check.includes(c3.value) === false && c3.value != '') {
        c3.value = ''
    }
    if (check.includes(c3.value) === true && c3.value != '') {
        c4.focus()
    }
    if (c1.value != '' && c2.value != '' && c3.value != '' && c4.value != '' && c5.value != '') {
        console.log('tudo preenchido')
        button3.style.display = 'inline'
    } else {
        button3.style.display = 'none'
    }
}
export function thirdLine4() {
    if (check.includes(c4.value) === false && c4.value != '') {
        c4.value = ''
    }
    if (check.includes(c4.value) === true && c4.value != '') {
        c5.focus()
    }
    if (c1.value != '' && c2.value != '' && c3.value != '' && c4.value != '' && c5.value != '') {
        console.log('tudo preenchido')
        button3.style.display = 'inline'
    } else {
        button3.style.display = 'none'
    }
}
export function thirdLine5() {
    if (check.includes(c5.value) === false && c5.value != '') {
        c5.value = ''
    }
    if (c1.value != '' && c2.value != '' && c3.value != '' && c4.value != '' && c5.value != '') {
        console.log('tudo preenchido')
        button3.style.display = 'inline'
    } else {
        button3.style.display = 'none'
    }
}

export function checkThirdLine() {
    // Verificar se os inputs estão preenchidos //
    if (c1.value === '' || c2.value === '' || c3.value === '' || c4.value === '' || c5.value === '') {
        alert(`Preencha a primeira palavra`)
    } else {
        // Testando letras //
        if (word[0].includes(c1.value) === true && c1.value != '') {
            c1.style.backgroundColor = `green`
        } else if (word[1].includes(c1.value) === true) {
            c1.style.backgroundColor = `yellow`
        } else if (word[2].includes(c1.value) === true) {
            c1.style.backgroundColor = `yellow`
        } else if (word[3].includes(c1.value) === true) {
            c1.style.backgroundColor = `yellow`
        } else if (word[4].includes(c1.value) === true) {
            c1.style.backgroundColor = `yellow`
        }
        else {
            c1.style.backgroundColor = `red`
        } 
        
        // Testando letras //
        if (word[1].includes(c2.value) === true && c2.value != '') {
            c2.style.backgroundColor = `green`
        } else if (word[0].includes(c2.value) === true) {
            c2.style.backgroundColor = `yellow`
        } else if (word[2].includes(c2.value) === true) {
            c2.style.backgroundColor = `yellow`
        } else if (word[3].includes(c2.value) === true) {
            c2.style.backgroundColor = `yellow`
        } else if (word[4].includes(c2.value) === true) {
            c2.style.backgroundColor = `yellow`
        } else {
            c2.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[2].includes(c3.value) === true && c3.value != '') {
            c3.style.backgroundColor = `green`
        } else if (word[0].includes(c3.value) === true) {
            c3.style.backgroundColor = `yellow`
        } else if (word[1].includes(c3.value) === true) {
            c3.style.backgroundColor = `yellow`
        } else if (word[3].includes(c3.value) === true) {
            c3.style.backgroundColor = `yellow`
        } else if (word[4].includes(c3.value) === true) {
            c3.style.backgroundColor = `yellow`
        } else {
            c3.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[3].includes(c4.value) === true && c4.value != '') {
            c4.style.backgroundColor = `green`
        } else if (word[0].includes(c4.value) === true) {
            c4.style.backgroundColor = `yellow`
        } else if (word[1].includes(c4.value) === true) {
            c4.style.backgroundColor = `yellow`
        } else if (word[2].includes(c4.value) === true) {
            c4.style.backgroundColor = `yellow`
        } else if (word[4].includes(c4.value) === true) {
            c4.style.backgroundColor = `yellow`
        } else {
            c4.style.backgroundColor = `red`
        }
        // Testando letras //
        if (word[4].includes(c5.value) === true && c5.value != '') {
            c5.style.backgroundColor = `green`
        } else if (word[0].includes(c5.value) === true) {
            c5.style.backgroundColor = `yellow`
        } else if (word[1].includes(c5.value) === true) {
            c5.style.backgroundColor = `yellow`
        } else if (word[2].includes(c5.value) === true) {
            c5.style.backgroundColor = `yellow`
        } else if (word[3].includes(c5.value) === true) {
            c5.style.backgroundColor = `yellow`
        } else {
            c5.style.backgroundColor = `red`
        }
        // Desativando os inputs //
        c1.readOnly = true
        c2.readOnly = true
        c3.readOnly = true
        c4.readOnly = true
        c5.readOnly = true
        // Desativando os inputs //
        d1.readOnly = false
        d2.readOnly = false
        d3.readOnly = false
        d4.readOnly = false
        d5.readOnly = false
    }
    button3.style.display = 'none'
    d1.focus()
}


