let comprimentoTela = 500;
let diametroBolinha = 15;
let larguraTela = 300;

let raioBolinha = diametroBolinha/2;
let xBolinha = comprimentoTela / 2;
let yBolinha = larguraTela / 2;
let comprimentoRaquete = 80;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let larguraRaquete = 10;
let xMinhaRaquete = 15;
let yRaquete = 120;

//

let xRaqueteOponente = comprimentoTela - larguraRaquete - 15;
let yRaqueteOponente = 120

function setup() {
  createCanvas(comprimentoTela, larguraTela);
}

function draw() {
  background(150);
  criaBolinha();
  moveBolinha();
  colideBolinha();
  colideRaquete();
  moveMinhaRaquete();
  criaRaquete(xMinhaRaquete, yRaquete);
  criaRaquete(xRaqueteOponente, yRaqueteOponente);
}

function criaBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function moveBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colideBolinha(){
  if (xBolinha + raioBolinha > comprimentoTela || xBolinha  - raioBolinha < 0) {
    velocidadeXBolinha *= -1;
  }
 
  if (yBolinha + raioBolinha > larguraTela || yBolinha - raioBolinha < 0) {
    velocidadeYBolinha *= -1;
    }
}

function criaRaquete(posicaoX, posicaoY){
  rect(posicaoX, posicaoY, larguraRaquete, comprimentoRaquete);
}

function moveMinhaRaquete(){
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }

  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function colideRaquete(){
  if(xBolinha - raioBolinha < xMinhaRaquete + larguraRaquete && yBolinha - raioBolinha< yRaquete + comprimentoRaquete && yBolinha +raioBolinha > yRaquete){
    velocidadeXBolinha *= -1;
  }
}