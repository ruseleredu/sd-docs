---
title: Exp7.1 - Filp-Flop RS
description: Comprovar experimentalmente o funcionamento do flip-flop RS montado com portas NAND e NOR.
---

## Objetivos

- Comprovar experimentalmente o funcionamento do flip-flop RS montado com portas NAND e NOR.

- Comprovar experimentalmente o funcionamento do flip-flop RS sincrono.

## Preparação

## Conceitos

## 1) Flip-Flop RS

O flip-flop RS possui duas entradas denominadas R (Reset = levar a 0) e S (Set = levar a 1) e duas saídas $ Q e \overline{Q} $ .

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_1_1783536490513.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hxkH09PQHRucXyiaNEGLm9MA5eQ%3D&Expires=1784141290' alt='OCR图片'/></div>

Este circuito pode ser implementado de diversas formas. Nas figuras a seguir, têm-se os possíveis circuitos para um flip-flop RS.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_2_1783536490572.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1HArD%2BjEUmb%2BAtKKgWTs2QOdBuM%3D&Expires=1784141290' alt='OCR图片'/></div>

Flip-Flop RS com Portas Lógicas NOR

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_1_1783536490589.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Hu6TULdQCBS4x5E%2BmilKNlKB3b4%3D&Expires=1784141290' alt='OCR图片'/></div>


A tabela-verdade que mostra o funcionamento deste circuito é apresentada a seguir.

<table border="1"><tr><td>R</td><td>S</td><td>Qi</td></tr><tr><td>0</td><td>0</td><td>Qa</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>$\cdot$</td></tr></table>

<div align="center">

* Erro Lógico

</div>

Obs: Quando R=1 e S=1 tem-se um erro lógico pois, não é possivel setar e resetar um flip-flop ao mesmo tempo.


## 2) Flip-Flop RS Sincrono


Existe também o flip-flop RS sincrono que tem como característica uma terceira entrada denominada pulso de controle, também conhecida como Clock (CK), que é o sinal que faz com que o flip-flop atualize seus estados.

O bloco lógico deste flip-flop e seu circuito montado com portas lógicas são apresentados a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_5_1783536490644.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1Pdcyi9Qmhj1Tl6Nky%2BzpmZg%2Bgw%3D&Expires=1784141290' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_6_1783536490668.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Sb4%2BZCGM7YkdX8%2BYb76UWFiDBPA%3D&Expires=1784141290' alt='OCR图片'/></div>

Com o Clock em nível lógico zero (CK=0) as saídas são mantidas, e com CK=1, o flip-flop funciona de acordo com a tabela-verdade do flip-flop RS, como mostra a tabela a seguir:

<table border="1"><tr><td>CK</td><td>R</td><td>S</td><td>Qf</td></tr><tr><td>0</td><td>X</td><td>X</td><td>Qa</td></tr><tr><td rowspan="4">1</td><td>0</td><td>0</td><td>Qa</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>$\cdot$</td></tr></table>

* Erro Lógico

## Metodologia

M1- Será implementado um flip-flop RS com portas lógicas NAND e NOR.

M2- Obedecendo a uma sequência predeterminada de níveis lógicos de entrada, serão verificados os estados lógicos das saídas $ Q e \overline{Q} $ através de LEDs.

M3- A partir daí, será montada a tabela-verdade experimental e será realizada a comparação com a teoria.

## Relação de material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>fonte de alimentação de +5V</td></tr><tr><td>1</td><td>CI 7400</td></tr><tr><td>1</td><td>CI 7402</td></tr><tr><td>2</td><td>LEDs</td></tr><tr><td>2</td><td>resistores de 1kΩ</td></tr><tr><td>-</td><td>fios rígidos de 0,51 mm∅</td></tr></table>

## Praticando

## P1- Montar o circuito do flip-flop RS com portas NOR conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_1_1783536490693.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VgEhmlaVS85PDfDfO4q3Krau0Ro%3D&Expires=1784141290' alt='OCR图片'/></div>

P2- Variando-se os níveis lógicos de entrada conforme sequência fornecida na tabela (RI-I), verificar o estado lógico das saídas através de provador lógico ou multimetro.


P3- Montar o circuito do flip-flop RS com portas NAND conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_2_1783536490743.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zp%2Bq1Uida3%2F7jLevi36gY0sYdHI%3D&Expires=1784141290' alt='OCR图片'/></div>

<div align="center">

7400

</div>

