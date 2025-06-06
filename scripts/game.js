const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;
let jogoEncerrado = false;

const input = document.getElementById("chute");
const botao = document.getElementById("botaoChute"); // Corrigido ID
const mensagem = document.getElementById("mensagem");
const tentativasTexto = document.getElementById("tentativasRestantes");

tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;

botao.addEventListener("click", () => {
  if (jogoEncerrado) return;

  const palpite = parseInt(input.value); // Corrigido "paseInt" → "parseInt"

  if (isNaN(palpite) || palpite < 1 || palpite > 100) { // Corrigido "isNan" → "isNaN"
    mensagem.textContent = "Por favor, insira um número entre 1 e 100.";
    return;
  }

  tentativasRestantes--;

  if (palpite === numeroSecreto) {
    mensagem.textContent = "🎉 Você acertou! 🎉";
    jogoEncerrado = true;
  } else if (tentativasRestantes === 0) {
    mensagem.textContent = `❌ Você perdeu! O número secreto era ${numeroSecreto} ❌`;
    jogoEncerrado = true;
  } else if (palpite < numeroSecreto) {
    mensagem.textContent = "O número secreto é maior.";
  } else {
    mensagem.textContent = "O número secreto é menor.";
  }

  tentativasTexto.textContent = `Tentativas restantes: ${tentativasRestantes}`;
  input.value = "";
  input.focus();
});
