---
title: Exp9.1 - Contadores Assíncronos
description: Verificar o funcionamento de contadores assincronos crescentes e decrescentes.
---

## Objetivos

- Verificar o funcionamento de contadores assincronos crescentes e decrescentes.

<table border="1"><tr><td>Preparação</td></tr></table>

## Conceitos

## 1-Contador Assíncrono Crescente

Nestes contadores, a saída de um flip-flop é ligada à entrada de clock do flip-flop seguinte, ou seja, somente um flip-flop é controlado por pulsos de clock externos.

O número "n" de estados internos irá caracterizar o módulo do contador. Assim, por exemplo, um contador que possui oito estados internos é dito de módulo 8. Se este contador for do tipo crescente, a sua base binária de contagem é de 000 a 111.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_1_1783546300437.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NiRKLw2KUqgU5cARE1Xhwt9fL3w%3D&Expires=1784151100' alt='OCR图片'/></div>

<div align="center">

Contador Assíncrono Crescente (UP) Módulo 8

</div>

O ciclo de contagem se repete após o $ 8^{\circ} $ pulso de clock, pois todas as saídas mudam de nível lógico "1" para nível "0", forçando o retorno ao estado inicial: $ Q_{2}=0 $ , $ Q_{1}=0 $ e $ Q_{0}=0 $ .

Pode-se, entao, construir a seguinte tabela:

<table border="1">
<tr><td></td><td>Q2</td><td>Q1</td><td>Q0</td><td>Estado</td></tr>
<tr><td>Estado inicial</td><td>0</td><td>0</td><td>0</td><td>⓪</td></tr>
<tr><td>Após 1° CK</td><td>0</td><td>0</td><td>1</td><td>①</td></tr>
<tr><td>Após 2° CK</td><td>0</td><td>1</td><td>0</td><td>②</td></tr>
<tr><td>Após 3° CK</td><td>0</td><td>1</td><td>1</td><td>③</td></tr>
<tr><td>Após 4° CK</td><td>1</td><td>0</td><td>0</td><td>④</td></tr>
<tr><td>Após 5° CK</td><td>1</td><td>0</td><td>1</td><td>⑤</td></tr>
<tr><td>Após 6° CK</td><td>1</td><td>1</td><td>0</td><td>⑥</td></tr>
<tr><td>Após 7° CK</td><td>1</td><td>1</td><td>1</td><td>⑦</td></tr>
<tr><td>Após 8° CK</td><td>0</td><td>0</td><td>0</td><td>⓪</td></tr>
</table>

Sequência de Saída do Contador Assíncrono Crescente Módulo 8

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_1_1783546300498.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EJsMQXlqHMeCz%2FvXlVJsF17w16Y%3D&Expires=1784151100' alt='OCR图片'/></div>

Diagrama de Estados do

Contador Crescente Módulo 8

## 2-Contador Assíncrono Decrescente

O contador módulo 8 também pode formecer em suas saídas, uma contagem decrescente como mostra o diagrama de estados abaixo:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_2_1783546300503.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=9yfCdaIVwwxtDi42dotv1gdLP9Q%3D&Expires=1784151100' alt='OCR图片'/></div>

<div align="center">

Diagrama de Estados de um Contador Decrescente Módulo 8

</div>

Uma das formas de se contruir um contador assíncrono decrescente módulo 8 é dada abaixo:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_3_1783546300508.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HWL1QtKATUQWVWUtJ9Fva%2Bodmc4%3D&Expires=1784151100' alt='OCR图片'/></div>

<div align="center">

Contador Assíncrono Decrescente (DOWN) Módulo 8

</div>

## 3-Contador UP-DOWN (Crescente-Decrescente)

Conhecendo-se os dois tipos de contadores assíncronos, crescente e decrescente, pode-se construir um contador assíncrono denominado UP-DOWN. O circuito irá combinar ambos os contadores em um só. A escolha do modo de contagem é realizada através de uma entrada de controle, como mostra a figura a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_1_1783546300525.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8eu3AfDb4W8tIpY8S8caSd03xdU%3D&Expires=1784151100' alt='OCR图片'/></div>

<div align="center">

Contador Assíncrono UP-DOWN Módulo 8

</div>

Recordando...

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_2_1783546300531.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fsNsW1BgfeSMvWCkmgx2K%2FzP%2F1w%3D&Expires=1784151100' alt='OCR图片'/></div>

