/*

Classe do botão

*/

class BotaoGerenciador{
  constructor(texto, x, y){
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed( () => this._alteraCena() );
    this.botao.addClass('botao-tela-inicial');
  }
  
/*

Função para desenhar o botão na tela

*/

  draw(){
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
  /*

Função de ação do botão criado, no caso alterar a cena atual

*/
  _alteraCena(){
    this.botao.remove();
    cenaAtual = 'jogo'
  }
}