const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const selector = document.getElementById("displacement");
const text = document.getElementById("to-encrypt");
const button = document.getElementById("button");
const response = document.getElementById("response")


for(let i = 0; i < alphabet.length; i++) {
    selector.innerHTML = selector.innerHTML + `<option value=${i}>${alphabet[i]}</option>`
}

button.addEventListener("click", () => {
    let textToEncrypt = text.value;
    let displacement = +selector.value;

    let decoded = toEncrypt(textToEncrypt, displacement);
    response.classList.remove("invisible")
    response.innerText = decoded
//     console.log(decoded);
})

function toEncrypt(text, displacement) {
    let textUpperCase = text.toUpperCase().split("");
    let encryptedText = [];

    for(let i = 0; i < textUpperCase.length; i++) {
        let indiceOfLetter = alphabet.indexOf(textUpperCase[i])
        if(indiceOfLetter >= 0) {
            encryptedText.push(letterByIndice(indiceOfLetter + displacement))
        } else {
            encryptedText.push(textUpperCase[i])
        }
    }
    // console.log(encryptedText)
    return encryptedText.join("")
}

function letterByIndice(indice) {
    let finalIndice
    if(indice >= 0) {
        finalIndice = indice % alphabet.length
    } else {
        finalIndice = alphabet.length + indice % alphabet.length
    }
    return alphabet[finalIndice]
}