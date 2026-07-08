---
title: Exp7.2 - Flip-Flop JK Master-Slave
description: Flip-Flop JK Master-Slave, Flip-Flop Tipo D e Flip-Flop Tipo T
---

# Experiência 7.2: Flip-Flop JK Master-Slave, Flip-Flop Tipo D e Flip-Flop Tipo T


## Objetivos

- Comprovar experimentalmente o funcionamento do flip-flop JK master-slave

- Comprovar experimentalmente o funcionamento do flip-flop tipo D

- Comprovar experimentalmente o funcionamento do flip-flop tipo T

## Preparação

## Conceitos

## 1) Flip-Flop JK

O flip-flop JK é um flip-flop RS aprimorado, onde o erro lógico foi eliminado. Veremos na figura a seguir, como obter o flip-flop JK a partir do flip-flop RS:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_1_1783536772860.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SeuISD5avgX2Frk8g7W20SgxpAg%3D&Expires=1784141572' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_2_1783536772944.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6krWtcFhJAM9jZ6QFkuHkIST7BE%3D&Expires=1784141572' alt='OCR图片'/></div>

Com CK=0, o bloco flip-flop RS fica "travado", ou seja, na saída do flip-flop é mantido o estado lógico anteriormente armazenado, não dependendo das combinações das entradas J e K. Com CK=1, verifica-se a seguinte tabela-verdade:

<table border="1"><tr><td>CK</td><td>J</td><td>K</td><td>Qf</td></tr><tr><td>0</td><td>X</td><td>X</td><td>Qa</td></tr><tr><td rowspan="4">1</td><td>0</td><td>0</td><td>Qa</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>$\cdot$</td></tr></table>

Deve-se ressaltar que enquanto o pulso de CK estiver em nível lógico "1" e mantivermos J=K=1, a complementação das saídas e a realimentação às portas lógicas de entrada vão provocar sucessivas complementações (oscilação na saída) o que ainda torna inviável a utilização destes estados na entrada.

## 2) Flip-Flop JK Master-Slave

Com o objetivo de eliminar a oscilação verificada no flip-flop JK quando temos J=K=CK=1, foi elaborado o seguinte circuito.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_1_1783536772950.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zeQUBKvn3qo%2B4PV2yCQDxyjDU08%3D&Expires=1784141572' alt='OCR图片'/></div>

Este circuito representa um flip-flop denominado JK Master-Slave (JK Mestre Escravo).

O flip-flop JK Master-Slave é um circuito sensível à borda de descida do pulso de CK, ou seja, somente na transição de "1" para "0" de CK, verifica-se a tabela-verdade do flip-flop JK:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_2_1783536772958.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xPD7%2BoNMBlPbU7bMRiGrsaJVy%2BE%3D&Expires=1784141572' alt='OCR图片'/></div>

Flip-Flop JK Master-Slave

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_3_1783536772978.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=C1vNJPDhWA%2BR9XEsvV3%2FfiGG1K8%3D&Expires=1784141572' alt='OCR图片'/></div>

Tabela-Verdade

## 3) Flip-Flops Tipo D e Tipo T

A partir do flip-flop JK master-slave, podemos construir os seguintes flip-flops:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_4_1783536772986.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3rR6Cq7or9ohQnFyAgPyJJh4kvY%3D&Expires=1784141572' alt='OCR图片'/></div>

Flip-Flop Tipo D

<table border="1"><tr><td>D</td><td>Qf</td><td>$\overline{{Q}}_{f}$</td></tr><tr><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></table>

Tabela-Verdade


<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_1_1783536773000.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EN6V5gMpMTEP79OIPbeoA8EalJE%3D&Expires=1784141573' alt='OCR图片'/></div>

<div align="center">

Flip-Flop Tipo T

</div>

<table border="1"><tr><td>T</td><td>Qf</td><td>$\overline{Q}_{f}$</td></tr><tr><td>0</td><td>Qa</td><td>$\overline{Q}_{a}$</td></tr><tr><td>1</td><td>$\overline{Q}_{a}$</td><td>Qa</td></tr></table>

<div align="center">

Tabela-Verdade

</div>

## Metodologia

M1- Será implementado um flip-flop JK master-slave com portas lógicas.

M2- Obedecendo a uma sequência predeterminada de níveis lógicos nas entradas J e K e comutando o sinal de controle CK, serão verificados os estados lógicos das saídas dos estágios mestre e escravo.

M3- A partir do flip-flop JK master-slave será implementado um flip-flop tipo D e verificado experimentalmente o uso da tabela-verdade.

M4- A partir do flip-flop JK master-slave será implementado um flip-flop tipo T e verificado experimentalmente o usa da tabela-verdade.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>fonte de alimentação +5V</td></tr><tr><td>3</td><td>CI 7400</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>5</td><td>LEDs</td></tr><tr><td>7</td><td>resistores de 1kΩ</td></tr><tr><td>1</td><td>chave H-H</td></tr><tr><td>-</td><td>fios rígidos de 0,51 mm∅</td></tr></table>

