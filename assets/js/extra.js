// funções para captar as propriedades de .onmousemove, para que quando o mouse se mova no elemento 'button', a bolinha irá acompanhar o movimento 'x' e 'y'.

const btnDecrypto = document.querySelector('.btnDecrypto');
btnDecrypto.onmousemove = function (evento) {
    const x = evento.pageX - btnDecrypto.offsetLeft;
    const y = evento.pageY - btnDecrypto.offsetTop;

    btnDecrypto.style.setProperty('--x', x + 'px');
    btnDecrypto.style.setProperty('--y', y + 'px');

}

const btnCrypto = document.querySelector('.btnCrypto');
btnCrypto.onmousemove = function (evento) {
    const x2 = evento.pageX - btnCrypto.offsetLeft;
    const y2 = evento.pageY - btnCrypto.offsetTop;

    btnCrypto.style.setProperty('--x2', x2 + 'px');
    btnCrypto.style.setProperty('--y2', y2 + 'px');
}

const btnCopy = document.querySelector('.btnCopy');
btnCopy.onmousemove = function (evento) {
    const x3 = evento.pageX - btnCopy.offsetLeft;
    const y3 = evento.pagey - btnCopy.offsetTop;

    btnCopy.style.setProperty('--x3', x3 + 'px');
    btnCopy.style.setProperty('--y3', x3 + 'px');
}