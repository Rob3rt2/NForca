class jogo {

        constructor(tipo){

            this.tipo = tipo;
        }

    
}










const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


ctx.beginPath();
ctx.moveTo(110, 500);
ctx.lineTo(100, 490);
ctx.lineTo(150, 400);
ctx.lineTo(200,490);
ctx.lineTo(190,500);
ctx.lineTo(110, 500);
ctx.moveTo(150,400);
ctx.lineTo(150,170);
ctx.lineTo(170, 150);
ctx.lineTo(280, 150);
ctx.lineTo(300, 170);
ctx.lineTo(300, 200);
ctx.moveTo(290, 490);
ctx.lineTo(300, 500);
ctx.lineTo(400, 500);
ctx.lineTo(410, 490);
ctx.moveTo(440, 490);
ctx.lineTo(450, 500);
ctx.lineTo(550, 500);
ctx.lineTo(560, 490);
ctx.moveTo(590, 490);
ctx.lineTo(600, 500);
ctx.lineTo(700, 500);
ctx.lineTo(710, 490);
ctx.moveTo(740, 490);
ctx.lineTo(750, 500);
ctx.lineTo(850, 500);
ctx.lineTo(860, 490);
ctx.moveTo(890, 490);
ctx.lineTo(900, 500);
ctx.lineTo(1000, 500);
ctx.lineTo(1010, 490);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.stroke();
ctx.stroke();
ctx.stroke();

