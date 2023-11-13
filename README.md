# Jogo da Forca - POO (Programação Orientada a Objeto)
Este projeto apresenta o jogo da forca, programado em JavaScript (JS) e seguindo as instruções passadas em aula. O projeto contém Diagrama de Caso de Uso, Diagrama de Classe e Diagrama de Atividade.

**Orientadora:** Nivia Maria Domingues

## Autores
**Criadores:** Letícia da Lapa e Robert Caio Gomes

## Diagrama de Caso de Uso
**Nome do Caso de Uso:** Jogo da Forca

**Caso de uso geral:** Adivinhar a palavra.

**Jogador Principal:** Jogador

**Jogador Secundário:** PC

**Resumo:** Um jogo com partidas alternadas para o descobrimento de uma palavra aleatória, descobrindo letra a letra,acrescentando partes de um desenho enforcado a cada letra incorreta, até que a palavra seja adivinhada ou o desenho seja completo. 

**Pré-Condições:** Sistema gerar palavra aleatória.

**Pós-Condições:** Verificar letra, desenhá-la ou desenhar boneco.

![descricao caso de uso](https://github.com/Rob3rt2/NForca/assets/128638269/38b319bc-b09e-4451-af24-7437a55e459d)

## Diagrama de Classe

![Diagrama de Classe Forca](https://github.com/Rob3rt2/NForca/assets/128638269/b367e284-ffea-423d-b7f5-0b78c3a0b547)

## Diagrama de Atividade

![Diagrama atv Forca 2](https://github.com/Rob3rt2/NForca/assets/128638269/c671d25a-f95c-4de2-a74c-327bf3e634a6)

## Desenvolvimento 
Após realizarmos os diagramas, começamosa preparar o Front-End do nosso site. 
- **Script:**

![image](https://github.com/Rob3rt2/NForca/assets/127865166/26fa5ee7-662e-4d7a-b14c-17744907df49)

Scripts como **lineTo** e **moveTo** foram utilizados para desenhar a forca, os traços para as letras e a maior parte dos elementos que compõe a cena.

# Esclarecendo Scripts 

- **Em primeiro plano, declaramos os atributos da Classe Forca.**

img do Script>

- **Em seguida, montamos o script que irá desenhar os elementos no canvas.**

img do Script>

- **Seguindo, colocamos os textos com o nome do jogo e os tipos de palavras que definimos, que seriam Animais.

img do Script>

- **Consoante a isso, fizemos o script para o método de desenhar as linhas.**

img do Script>

- **Script para detectar o palpite do jogador.**

