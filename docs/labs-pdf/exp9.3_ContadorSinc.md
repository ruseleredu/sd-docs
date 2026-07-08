---
title: Exp9.3 - Contadores Síncronos
description: Projetar e ensaiar contadores sincronos.
---

## Objetivos

- Projetar e ensaiar contadores sincronos.

Preparação

## Conceitos

O projeto de um contador sincrono corresponde a determinar o circuito combinacional que irá determinar os estados futuros (entradas dos flip-flops) a partir dos estados atuais (saídas dos flip-flops). Deve-se então, conhecer a sequência de contagem desejada e o tipo de flip-flop utilizado a fim de se projetar o circuito combinacional.

O contador sincrono é mais versátil que o contador assíncrono, pois permite elaborar qualquer sequência de contagem e admite uma frequência maior dos pulsos de clock.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_1_1783546521437.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KepgjRJs%2B4DI3QXGTiONOx7cars%3D&Expires=1784151321' alt='OCR图片'/></div>

## Metodologia

M1- Será montado e ensaiado um contador sincrono com flip-flop tipo T. Estes flip-flops serão obtidos a partir de flip-flops JK master-slave (CI7476).

M2- Fornecendo pulsos de clock, será avaliada experimentalmente a sequência de contagem através de um display de 7 segmentos.

M3- Em seguida, será projetado um contador sincrono crescente módulo 10 com flip-flops tipo T, acompanhando as seguinte etapas de projeto:

a) Obtenção da tabela-verdade do contador sincrono desejado

b) Elaboração dos Mapas de Veitch-Karnaugh para obtenção das equações de saída do circuito combinacional.

c) Interligação do circuito sequencial com o combinacional.

M4- Uma vez montado o circuito completo, serão aplicados pulsos de clock e observada a sequência de contagem através do display.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>fonte de alimentação de +5V</td></tr><tr><td>1</td><td>CI 7400</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>2</td><td>CI 7476</td></tr><tr><td>1</td><td>CI 7447</td></tr><tr><td>1</td><td>CI 7432</td></tr><tr><td>1</td><td>display de 7-segmentos tipo anodo comum</td></tr><tr><td>7</td><td>resistores de 330Ω</td></tr><tr><td>2</td><td>resistores de 1kΩ</td></tr><tr><td>1</td><td>chave H-H</td></tr><tr><td>-</td><td>fios rígidos de 0,51 mm∅</td></tr></table>

## Praticando

P1- Montar o contador sincrono conforme o diagrama a seguir. Aplicar pulso de clock e anotar a sequência de contagem (RI-I).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_1_1783546521454.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=nCq%2BfRByvlwDQYlNTTu6OzvMNLk%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_2_1783546521461.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0O1KHPNtFxoGA6ycBY3D5XkBdmc%3D&Expires=1784151321' alt='OCR图片'/></div>

Obs: Para fornecer pulsos de clock adequados, utilizar o circuito eliminador de ruído.

P2- Projetar, montar e verificar o funcionamento de um contador sincrono crescente de módulo 10 com flip-flops tipo T (RI-II).

## Questões

Q1. Projetar um contador de década sincrono com flip-flops tipo D.

Q2. Forneça o diagrama de estados completo de um contador sincrono crescente módulo 10 que utiliza flip-flops tipo T (devem-se considerar os estados secundários).

Q3. Projetar um contador sincrono decrescente módulo 8 com flip-flops JK.

Q4. Pesquisar as características principais do CI 74190 (contador sincrono bi-directional).

Q5. Avaliar a sequência de contagem do circuito a seguir. Adotar estado inicial = 0.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_1_1783546521468.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ianrAH2RF25wO4suOsjWcVi2ayY%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_2_1783546521473.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TqzXoF4eZUJY7L%2BHBAO2cFgUXMg%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_3_1783546521478.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3bMTI6X9ps4E7rSZTkhhgUCZfFk%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_4_1783546521482.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iQFu4EZK%2BHOts1loap%2Fy2XzkwwM%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_5_1783546521494.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ZoToYPopNwQbYkb3Qw%2BrMELahWA%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_6_1783546521500.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6QqFP%2BwAk%2FApofA4y4Vvit%2Fa6bw%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_7_1783546521506.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=x5Yf4TL7knag6fzE%2BJy%2Fceg4Jm4%3D&Expires=1784151321' alt='OCR图片'/></div>

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td></td><td>Nome</td><td>N°</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

Relatório Imediato da Experiência 9.3

Contadores Sincronos

## I - Contador Síncrono com Flip-Flops Tipo T

Utilizou-se o circuito a seguir, no qual os flip-flops tipo T foram montados através de Flip- Flops tipo JK Master-Slave com as entradas curto-circuitadas.

Aplicando-se pulsos de clock, verificou-se a seguinte sequência de contagem através do display:

<table border="1"><tr><td></td><td>Display</td></tr><tr><td>Estado inicial</td><td></td></tr><tr><td>Após 1º CK</td><td></td></tr><tr><td>Após 2º CK</td><td></td></tr><tr><td>Após 3º CK</td><td></td></tr><tr><td>Após 4º CK</td><td></td></tr><tr><td>Após 5º CK</td><td></td></tr><tr><td>Após 6º CK</td><td></td></tr><tr><td>Após 7º CK</td><td></td></tr><tr><td>Após 8º CK</td><td></td></tr><tr><td>Após 9º CK</td><td></td></tr></table>

Circuito lógico utilizado

## II - Projeto de um Contador Síncrono Módulo 10 com Flip-Flop Tipo T

<div align="center">

a) Tabela-verdade do contador.

</div>

<table border="1"><tr><td rowspan="2">Estado atual</td><td rowspan="2">Estado futuro</td><td colspan="4">Saídas atual dos Flip-Flops</td><td colspan="4">Saídas futuras dos Flip-Flops</td><td colspan="4">Entrada dos Flip-Flops Tipo T</td></tr><tr><td>Q3</td><td>Q2</td><td>Q1</td><td>Q0</td><td>Q3</td><td>Q2</td><td>Q1</td><td>Q0</td><td>T3</td><td>T2</td><td>T1</td><td>T0</td></tr><tr><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

b) Mapas de Veitch-Karnaugh para obtenção das equações de saída.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_1_1783546521513.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IVzWsPsle9d%2BOqIm6Hq65mzrx7k%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_2_1783546521525.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=M6coowOvby4skDkFA9iPcNWlZZg%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_3_1783546521531.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=CYFlSryza1ZU3dFmuNMOxl7p6rg%3D&Expires=1784151321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090535041896178561324c29%2Fcrop_4_1783546521536.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=IzOvQi5Om1UCI3uTHOiJrHMbC5w%3D&Expires=1784151321' alt='OCR图片'/></div>

c) Desenho do circuito