## Metodologia

M1- Será montado, inicialmente, um contador assíncrono crescente de módulo 16 (de 0 a 15), utilizando flip-flops tipo JK master-slave e depois um contador decrescente de módulo 16.

M2- Em seguida, será montado um contador assíncrono UP-DOWN de módulo 8. Uma linha de controle irá determinar o tipo de contagem. Esta contagem será monitorada por um display de sete segmentos, utilizando-se o CI 7447 para decodificar/acionar o display.

## Relação de material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>fonte de alimentação de +5V</td></tr><tr><td>1</td><td>CI 7400</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>1</td><td>CI 7432</td></tr><tr><td>2</td><td>CI 7476</td></tr><tr><td>2</td><td>CI 4027</td></tr><tr><td>1</td><td>CI 7447</td></tr><tr><td>1</td><td>Display de 7-segmentos tipo anodo comum</td></tr><tr><td>4</td><td>LEDs</td></tr><tr><td>8</td><td>resistores de 330Ω</td></tr><tr><td>6</td><td>resistores de 1Ω</td></tr><tr><td>1</td><td>chave H-H</td></tr><tr><td>-</td><td>fios rígidos 0,51 mm∅</td></tr></table>

<div align="center">

Praticando

</div>

P1- Utilizando-se flip-flops tipo JK master-slave, sensíveis à borda de descida (C17476), montar e estudar a sequência de contagem do circuito mostrado a seguir. Impor estado inicial igual a zero, através do controle Clear (RI-I).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_1_1783546300542.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=q8XnzEqAounRkHTjQrx4zrjzgmY%3D&Expires=1784151100' alt='OCR图片'/></div>

<div align="center">

Obs: Para fornecer pulsos de clock adequados, utilizar o circuito eliminador de ruído.

</div>

P2- Montar e estudar a sequência de contagem do circuito a seguir. Impor estado inicial igual a 15, através do controle Preset (RI-II).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_1_1783546300576.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7N%2BE1Fu4iC3kMeb1luiTKeNSIVo%3D&Expires=1784151100' alt='OCR图片'/></div>

Obs: Para fornecer pulsos de clock adequados, utilizar o circuito eliminador de ruído.

P3- Montar um contador assíncrono UP-DOWN de módulo 8 como o da figura a seguir, onde a sequência de contagem é monitorada através de um display de 7 segmentos.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_2_1783546300583.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XIeSjI4L5FSMnBqOZ9oR3XdBfyk%3D&Expires=1784151100' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_3_1783546300611.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=OIsPHOURllIuL7MsxzLBwK77qJo%3D&Expires=1784151100' alt='OCR图片'/></div>

Obs: Para fornecer pulsos de clock adequados, utilizar o circuito eliminador de ruído.

P4- Colocar a linha de controle X em "0" e aplicar pulsos de clock, monitorando a sequência de contagem através do display (RI-IIIa).

P5- Colocar a linha de controle X em "1" e aplicar pulsos de clock, monitorando a sequência de contagem através do display (RI-IIIb).

P6- Utilizando flip-flops JK sensíveis à borda de subida (CI 4027), montar o contador assíncrono a seguir. A sequência de contagem será monitorada pelo display de 7 segmentos. Para isso utiliza-se o CI 7447 (RI-IV).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090531244abb31ed38db4dc4%2Fcrop_1_1783546300617.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IM0IrZGF2UH%2B9PKsGYTi0H8SWBQ%3D&Expires=1784151100' alt='OCR图片'/></div>

<div align="center">

Obs: Para fornecer pulsos de clock adequados, utilizar o circuito eliminador de ruído.

</div>

## Questões

Q1. Caracterizar contadores assíncronos.

Q2. Quantos flip-flops são necessários para construir um contador de módulo 64?

Q3. Um contador assíncrono de módulo 16 pode ser utilizado como um divisor de frequência por 16? Justifique.

Q4. Utilizando flip-flops JK sensíveis à borda de subida, implementar um contador assíncrono decrescente módulo 8. Explicar o seu funcionamento.

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

Relatório Imediato da Experiência 9.1

Contadores Assincronos

## I - Contador Assíncrono Crescente Módulo 16

Utilizou-se o circuito a seguir, através do qual, a partir do estado inicial 0, aplicaram-se pulsos de clock e verificou-se a sequência de contagem, na base binária, através de leds.

