/*
* Descrição: javascript do validar de cpf
* Palavras-chave: JavaScript
* Autor: André Liro
* Email: andreliro1945@gmail.com
* WhatsApp: (74)99114-9116
* Data de Criação: 23:59 02/09/2017
*/

var numErros = 0;

function toast() {
    var posX, posY, cordenadas, elemento;
    var snackbar = document.getElementById("snackbar");

    numErros++;
    //pegar as cordenadas
    elemento = document.getElementById('cpf');
    cordenadas = elemento.getBoundingClientRect();
    posX = cordenadas.left;
    posY = cordenadas.top;

    document.getElementById('snackbar').style.left = (posX + 330) + "px";
    document.getElementById('snackbar').style.top = (posY) + "px";
    //alert(posX);

    if (numErros >= 1) {
        snackbar.innerHTML = "CPF inválido! Tente Novamente!";
    }

    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}

// função que verifica o comprimento do cpf como string
function verificaNumDeDig(cpf) {
    var tam = cpf.length;
    var letras = 0;

    if (tam === 11)
    {
        for (var i = 0; i < cpf.length; i++) {
            if ((cpf[i].search(/[0-9]/)) != (0))
            {
                letras+=1;
            }
        }
        if (letras > 0) {
            return false;
        }else {
            return true;
        }
    }else
    {
        return false
    }
}

function validaJ(cpf){
    var soma = 0;
    var multiplicador = 10;
    var resto;
    var j;

    for (var i = 0; i < 9; i++) {
        soma = soma + (cpf[i] * multiplicador);
        multiplicador--;
    }
    resto = soma % 11;

    if (resto <= 1) {
        j = 0;
    }else {
        j = (11 - resto)
    }

    if (j == cpf[9]) {
        return true;
    }else {
        return false;
    }
}

function validaK(cpf){
    var soma = 0;
    var multiplicador = 11;
    var resto;
    var k;

    for (var i = 0; i < 10; i++) {
        soma = soma + (cpf[i] * multiplicador);
        multiplicador--;
    }
    resto = soma % 11;

    if (resto <= 1) {
        k = 0;
    }else {
        k = (11 - resto)
    }

    if (k == cpf[10]) {
        return true;
    }else {
        return false;
    }
}

function checkCpf(cpf){
    if (verificaNumDeDig(cpf)) {
        if (validaJ(cpf)) {
            if (validaK(cpf)) {
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }else {
        return false;
    }
}

function validaCpf(frm){

    var cpf = frm.cpf.value;
    if (checkCpf(cpf)) {
        frm.submit();
    }else {
        toast();
    }

}
