
/*

Classe Cenário - Funções para exibir e movimentar o cenário

*/

class Cenario{
  
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  
/*

Função para exibir a imagem do cenário
A imagem é carregada duas vezes para criar o efeito de movimento

*/

  exibe(){
    image(this.imagem, this.x1,0, width, height);
    image(this.imagem, this.x2,0, width, height);
  
  }
  
/*
Função para movimentar o cenário
*/

  move(){
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    
    if(this.x1 < -width){
      this.x1 = width;
    }
  
    if(this.x2 < -width){
      this.x2 = width;
    } 
    
  }
}