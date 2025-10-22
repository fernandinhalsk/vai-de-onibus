function salvarIdeia() {
  const problema = document.getElementById("problema").value;
  const solucao = document.getElementById("solucao").value;
  const rentabilidade = document.getElementById("rentabilidade").value;
  const concorrentes = document.getElementById("concorrentes").value;

  if (problema && solucao && rentabilidade && concorrentes) {
    document.getElementById("resultado").innerText =
      "Ideia salva com sucesso! 🚀";
  } else {
    document.getElementById("resultado").innerText =
      "Por favor, preencha todos os campos.";
  }
}