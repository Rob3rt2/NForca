class Forca {
    constructor() {
        this.animais = ['cobra', 'arara', 'burro', 'macaco', 'abelha', 'capivara'];
        this.palavraS = this.animais[Math.floor(Math.random() * this.animais.length)];
        this.letraDescoberta = "";
        this.letraErrada = 0;
        this.letraCor = 0;
    }

    gerarPalavra() {
        for (var i = 0; i < this.palavraS.length; i++) {
            ctx.moveTo(290 + 150 * i, 490);
            ctx.lineTo(300 + 150 * i, 500);
            ctx.lineTo(400 + 150 * i, 500);
            ctx.lineTo(410 + 150 * i, 490);
        }
        ctx.stroke();
    }

    verificarPalpite(event) {
        if (this.letraDescoberta.includes(event.key) == this.palavraS.includes(event.key.toUpperCase())) {
            this.desenharLetra(event.key.toUpperCase(), 290 + 150 * i, 200);
            for (var i = 0; i < this.palavraS.length; i++) {
                if (this.palavraS[i] == event.key.toUpperCase()) {
                    ctx.font = "50px Verdana";
                    ctx.fillText(event.key.toUpperCase(), 290 + 150 * i, 200);
                    this.letraCor++;
                }
            }
        } else {
            this.desenharLetra();
            this.letraErrada++;
            // this.boneco(letrasErradas);  // Comente ou remova essa linha se não houver um método chamado boneco
        }
    }

    desenharLetra() {
        this.letraDescoberta = this.letraDescoberta + event.key;
        ctx.font = "30px Verdana";
        ctx.fillText(this.letraDescoberta.toUpperCase(), 700, 650);
    }
}

// Inicializando o canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// Desenhando o boneco e outros elementos do jogo
function desenharBoneco() {
    ctx.beginPath();
    // Adicione aqui o código para desenhar o boneco
    ctx.stroke();
}

ctx.beginPath();
ctx.font = "40px Arial ";
ctx.fillText("letras erradas", 800, 600);

ctx.beginPath();
ctx.moveTo(110, 500);
ctx.lineTo(100, 490);
ctx.lineTo(150, 400);
ctx.lineTo(200, 490);
ctx.lineTo(190, 500);
ctx.lineTo(110, 500);
ctx.moveTo(150, 400);
ctx.lineTo(150, 170);
ctx.lineTo(170, 150);
ctx.lineTo(280, 150);
ctx.lineTo(300, 170);
ctx.lineTo(300, 200);
ctx.strokeStyle = "black";
ctx.stroke();
ctx.stroke();
ctx.stroke();
ctx.stroke();

// Criando uma única instância de Forca
const forca = new Forca();

// Adicionando um ouvinte de eventos de teclado
document.addEventListener('keydown', function(event) {
    forca.verificarPalpite(event);
});

forca.gerarPalavra();