// buscando o elemento que representa o furmulário
var modal = document.getElementById("formulario");

// buscando o elemento que representa o botão de revervar
var button = document.getElementById("reservar");

// criando o comportamento para mostrar o formulário ao clicar no botão
button.onclick = function () {
    modal.style.display = "block";
}

// buscando o elemento que representa o botão de fechar o formulário
var span = document.getElementsByClassName("fechar")[0];
var enviar = document.getElementById("enviar");

// criando o comportamento para fechar o formulário
span.onclick = function () {
    modal.style.display = "none";
}

enviar.onclick = function () {
    modal.style.display = "none";
}

// criando o comportamento para fechar ao clicar fora do formulário
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}