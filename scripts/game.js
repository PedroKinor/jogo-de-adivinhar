const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let jogoEncerrado = false;

const input = document.getElementById("chute");
const botao = document.getElementById("cotaoChute!");
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativasRestantes");