Circuito lógico utilizado

<table border="1"><tr><td></td><td>Q3</td><td>Q2</td><td>Q1</td><td>Q0</td></tr><tr><td>Estado inicial</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Após 1° CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 2° CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 3° CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 4° CK</td><td></td><td></td><td></td><td></td></tr><tr><td rowspan="10"></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td>Após 14° CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 15° CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 16° CK</td><td></td><td></td><td></td><td></td></tr></table>

## II - Contador Assíncrono Decrescente Módulo 16

Utilizou-se circuito a seguir, através do qual, a partir do estado inicial 15, aplicaram-se pulsos de clock e verificou-se a sequência de contagem, na base binária, através de leds.

<table border="1"><tr><td></td><td>Q3</td><td>Q2</td><td>Q1</td><td>Q0</td></tr><tr><td>Estado inicial</td><td>1</td><td>1</td><td>1</td><td>1</td></tr><tr><td>Após 1º CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 2º CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 3º CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 4º CK</td><td></td><td></td><td></td><td></td></tr><tr><td rowspan="10">·
·
·</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td>Após 14º CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 15º CK</td><td></td><td></td><td></td><td></td></tr><tr><td>Após 16º CK</td><td></td><td></td><td></td><td></td></tr></table>

Circuito lógico utilizado

## III- Contador Assíncrono UP-DOWN Módulo 8

a) Utilizou-se o circuito a seguir, através do qual, colocando-se o controle de modo de contagem (controle X) em nível lógico "0" e aplicando-se pulsos de clock, verificou-se a sequência de contagem através do display.

<table border="1"><tr><td></td><td>Controle X</td><td>Dígito Display</td></tr><tr><td>Estado inicial</td><td>0</td><td></td></tr><tr><td>Após 1º CK</td><td>0</td><td></td></tr><tr><td>Após 2º CK</td><td>0</td><td></td></tr><tr><td>Após 3º CK</td><td>0</td><td></td></tr><tr><td>Após 4º CK</td><td>0</td><td></td></tr><tr><td>Após 5º CK</td><td>0</td><td></td></tr><tr><td>Após 6º CK</td><td>0</td><td></td></tr><tr><td>Após 7º CK</td><td>0</td><td></td></tr><tr><td>Após 8º CK</td><td>0</td><td></td></tr></table>

Circuito lógico utilizado

b) Utilizando-se o mesmo circuito, alterando-se o controle de modo de contagem (controle X) para nível lógico "1" e aplicando-se pulsos de clock, verificou-se a sequência de contagem através do display.

<table border="1"><tr><td></td><td>Controle X</td><td>Dígito Display</td></tr><tr><td>Estado inicial</td><td>1</td><td></td></tr><tr><td>Após 1º CK</td><td>1</td><td></td></tr><tr><td>Após 2º CK</td><td>1</td><td></td></tr><tr><td>Após 3º CK</td><td>1</td><td></td></tr><tr><td>Após 4º CK</td><td>1</td><td></td></tr><tr><td>Após 5º CK</td><td>1</td><td></td></tr><tr><td>Após 6º CK</td><td>1</td><td></td></tr><tr><td>Após 7º CK</td><td>1</td><td></td></tr><tr><td>Após 8º CK</td><td>1</td><td></td></tr></table>

## IV - Contador Assíncrono com CI 4027

Utilizou-se o circuito a seguir, através do qual aplicaram-se pulsos de clock e monitorou-se a sequência de contagem através do display

<table border="1"><tr><td></td><td>Q2</td><td>Q1</td><td>Q0</td></tr><tr><td>Estado inicial</td><td>0</td><td>0</td><td>0</td></tr><tr><td>Após 1º CK</td><td></td><td></td><td></td></tr><tr><td>Após 2º CK</td><td></td><td></td><td></td></tr><tr><td>Após 3º CK</td><td></td><td></td><td></td></tr><tr><td>Após 4º CK</td><td></td><td></td><td></td></tr><tr><td>Após 5º CK</td><td></td><td></td><td></td></tr><tr><td>Após 6º CK</td><td></td><td></td><td></td></tr><tr><td>Após 7º CK</td><td></td><td></td><td></td></tr><tr><td>Após 8º CK</td><td></td><td></td><td></td></tr></table>