P4- Variando-se os níveis lógicos de entrada conforme sequência fornecida na tabela (RI-II), verificar o estado lógico das saídas através de provador lógico ou multimetro.

P5- Montar o circuito do flip-flop RS sincrono com portas NAND conforme o diagrama dado a seguir: SR

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709024754700e9e2b90fb4d82%2Fcrop_3_1783536490750.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=yUkd1ojJ%2BrionbelTp%2FyMyqlJHk%3D&Expires=1784141290' alt='OCR图片'/></div>

<div align="center">

7400

</div>

P6- Variando-se os níveis lógicos de entrada conforme sequência fornecida na tabela (RI-III), verificar o estado lógico das saídas através de provador lógico ou multimetro.

## Questões

Q1. O que é um flip-flop ?

Q2. Qual o comportamento de um flip-flop RS sincrono ?

Q3. Como é possível obter-se um flip-flop RS sincrono gatilhável com nível lógico baixo no controle CK?

Q4. O flip-flop RS que utiliza portas lógicas NOR también pode ser sincronizado ? Justifique.

## Projetos

1) Projetar uma memória digital de 4 bits utilizando flip-flop RS sincrono.

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

## Relatório Imediato da Experiência 7.1

Flip-Flop RS

## I - Flip-Flop RS com Portas NOR

Para verificar o funcionamento do flip-flop RS com portas NOR, foi utilizado o circuito a seguir, no qual, variando-se os valores nas entradas ReS conforme as indicações da tabela, foram medidos os níveis lógicos correspondentes nas saídas $ Q e \overline{Q} $ .

Circuito lógico utilizado

<table border="1"><tr><td rowspan="2">Passos</td><td colspan="2">Entradas</td><td colspan="2">Saídas</td></tr><tr><td>R</td><td>S</td><td>Q</td><td>$\overline{Q}$</td></tr><tr><td>1° Passo</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>2° Passo</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>3° Passo</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td rowspan="7">·
·
·</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td></td><td></td></tr><tr><td>11° Passo</td><td>1</td><td>0</td><td></td><td></td></tr></table>

Analisando-se esta tabela e comparando-a com a tabela do flip-flop

RS, chega-se à conclusão de que ___

## II - Flip-Flop RS com Portas NAND

Para verificar o funcionamento do flip-flop RS com portas NAND, foi utilizado o circuito a seguir, no qual, variando-se os valores nas entradas ReS conforme as indicações da tabela, foram medidos os níveis lógicos correspondentes nas saídas $ Q e \overline{Q} $

Circuito lógico utilizado

<table border="1"><tr><td rowspan="2">Passos</td><td colspan="2">Entradas</td><td colspan="2">Saídas</td></tr><tr><td>R</td><td>S</td><td>Q</td><td>$\overline{Q}$</td></tr><tr><td>$1^{\circ}$ Passo</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>$2^{\circ}$ Passo</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>$3^{\circ}$ Passo</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td rowspan="7">·
·
·</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td></td><td></td></tr><tr><td>$11^{\circ}$ Passo</td><td>1</td><td>0</td><td></td><td></td></tr></table>

Analisando-se esta tabela e comparando-a com a tabela do flip-flop RS, chega-se à conclusão de que ___

Comparando-se as tabelas-verdade experimentais dos flip-flops construídos com portas

NAND e NOR, chega-se à conclusão de que ___

## III - Flip-Flop RS Sincrono com Portas NAND

Para verificar o funcionamento do flip-flop RS sincrono com portas NAND, foi utilizado o circuito a seguir, no qual, variando-se os valores nas entradas R e S conforme as indicações da tabela, forma medidos os níveis lógicos correspondentes nas saídas $ Q e \overline{Q} $ .

<table border="1"><tr><td>Passos</td><td>R</td><td>S</td><td>CK</td><td>Q</td><td>$\overline{Q}$</td></tr><tr><td>$1^{\circ}$ Passo</td><td>0</td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>$2^{\circ}$ Passo</td><td>0</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>$3^{\circ}$ Passo</td><td>1</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td rowspan="11">$\cdot$</td><td>1</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>$15^{\circ}$ Passo</td><td>1</td><td>0</td><td>1</td><td></td><td></td></tr></table>

Circuito lógico utilizado

Analisando-se esta tabela e comparando-a com a tabela do flip-flop RS sincrono, chega-se à conclusão de que ___

Fazendo-se uma análise do funcionamento do sinal de Clock, chega-se à conclusão de que

---
- https://ocr.z.ai/