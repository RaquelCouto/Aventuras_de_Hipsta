/*
Classe Pontuação -> Funções relacionadas a exbição e cálculo dos pontos
*/

class Pontuacao{
  constructor(){
    this.pontos = 0;
  }

/*
Função para exibir na tela a pontuação
*/

  exibe(){
    textAlign(RIGHT);
    fill(255,255,255);
    textSize(50);
    text(parseInt(this.pontos), width-30,50);
  }
  
/*
Métodos de Adição e subtração de pontos
*/

  adicionarPonto(){
    this.pontos = this.pontos + 0.2
  }
  
  subtrai(){
  this.pontos = this.pontos - 20;
  }
}