# Jogo da Forca - POO (Programação Orientada a Objeto)
Este projeto apresenta o jogo da forca, programado em JavaScript (JS) e seguindo as instruções passadas em aula. O projeto contém Diagrama de Caso de Uso, Diagrama de Classe e Diagrama de Atividade.

**Orientadora:** Nivia Maria Domingues

# Autores
**Criadores:** Letícia da Lapa e Robert Caio Gomes Mota

# Gameplay 
Assistir Gameplay disponível no Youtube,
- Link do Youtube: https://youtu.be/yHtbAw3dKCg

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

![Tela inicial](https://github.com/Rob3rt2/NForca/assets/128638269/8fda1b12-41cd-4e43-a02d-74e736348a6a)

# Desenvolvimento 
Após realizarmos os diagramas, começamos a preparar o Front-End do nosso site. 
- **Script:**

![image](https://github.com/Rob3rt2/NForca/assets/127865166/26fa5ee7-662e-4d7a-b14c-17744907df49)

Scripts como **lineTo** e **moveTo** foram utilizados para desenhar a forca, os traços para as letras e a maior parte dos elementos que compõe a cena.

## Esclarecendo Scripts 

- **Em primeiro plano, declaramos os atributos da Classe Forca, que seram as palavras adivinhadas no Jogo da Forca.**

![SCRIPT declarando palavras ](https://github.com/Rob3rt2/NForca/assets/128638269/3266ece0-4b65-42f2-9301-1c0fa2a7ff23)

- **Em seguida, montamos o script que irá desenhar os elementos no canvas.**

![SCRIPT desenha elementos no canvas](https://github.com/Rob3rt2/NForca/assets/128638269/07d094f3-ac58-4d05-a9a6-03e43a108706)

- **Continuando, colocamos os textos com o nome do jogo e os tipos de palavras que definimos, que seriam Animais.**

![SCRIPT texto nome e tipo palavras](https://github.com/Rob3rt2/NForca/assets/128638269/914f085f-2ff0-40d2-acdf-34ff087eecfb)

- **Consoante a isso, fizemos o script para o método de desenhar as linhas.**

![Desenha linhas palavra](https://github.com/Rob3rt2/NForca/assets/128638269/36cc6215-6f3e-4224-8062-6ae1c694e580)

- **Script para detectar o palpite do jogador.**

![SCRIPT verifica palpites](https://github.com/Rob3rt2/NForca/assets/128638269/26ab4318-cc57-46f5-bec5-a5eaa1983dbf)


- **A seguir, o script irá identificar e desenhar a letra correta pressionada pelo jogador no teclado.** 

![SCRIPT linhas de letra que pertence a palavra](https://github.com/Rob3rt2/NForca/assets/128638269/0885f40f-02dd-445f-af0f-a136c6590fa7)

- **Seguindo, o script irá desenhar a letra correta na tela.**

![SCRIPT desenha letras corretas](https://github.com/Rob3rt2/NForca/assets/128638269/d46b409f-797b-48ae-81f8-802388dba506)

- **Continuando, o script identificará o fim de jogo, sendo para Vitória ou Derrota.**

![SCRIPT Verifica fim de jogo](https://github.com/Rob3rt2/NForca/assets/128638269/6647470e-fd13-4849-9a4d-33c6f37d545e)

- **O script que desenhará cada parte do corpo do boneco, presente na Classe Boneco.**

![SCRIPT desenha boneco 1](https://github.com/Rob3rt2/NForca/assets/128638269/a03ce062-0fbd-485a-9f71-9de6d9f7629d)

![SCRIPT desenha boneco 2](https://github.com/Rob3rt2/NForca/assets/128638269/5ce9c02c-a8ab-4387-8b60-8f17b709bff8)

- **Ao decorrer do código, agora o script nos apresentará desenhando os seguimentos dos bonecos conforme as letras erradas forem pressionadas.**

![SCRIPT desenha boneco erro](https://github.com/Rob3rt2/NForca/assets/128638269/1e855193-5cd4-4497-bdd9-97cdb0ab9feb)

- **As linhas de código a seguir iram definir e chamar todos os métodos das Classes Forca e Boneco.**
 
![SCRIPT definindo nome pra classe e chamando](https://github.com/Rob3rt2/NForca/assets/128638269/fa8ee127-1302-4e24-8832-3cc867cd2346)

- **Finalizando, estamos chamando todas as Classes.**

![SCRIPT chama todas as classes](https://github.com/Rob3rt2/NForca/assets/128638269/5da9478f-2d03-4df3-8070-2b019adcb1e7)
  
# Demonstração de funcionamento

![Forca funcionando](https://github.com/Rob3rt2/NForca/assets/128638269/996e22bd-ea9b-446d-9d27-3511e3c795e9)

