/*

Classe Jogo -> Gerencia todos os acontecimentos mutáveis do jogo

*/

class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

/*

Função setup -> Instancia os objetos

*/

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);
    const inimigoTroll = new Inimigo(matrizInimigoGrande, imagemTroll, width, 0, 200, 200, 400, 400, 10);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemVoador, width - 52, 200, 52, 52, 200, 150, 10);

    inimigos.push(inimigo);
    inimigos.push(inimigoTroll);
    inimigos.push(inimigoVoador);
  }

/*

Função KeyPressed -> Verifica e aciona o pulo de acordo com a entrada do jogador, no caso a seta para cima

*/

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula();
      somdoPulo.play();
    }
  }

/*

Função draw -> Desenha os elementos na tela

*/

  draw() {
    
    cenario.exibe();
    cenario.move();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
    personagem.exibe();
    vida.draw();
    personagem.aplicaGravidade();
    
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

/*

Função para exibir um inimigo na tela

*/


    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length -1) {
        this.indice = 0;
      }
    }
/*

Função para checar se há uma colisão entre o personagem e o inimigo

*/

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida();
      personagem.tornaInvencivel();
      
      if(vida.vidas === 0){
        image(imagemGameOver, (width / 2) - 200, height / 3);
        noLoop(); 
      }
    }
  }
}