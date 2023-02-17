// Obtém referências aos elementos da página
const cronometro = document.getElementById('tempo');
const botaoIniciar = document.getElementById('btn-play');
const botaoParar = document.getElementById('btn-stop');
const botaoReiniciar = document.getElementById('btn-reset');

let tempo = 0; // Armazena o tempo atual do cronômetro
let intervalId; // Armazena o ID do intervalo usado para atualizar o cronômetro

function atualizarCronometro() {
  // Converte o tempo em horas, minutos e segundos
  const horas = Math.floor(tempo / 360000);
  const minutos = Math.floor((tempo % 360000) / 6000);
  const segundos = Math.floor((tempo % 6000) / 100);
  const milissegundos = tempo % 100;

  // Formata a exibição do cronômetro com dois dígitos em cada unidade de tempo
  const horasFormatadas = horas.toString().padStart(2, '0');
  const minutosFormatados = minutos.toString().padStart(2, '0');
  const segundosFormatados = segundos.toString().padStart(2, '0');
  const milissegundosFormatados = milissegundos.toString().padStart(2, '0');

  // Atualiza o texto do cronômetro com o tempo formatado
  cronometro.textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}:${milissegundosFormatados}`;

  // Incrementa o tempo em 10 milessegundos
  tempo += 10;
}

botaoIniciar.addEventListener('click', () => {
  // Inicia o intervalo que atualiza o cronômetro a cada segundo
  intervalId = setInterval(atualizarCronometro, 100);

  // Desabilita o botão "iniciar" e habilita os botões "parar" e "reiniciar"
  botaoIniciar.disabled = true;
  botaoParar.disabled = false;
  botaoReiniciar.disabled = false;
});

botaoParar.addEventListener('click', () => {
  // Para o intervalo que atualiza o cronômetro
  clearInterval(intervalId);

  // Desabilita o botão "parar" e habilita os botões "iniciar" e "reiniciar"
  botaoIniciar.disabled = false;
  botaoParar.disabled = true;
  botaoReiniciar.disabled = false;
});

botaoReiniciar.addEventListener('click', () => {
  // Para o intervalo que atualiza o cronômetro
  clearInterval(intervalId);

  // Reinicia
  botaoIniciar.disabled = false;
  botaoParar.disabled = false;
  botaoReiniciar.disabled = true;
  atualizarCronometro(tempo = 0)
})