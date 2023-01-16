var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var cor = "black";
var largura = 3;
var ultimaPosicaoX;
var ultimaPosicaoY;

canvas.addEventListener("touchstart", touchStart);
function touchStart(evento){
    cor = document.getElementById("cor").value;
    largura = document.getElementById("largura").value;
    console.log("o toque começou");
    ultimaPosicaoX=evento.touches[0].clientX - canvas.offsetLeft;
    ultimaPosicaoY=evento.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", touchMove);
function touchMove(evento){
    var posicaoX = evento.touches[0].clientX - canvas.offsetLeft;
    var posicaoY = evento.touches[0].clientY - canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = largura;
    ctx.moveTo(ultimaPosicaoX, ultimaPosicaoY);
    ctx.lineTo(posicaoX, posicaoY);
    console.log("posição X: " + posicaoX +"/posição Y: " + posicaoY);
    ctx.stroke();
    ultimaPosicaoX = posicaoX;
    ultimaPosicaoY = posicaoY;
}
function apagar_desenho(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
