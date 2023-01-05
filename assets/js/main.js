var botaoCriptografa = document.querySelector("btnCrypto");
var inputText = document.getElementById("inputText");
var resultText = document.getElementById("textBox");

var imagem = document.getElementById('img_codificação');
var textoPrimario = document.getElementById('withoutText');
var textoSecundario = document.getElementById('complementText');


function containerResultVoid() {
  imagem.style.display="none";
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

    containerResultVoid();
    showButton();
    showText();
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

    containerResultVoid();
    showButton();
    showText();
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