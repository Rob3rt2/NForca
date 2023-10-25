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
ctx.moveTo(100, 500);
ctx.lineTo(150, 400);
ctx.lineTo(200,500);
ctx.lineTo(100, 500);
ctx.moveTo(150,400);
ctx.lineTo(150,150);
ctx.lineTo(300, 150);
ctx.strokeStyle = "black";
ctx.stroke();
