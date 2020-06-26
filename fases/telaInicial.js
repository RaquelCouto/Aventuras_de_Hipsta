/*

Classe Tela Inicial -> elementos e funções da tela inicial do jogo

*/

class TelaInicial{
  constructor(){
  
  }

/*

Função draw -> Desenha os elementos da tela inicial

*/

  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

/*
Carrega a imagem da tela inicial
*/

  _imagemDeFundo(){
     image(imagemTelaInicial, 0, 0, width, height);
  }

/*

Ajusta o título do jogo

*/

  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    textSize(50);
    text('As aventuras de', width/2, 100);
    textSize(100);
    text('Hipsta', width/2, 200);
  }

/*

Cria o botão

*/

  _botao(){
    botaoGerenciador.y = height/7*5;
    botaoGerenciador.draw();
  }
}