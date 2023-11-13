# Jogo da Forca - POO (Programação Orientada a Objeto)
Este projeto apresenta o jogo da forca, programado em JavaScript (JS) e seguindo as instruções passadas em aula. O projeto contém Diagrama de Caso de Uso, Diagrama de Classe e Diagrama de Atividade.

**Orientadora:** Nivia Maria Domingues

# Autores
**Criadores:** Letícia da Lapa e Robert Caio Gomes Mota

# Diagramas 
Para o projeto, desenvolvemos os seguintes Diagramas: Diagrama de Caso de Uso, Diagrama de Classe e Diagrama de Atividade.

## Diagrama de Caso de Uso
**Nome do Caso de Uso:** Jogo da Forca

**Caso de uso geral:** Adivinhar a palavra.

**Jogador Principal:** Jogador

**Jogador Secundário:** PC

**Resumo:** Um jogo com partidas alternadas para o descobrimento de uma palavra aleatória, descobrindo letra a letra, acrescentando partes de um desenho enforcado a cada letra incorreta, até que a palavra seja adivinhada ou o desenho seja completo. 

**Pré-Condições:** Sistema gerar palavra aleatória.

**Pós-Condições:** Verificar letra, desenhá-la ou desenhar boneco.

![descricao caso de uso](https://github.com/Rob3rt2/NForca/assets/128638269/38b319bc-b09e-4451-af24-7437a55e459d)

## Diagrama de Classe

![Diagrama de Classe Forca](https://github.com/Rob3rt2/NForca/assets/128638269/b367e284-ffea-423d-b7f5-0b78c3a0b547)

## Diagrama de Atividade

![Diagrama atv Forca 2](https://github.com/Rob3rt2/NForca/assets/128638269/c671d25a-f95c-4de2-a74c-327bf3e634a6)

# Tela Inicial 

img tela inicial>

# Desenvolvimento 
Após realizarmos os diagramas, começamos a preparar o Front-End do nosso site. 
- **Script:**

![image](https://github.com/Rob3rt2/NForca/assets/127865166/26fa5ee7-662e-4d7a-b14c-17744907df49)

Scripts como **lineTo** e **moveTo** foram utilizados para desenhar a forca, os traços para as letras e a maior parte dos elementos que compõe a cena.

## Esclarecendo Scripts 

- **Em primeiro plano, declaramos os atributos da Classe Forca, que seram as palavras adivinhadas no Jogo da Forca.**

img do Script>

- **Em seguida, montamos o script que irá desenhar os elementos no canvas.**

img do Script>

- **Continuando, colocamos os textos com o nome do jogo e os tipos de palavras que definimos, que seriam Animais.**

img do Script>

- **Consoante a isso, fizemos o script para o método de desenhar as linhas.**

img do Script>

- **Script para detectar o palpite do jogador.**

img do Script> 

- **A seguir, o script irá identificar e desenhar a letra correta pressionada pelo jogador no teclado.** 

img do script>

- **Seguindo, o script irá desenhar a letra correta na tela.**

img do script> 

- **Continuando, o script identificará o fim de jogo, sendo para Vitória ou Derrota.**

img do script> 

- **O script que desenhará cada parte do corpo do boneco, presente na Classe Boneco.**

img do script> 

- **Ao decorrer do código, agora o script nos apresentará desenhando os seguimentos dos bonecos conforme as letras erradas forem pressionadas.**

img do Script>

- **Finalizando, as linhas de código a seguir chamam todos os métodos das Classes Forca e Boneco.**

img do script> 

# Imagens de Criação 

img de funcionamento> 

