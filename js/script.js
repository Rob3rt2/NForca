class Forca {
    constructor() {
        this.animais = ['arara', 'cobra', 'burro', 'macaco', 'abelha', 'capivara'];
        this.palavraS = this.animais[Math.floor(Math.random() * this.animais.length)].toUpperCase();
        this.letraDescoberta = new Set();
        this.letraErrada = 0;
        this.letraCor = 0;
        this.maxErros = 6;
    }

    gerarPalavra() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        // Desenhar o suporte da forca
        ctx.beginPath();
        ctx.font = "40px Arial";
        
        ctx.fillText("Letras Usadas: ", 800, 600);

        ctx.beginPath();
        ctx.font = "40px Verdana";
        ctx.fillText("  ANIMAL ", 50, 600);

        ctx.beginPath();
        ctx.font = "40px Verdana";
        ctx.fillText(" FORCA ", 50, 100)

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

        this.desenharPalavra();
    }

    verificarPalpite(event) {
        const letra = event.key.toUpperCase();

        if (this.palavraS.includes(letra)) {
            if (!this.letraDescoberta.has(letra)) {
                this.letraCor++;
                this.letraDescoberta.add(letra);
                this.desenharLetra(letra);
            }
        } else {
            this.letraErrada++;
           
        }
        this.letras
        this.verificarLetra();
    }

    desenharLetra(letra) {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.font = "50px Verdana";
        for (let i = 0; i < this.palavraS.length; i++) {
            if (this.palavraS[i] === letra) {
                ctx.fillText(letra, 400 + 100 * i, 480);
            }
        }
    }

    desenharPalavra() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.font = "50px Verdana";
        for (let i = 0; i < this.palavraS.length; i++) {
            ctx.fillText("_", 400 + 100 * i, 480);
        }
    }

    verificarLetra() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        if (this.letraErrada >= this.maxErros) {
            ctx.font = "30px Verdana";
            ctx.fillText(`0 vidas, fim de jogo. A palavra correta era ${this.palavraS}`, 700, 100);
            document.removeEventListener('keydown', this.verificarPalpite);
        } else if (this.letraCor == this.palavraS.length) {
            ctx.font = "30px Verdana";
            ctx.fillText("Palavra completa! Parabéns!!!", 700, 100);
            document.removeEventListener('keydown', this.verificarPalpite);
        }
    }
}

class boneco{
    constructor(){
            this.posicaoX = 300;
            this.posicaoY= 220;
            
    }

    desenharCabeca(ctx){
            ctx.beginPath();
            ctx.arc(this.posicaoX, this.posicaoY, 20, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.stroke();
            ctx.stroke();
        

    }
    desenharTronco(ctx){
        ctx.beginPath();
            ctx.moveTo(this.posicaoX ,this.posicaoY + 20);
            ctx.lineTo(this.posicaoX , this.posicaoY + 120);
            ctx.stroke();
            ctx.stroke();
            ctx.stroke();
        
    }
    desenharBracoD(ctx){
        ctx.beginPath();
       ctx.moveTo(this.posicaoX, this.posicaoY + 30);
       ctx.lineTo(this.posicaoX + 40, this.posicaoY + 70);
       ctx.stroke();
       ctx.stroke();
       ctx.stroke();
    
    }
    desenharBracoE(ctx){
        ctx.beginPath();
            ctx.moveTo(this.posicaoX, this.posicaoY + 30);
            ctx.lineTo(this.posicaoX - 40, this.posicaoY + 70);
            ctx.stroke();
            ctx.stroke();
            ctx.stroke();
        
    }
    desenharPernaD(ctx){
        ctx.beginPath();
            ctx.moveTo(this.posicaoX, this.posicaoY + 120);
            ctx.lineTo(this.posicaoX + 50, this.posicaoY + 200 );
            ctx.stroke();
            ctx.stroke();
            ctx.stroke();
        
    }
    desenharPernaE(ctx){
        ctx.beginPath();
            ctx.moveTo(this.posicaoX, this.posicaoY +120);
            ctx.lineTo(this.posicaoX - 50, this.posicaoY + 200);
            ctx.stroke();
            ctx.stroke();
            ctx.stroke();
        
    }
}

const forcaboneco = new boneco();
const jogoForca = new Forca();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");



jogoForca.gerarPalavra();

document.addEventListener('keydown', function(event) {
    jogoForca.verificarPalpite(event);
    switch (jogoForca.letraErrada) {
        case 1:
            forcaboneco.desenharCabeca(ctx);
            break;
        case 2:
            forcaboneco.desenharTronco(ctx);
            break;
        case 3:
            forcaboneco.desenharBracoD(ctx);
            break;
        case 4:
            forcaboneco.desenharBracoE(ctx);
            break;
        case 5:
            forcaboneco.desenharPernaD(ctx);
            break;
        case 6:
            forcaboneco.desenharPernaE(ctx);
            break;
    }
});