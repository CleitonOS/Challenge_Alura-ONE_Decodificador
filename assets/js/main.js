var botaoCriptografa = document.querySelector("btnCrypto");
var inputText = document.getElementById("inputText");
var resultText = document.getElementById("textBox");

var textoPrimario = document.getElementById('withoutText');
var textoSecundario = document.getElementById('complementText');


function dontShowText() {
  textoPrimario.style.display="none";
  textoSecundario.style.display="none";
  
}

// instruções para aparecer o button 'copiar' quando for submitado o texto de 'input' - criptografia/descriptografia.

function showButton(){
  document.getElementById('btnCopy').style.display = 'block';

}

function showText(){
  document.getElementById('sinalText').style.display = 'block';
}

function removeImg(){
  document.getElementById('textBox').style.backgroundImage = 'none';
}

function textoCriptografado() {
  let textoDigitado = inputText.value;
  if (/[A-Z-À-Ú-à-ù]/.test(textoDigitado)) {
    resultText.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos.'
  } else if (inputText.value === '') {
    resultText.innerHTML = 'O campo de texto está vazio.'
  } else {
    var txt = textoDigitado.replaceAll('e', "enter")
    .replaceAll('i', "imes")
    .replaceAll('a', "ai")
    .replaceAll('o', "ober")
    .replaceAll('u', "ufat");

    resultText.innerHTML = `${txt}`;

    dontShowText();
    showButton();
    showText();
    removeImg()
  }
}

function textoDescriptografado(){
  let textoDigitado = inputText.value;
  if (/[A-Z-À-Ú-à-ù]/.test(textoDigitado)) {
    resultText.innerHTML = 'Ops, parece que você usou letras maiúsculas ou acentos.'
  } else if (inputText.value === '') {
    resultText.innerHTML = 'O campo de texto está vazio.'
  } else {
    var txt = textoDigitado.replaceAll('enter', "e")
    .replaceAll('imes', "i")
    .replaceAll('ai', "a")
    .replaceAll('ober', "o")
    .replaceAll('ufat', "u");

    resultText.innerHTML = `${txt}`;

    dontShowText();
    showButton();
    showText();
    removeImg()
  }
};

function Copiar() {
  let textoCopiado = resultText;

  inputText.select();
  document.execCommand('delete');

  textoCopiado.select();
  document.execCommand('copy');

  resultText.innerHTML = 'O texto foi copiado com sucesso.'
}

console.log(textoCriptografado);