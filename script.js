$(document).ready(function() {
// função para gerar um valor 0x (hex) aleatório
var fundoAleatorio = Math.floor(Math.random()*16777215).toString(16);
    $("html").css("background-color", '#' + fundoAleatorio);
});