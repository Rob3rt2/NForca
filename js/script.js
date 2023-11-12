class Forca {
    constructor() {
        this.animais = ['cobra', 'elefante', 'macaco', 'abelha', 'capivara', 'enguia','falcao','guaxinim'
                        ,'gaviao','jabuti', 'calango', 'coelho', 'crocodilo', 'leopardo', 'lobo', 'lontra'
                        ,'lagarto', 'leao', 'ovelha', 'ouriço','orca', 'orangotango', 'onça', 'porco','panda'
                        ,'pato','papaguaio','pantera','pirarucu','tilapia', 'rato','raposa','sapo','tigre'
                        , 'salamandra','touro', 'urubu','urso','vaca','tamandua',  'zebra', 'bode' ,'baleia'];
        this.palavraS = this.animais[Math.floor(Math.random() * this.animais.length)].toUpperCase();
        this.letraDescoberta = new Set();
        this.letraErrada = 0;
        this.letraCor = 0;
        this.maxErros = 6;
    }
//desenha a maioria dos elementos no canvas
    gerarPalavra() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

       
//textos com nome do jogo e o tipo de palavra
        ctx.font = "30px Verdana";
    const letrasUsadas = [...this.letraDescoberta].join(", ");
    ctx.fillText("Utilizadas: " + letrasUsadas, 800, 650);


        ctx.beginPath();
        ctx.font = "40px Verdana";
        ctx.fillText("  ANIMAL ", 50, 600);

        ctx.beginPath();
        ctx.font = "40px Verdana";
        ctx.fillText(" FORCA ", 50, 100);

        //base da forca
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

     //desenha as linhas
        this.desenharPalavra();
    }
    //metodo de verificar palpite
    verificarPalpite(event) {
        
        const letra = event.key.toUpperCase(); //coloca a tecla digitada em uma conts "Letra"
      
        if (this.palavraS.includes(letra)) {
           
            if (!this.letraDescoberta.has(letra)) { //verifica se existe na palavra sorteada
                this.letraDescoberta.add(letra);
                this.desenharLetra(letra);
                this.letraCor++; // se sim, desenha a letra a partir do metodo desenharLetra
            }
        } else {
            this.letraErrada++;// se não adiciona uma peça do boneco
          
            
        }
         // mostra as letras já utilizadas
       const canvas = document.getElementById("canvas");
       const ctx = canvas.getContext("2d");
       ctx.font = "30px Verdana";
       ctx.fillText("Utilizadas: " + [...this.letraDescoberta].join(", "), 800, 650);
        this.verificarLetra();
      

    }
//ira desenhar a letra correta no qual foi clicada
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
//ira desenhar as linhas de letras do qual pertence a palavra
    desenharPalavra() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.font = "50px Verdana";
        for (let i = 0; i < this.palavraS.length; i++) {
            ctx.fillText("_", 400 + 100 * i, 480);
            
        }
       
    }
//verifica o fim do jogo, tanto para vitoria, quanto para a derrota
    verificarLetra() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        
        const letrasUnicas = new Set(this.palavraS.split('')); // Obtém as letras únicas da palavra
        if (this.letraErrada >= this.maxErros) {
            ctx.font = "30px Verdana";
            ctx.fillText(`0 vidas, fim de jogo. A palavra correta era ${this.palavraS}`, 700, 100);
            document.removeEventListener('keydown', this.verificarPalpite);
        } else if (this.letraDescoberta.size === letrasUnicas.size) { // Compara o tamanho do conjunto de letras descobertas com as letras únicas
            ctx.font = "30px Verdana";
            ctx.fillText("Palavra completa! Parabéns!!!", 700, 100);
            document.removeEventListener('keydown', this.verificarPalpite);
        }
    }
}
//classe para desenhar cada parte do boneco
class Boneco {
    constructor() {
        this.posicaoX = 300;
        this.posicaoY = 220;
    }

    desenharCabeca(ctx) {
        ctx.beginPath();
        ctx.arc(this.posicaoX, this.posicaoY, 20, 0, Math.PI * 2, true);
        ctx.stroke();
    }

    desenharTronco(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.posicaoX, this.posicaoY + 20);
        ctx.lineTo(this.posicaoX, this.posicaoY + 120);
        ctx.stroke();
    }

    desenharBracoD(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.posicaoX, this.posicaoY + 30);
        ctx.lineTo(this.posicaoX + 40, this.posicaoY + 70);
        ctx.stroke();
    }

    desenharBracoE(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.posicaoX, this.posicaoY + 30);
        ctx.lineTo(this.posicaoX - 40, this.posicaoY + 70);
        ctx.stroke();
    }

    desenharPernaD(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.posicaoX, this.posicaoY + 120);
        ctx.lineTo(this.posicaoX + 50, this.posicaoY + 200);
        ctx.stroke();
    }

    desenharPernaE(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.posicaoX, this.posicaoY + 120);
        ctx.lineTo(this.posicaoX - 50, this.posicaoY + 200);
        ctx.stroke();
    }
    //desenha as partes do boneco de acordo com o numero de erros
    desenharBoneco(ctx, letraErrada) {
        switch (letraErrada) {
            case 1:
                this.desenharCabeca(ctx);
                break;
            case 2:
                this.desenharTronco(ctx);
                break;
            case 3:
                this.desenharBracoD(ctx);
                break;
            case 4:
                this.desenharBracoE(ctx);
                break;
            case 5:
                this.desenharPernaD(ctx);
                break;
            case 6:
                this.desenharPernaE(ctx);
                break;
                 
        }
    }
}

const forcaboneco = new Boneco();
const jogoForca = new Forca();
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


jogoForca.gerarPalavra();
//chama os metodos de ambas as classes, forca e boneco
document.addEventListener('keydown', function(event) {
    jogoForca.verificarPalpite(event);
    forcaboneco.desenharBoneco(ctx, jogoForca.letraErrada);
    
});