<table border="1"><tr><td>Praticando</td></tr></table>

P1- Montar o circuito eliminador de ruído conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_1_1783536773013.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8mfc%2FH6Uzfu89EHl2SJ4kNMcUlc%3D&Expires=1784141573' alt='OCR图片'/></div>

Obs: Este circuito tem a finalidade de eliminar o efeito bounce gerado por chaves de contatos mecânicos.

P2- Montar o circuito do flip-flop JK master-slave conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_2_1783536773020.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=SCRBEbJstZ%2Be8pT2OCKNh21Lc3Y%3D&Expires=1784141573' alt='OCR图片'/></div>

P3- Variar os níveis lógicos de entrada segundo a sequência de passos dada (RI-I). Observar e anotar os estados lógicos das saídas do estágio mestre (Qme $ \overline{{Q}} $ m) e do estágio escravo Qe $ \overline{{Q}} $ com provador lógico ou multimetro.

Obs: Utilizando o circuito eliminador de ruído, comutar o controle CK sempre após ajustar a combinação de J e K.

P4- A partir do flip-flop JK master-slave, implementar o circuito do flip-flop tipo D conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_1_1783536773031.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mhEqxTDS7lzV9e6i%2B5HnNT2sAyg%3D&Expires=1784141573' alt='OCR图片'/></div>

P5- Variando-se os níveis lógicos de entrada, verificar o estado lógico das saídas através de provador lógico ou multimetro, implementando experimentalmente a tabela-verdade de um flip-flop tipo D (RI-II).

P6- A partir do flip-flop JK master-slave, implementar o circuito do flip-flop tipo T conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_2_1783536773038.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NHMEehdD8JbTqSCADisHMGtv1iY%3D&Expires=1784141573' alt='OCR图片'/></div>

P7- Variando-se os níveis lógicos de entrada, verificar o estado lógico das saídas através de provador lógico ou multimetro, implementando experimentalmente a tabela-verdade de um flip-flop tipo T (RI-III).

## Questões

Q2. Utilizando portas lógicas, implementar um flip-flop JK master-slave sensível à borda de subida do pulso de CK.

Q3. Citar uma aplicação para o flip-flop tipo D.

Q4. Fornecer o circuito com portas lógicas de um flip-flop RS master-slave.


<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

<div align="center">

# Flip-Flop Tipo T

</div>

## I - Flip-Flop JK Master-Slave

Com o objetivo de estudar o funcionamento do flip-flop JK master-slave utilizou-se o circuito a seguir, através do qual, variando-se as combinações de entrada e do controle CK conforme a sequência de passos fornecida na tabela, foram observados os estados lógicos nas saídas através de ___.

Circuito lógico utilizado

<table border="1"><tr><td>Passos</td><td>J</td><td>K</td><td>CK</td><td>QM</td><td>$\overline{{Q}}_{M}$</td><td>Q</td><td>$\overline{{Q}}$</td></tr><tr><td>$1^{\circ}$ Passo</td><td>1</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>$2^{\circ}$ Passo</td><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>$3^{\circ}$ Passo</td><td>0</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td rowspan="10">$\bullet$</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>0</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>$14^{\circ}$ Passo</td><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td></tr></table>

Analisando-se a tabela-verdade experimental e comparando-a com a teórica, chega-se à seguinte conclusão: ___

## II - Flip-Flop Tipo D

Com o objetivo de estudar o funcionamento do flip-flop tipo D, utilizou-se o circuito a seguir, através do qual, variando-se as combinações de entrada e do controle CK conforme a sequência de passos fornecida na tabela, forma observados os estados lógicos nas saídas através de leds.

Circuito lógico utilizado

<table border="1"><tr><td>D</td><td>CK</td><td>Q</td><td>$\overline{Q}$</td></tr><tr><td>0</td><td></td><td></td><td></td></tr><tr><td>1</td><td></td><td></td><td></td></tr></table>

Analisando-se a tabela-verdade experimental e comparando-a com a teórica, chega-se à seguinte conclusão:___

## III - Flip-Flop Tipo T

Com o objetivo de estudar o funcionamento do flip-flop tipo T utilizou-se o circuito a seguir, através do qual, variando-se as combinações de entrada e do controle CK conforme a sequência de passos fornecida na tabela, observou-se os estados lógicos nas saídas através de leds.

Circuito lógico utilizado

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025236e6aac13b556c4212%2Fcrop_1_1783536773066.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YHuFN7amLPn%2BnJ%2BQT58IIugSa64%3D&Expires=1784141573' alt='OCR图片'/></div>

Analisando-se a tabela-verdade experimental e comparando-a com a teórica, chega-se a

seguinte conclusão: ___

---
- https://ocr.z.ai/