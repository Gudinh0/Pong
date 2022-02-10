var canvas = document.getElementById('myCanvas')
var ctx = canvas.getContext('2d') // indica que o canvas é um elemento que tudo desenhado nele sera em 2D
/*
      ctx.fillStyle = 'white' //o objeto que eu desenhar será branco
      ctx.fillRect(10, 10, 50, 200) // coordenadas de onde eu quero criar um objeto (eixo X, eixo y, largura, altura)

 */

var teclas = {}

var bola = {
  x: canvas.width / 2 - 15, //posição inicial da bola no eixo x
  y: canvas.height / 2 - 15, //posiçao inicial da bola no eixo y
  altura: 30, // tamanho da bola
  dirx: -1, // direção no eixo x
  diry: 1, // direção no eixo y
  mod: 0, //acaleração da bola
  speed: 50 // velocidade
}
//bloco da esquerda
var esquerda = {
  x: 10,
  y: canvas.height / 2 - 60,
  altura: 120,
  largura: 30,
  score: 0,
  speed: 15
}

var direita = {
  x: 560,
  y: canvas.height / 2 - 60,
  altura: 120,
  largura: 30,
  score: 0,
  speed: 15
}

function desenha() {
  ctx.fillStyle = 'white'
  ctx.fillRect(esquerda.x, esquerda.y, esquerda.largura, esquerda.altura)
  ctx.fillRect(direita.x, direita.y, direita.largura, direita.altura)
  ctx.fillRect(bola.x, bola.y, bola.altura, bola.altura)
}

desenha()
