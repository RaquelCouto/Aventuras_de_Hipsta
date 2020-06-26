/*
Classe Personagem -> Funções relacionados 
*/

class Personagem extends Animacao {

  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)

    this.yinicial = height - this.altura - this.variacaoY;
    this.y = this.yinicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  }

/*
Função para fazer o personagem pular
*/
  
  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }

/*
Função de gravidade
*/

  aplicaGravidade() {

    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if (this.y > this.yinicial) {
      this.y = this.yinicial;
      this.pulos = 0;
    }
  }
  
/*
Função para corrigir a perca das vidas
Anteriormente todas as vidas eram perdidas em apenas uma colisão
*/

  tornaInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false
    }, 1000);
  }
/*
Função para verificar se o personagem está colidindo com um inimigo
*/
  estaColidindo(inimigo) {
    if(this.invencivel){
      return false; 
    }
    const presisao = 0.7;
    //noFill();
    const colisao = collideRectRect(this.x, this.y, this.largura * presisao, this.altura * presisao, inimigo.x, inimigo.y, inimigo.largura * presisao, inimigo.altura * presisao)

    return colisao;
  }
}