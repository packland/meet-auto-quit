// ==UserScript==
// @name         Google Meet auto quitting
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Leaves a Meeting if the Quorum Decreases (when other people start leaving)
// @author       Patrick Silva & Lucas Federicci
// @match        https://meet.google.com/*
// @icon         none
// @grant        none
// ==/UserScript==

(function() {
    console.log('Starting Script');
var min_reuniao = 2;
var max_reuniao = 0
var min_quorum = 0.5
var ativar = true

const membersfunction = (item) => {
    if (ativar && item) {
        console.log('atual = ' + item.textContent)
        console.log('max = ' + max_reuniao)
        let quorum = parseFloat(item.textContent)
        if(quorum > max_reuniao) { max_reuniao = quorum }
        if(max_reuniao < min_reuniao && quorum < min_reuniao) {
            console.log('Reuniao nao se enquadra')
            return
        }
        if (quorum < max_reuniao * min_quorum) {
            console.log('quorum menor que o minimo')
            window.document.querySelector(".QQrMi").click()
        }
    }
};

setInterval(() => {
    membersfunction(document.querySelector('.uGOf1d'));
}, 1000);

// Cria o botão flutuante
var btn = document.createElement("BUTTON");
var textOn = document.createTextNode("Auto-sair Ativado");
var textOff = document.createTextNode("Auto-sair Desativado");
btn.appendChild(textOn);
btn.style.backgroundColor = "green";
btn.style.position = "fixed";
btn.style.bottom = "5px";
btn.style.right = "50px";
btn.style.zIndex = "9999";
document.body.appendChild(btn);

// Adiciona o evento de clique ao botão
btn.addEventListener("click", function() {
    ativar = !ativar;
    if(ativar) {
        btn.removeChild(textOff);
        btn.appendChild(textOn);
        btn.style.backgroundColor = "green";
        btn.style.right = "50px";
    } else {
        btn.removeChild(textOn);
        btn.appendChild(textOff);
        btn.style.backgroundColor = "";
        btn.style.right = "38px";
    }
});


})();
