const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const selector = document.getElementById("moving");
const text = document.getElementById("to-encrypt");
const button = document.getElementById("button");


for(let i = 0; i < alphabet.length; i++) {
    selector.innerHTML = selector.innerHTML + `<option value=${i}>${alphabet[i]}</option>`
}

button.addEventListener("click", () => {
    const textToEncrypt = text.value;
    const lettermoving = +selector.value;
    const decode = encrypt(textToEncrypt, lettermoving)

    console.log('entrei', textToEncrypt)
})

function encrypt(text, lettermoving) {
    let textUpper = text.toUpperCase().split("");
    let encryptedText = []

    for(let i = 0; i < textUpper.length; i++) {
        let indiceOfLetter = alphabet.indexOf(textUpper[i])
        if(indiceOfLetter >= 0) {
            encryptedText.push(letterByIndice(indiceOfLetter + lettermoving))
        } else {
            encryptedText.push(textUpper[i])
        }
        console.log(encryptedText)
    }
}

function letterByIndice(indice) {
    let finalIndice
    if(indice <= 0) {
        finalIndice = indice % alphabet.length
    } else {
        finalIndice = alphabet.length + indice % alphabet.length
    }
    return alphabet[finalIndice]
}