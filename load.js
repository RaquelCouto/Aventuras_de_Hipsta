/*

Arquivo load contém todos os carregamentos de arquivos utilizados no jogo

*/

function preload() {
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemTroll = loadImage('imagens/inimigos/troll.png');
  imagemVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  fita = loadJSON('fita/fita.json');
  
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  somdoJogo = loadSound('sons/trilha_jogo.mp3');
  somdoPulo = loadSound('sons/somPulo.mp3');
}