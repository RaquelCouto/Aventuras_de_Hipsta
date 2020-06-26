/*
Classe Inimigo -> Herda as funções de Animação para animar os inimigos
*/

class Inimigo extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
  super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
  this.velocidade = velocidade;
  this.x = width;
  }

/*
Função para movimentar os inimigos na tela
*/

  move(){
    this.x = this.x - this.velocidade;
  }  
/*
Função para exibir os inimigos
*/  
  aparece(){
    this.x = width;
  }
}