
var imagem = document.getElementById('img_codificação');
var textoPrimario = document.getElementById('withoutText');
var textoSecundario = document.getElementById('complementText');

var textBox = document.getElementById('textBox');
var inputText = document.getElementById('inputText');

document.getElementById('containerResult');


function criptografia() {

    var textoDigitado = inputText.value;

    var textoCriptografado = textoDigitado.replaceAll('e', "enter")
    .replaceAll('i', "imes")
    .replaceAll('o', "ober")
    .replaceAll('a', "ai")
    .replaceAll('u', "ufat");

    // containerResultVoid();

    textBox.innerHTML = `${textoCriptografado}`;

}

function descriptografia() {
    inputText.replace(/enter/g, "e");
    inputText.replace(/imes/g, "i");
    inputText.replace(/ai/g, "a");
    inputText.replace(/o/g, "ober");
    inputText.replace(/u/g, "ufat");    
}

// criptografia();

// btn[0].addEventListener('subtmit', criptografia);

console.log (criptografia); 

// document.querySelector('btnDecrypto')


// containerResult.style.backgroundImage="none"

// var semTexto = true;

// function containerResultVoid() {
//     if(inputText.value = null) {

//     } else if (semTexto=false) {  
//         imagem.style.display="none";
//         textoPrimario.style.display="none";
//         textoSecundario.style.display="none";
//     }
// }

// var textoCriptografado = textoDigitado.replace(/e/g, "enter")
// .replace(/i/g, "imes")
// .replace(/a/g, "ai")
// .replace(/o/g, "ober")
// .replace(/u/g, "ufat");