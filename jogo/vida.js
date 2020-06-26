/*
Classe Vida -> Métodos de exibição e cálculo das vidas
*/
class Vida{
  constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.vidas = this.inicial;
    
    this.largura = 25;
    this.altura = 25;
    this.xInicial = 20;
    this.y = 20;
  }
  
/*
Método para desenhar o número de vidas na tela
*/

  draw(){
    for(let i = 0; i < this.vidas; i++){
      const margem = i*10;
      const posicao = this.xInicial * (1 + i);
      image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
    }
  }
  
/*
Método para ganho de vidas
*/

  ganhaVida(){
    if(this.vidas <= this.total){
       this.vidas++;
    }
  }
  
/*
Método para perca de vidas
*/

  perdeVida(){
    this.vidas--;
  }
}