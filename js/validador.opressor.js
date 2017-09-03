/*
* Descrição: javascript opressor do validar de cpf
* Palavras-chave: JavaScript
* Autor: André Liro
* Email: andreliro1945@gmail.com
* WhatsApp: (74)99114-9116
* Data de Criação: 23:59 02/09/2017
*/

var numErros = 0;
// função para mostrar o toast
function toast() {
    var posX, posY, cordenadas, elemento;
    var snackbar = document.getElementById("snackbar");

    numErros++;
    // pega as cordenadas do input cpf
    elemento = document.getElementById('cpf');
    cordenadas = elemento.getBoundingClientRect();
    posX = cordenadas.left;
    posY = cordenadas.top;
    // seta a posição do toast
    document.getElementById('snackbar').style.left = (posX + 330) + "px";
    document.getElementById('snackbar').style.top = (posY) + "px";
    //Testa o numero de erros ao estilo Talita
    if (numErros == 1) {
        snackbar.innerHTML = "CPF inválido! Tente Novamente!";
    }else if (numErros == 2) {
        snackbar.innerHTML = "Algum problema?<br>já é a segunda vez que tu erra!";
    }else if (numErros == 3) {
        snackbar.innerHTML = "Paciência tem limites! Sabia??";
    }else if (numErros == 4) {
        snackbar.innerHTML = "Porraa!!! Digita esse CPF certo!!!"
    }else if (numErros >= 5) {
        snackbar.innerHTML = "PQP!! Experimenta ir ao Polo Norte!!<br>Bicho burro!!";
        setTimeout(function() {
            window.location = "https://www.google.com.br/search?q=como+viajar+at%C3%A9+o+polo+norte%3F&oq=como+viajar+at%C3%A9+o+polo+norte%3F&gs_l=psy-ab.3..33i160k1.19305.31824.0.32739.23.20.2.0.0.0.157.2180.0j16.16.0....0...1.1.64.psy-ab..5.14.1754...0i22i10i30k1j0i22i30k1j33i22i29i30k1.QXwkVuoJFz8";
        }, 3000);
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
// valida o 10º carectere do cpf
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
// valida o 11º caractere do cpf
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
// faz a validação completa do cpf
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
// função chamada no form
function validaCpf(frm){

    var cpf = frm.cpf.value;
    if (checkCpf(cpf)) {
        frm.submit();
    }else {
        toast();
    }

}
