---
title: Exp7.3 - CI Flip-Flop JK Master-Slave
description: Verificar o funcionamento de circuitos divisores de frequência, que utilizam flip-flop JK master-slave.
---

## Objetivos

- Conhecer e ensaiar o CI 7476 da familia lógica TTL.

- Conhecer e ensaiar o CI 4027 da familia lógica CMOS.

- Verificar a atuação dos controles denominados Preset e Clear.

- Verificar o funcionamento de circuitos divisores de frequência, que utilizam flip-flop JK master-slave.

## Preparação

## Conceitos

## 1) CI 7476

Os flip-flops JK master-slave são os mais amplamente utilizados e, é claro, existem na forma de circuitos integrados.

Um bom exemplo de flip-flop JK master-slave da familia lógica TTL é o CI 7476. Este CI contém 2 flip-flops JK master-slave sensíveis à borda de descida do pulso de CK.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_1_1783537045128.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Wa%2Bs8IihXCCKT6R1XBQTPa6oTD8%3D&Expires=1784141845' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_2_1783537045181.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EYfW6uZDnt9V80Bzm7niPk5tzlY%3D&Expires=1784141845' alt='OCR图片'/></div>

Pino 5 - Vcc

Pino 13 - Gnd

Cada flip-flop deste CI possui os controles assíncronos denominados Preset (Pr) e CLear (Clr). No CI 7476 estes controles são ativos em nível lógico "0" e atuam conforme a seguinte tabela:

<table border="1"><tr><td>J</td><td>K</td><td>CK</td><td>Pr</td><td>Clr</td><td>Qf</td><td>$\overline{Q}_{f}$</td></tr><tr><td>X</td><td>X</td><td>X</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>X</td><td>X</td><td>X</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td></td><td>1</td><td>1</td><td>Qa</td><td>$\overline{Q}_{a}$</td></tr><tr><td>0</td><td>1</td><td></td><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td></td><td>1</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td></td><td>1</td><td>1</td><td>$\overline{Q}_{a}$</td><td>Qa</td></tr></table>

Quando o controle assíncrono Preset estiver em nível lógico "0", a saída Q vai assumir obrigatoriamente nível lógico "1", qualquer que sejam as condições de J, Ke CK.

Quando o controle assíncrono Clear estiver em nível lógico "0" a saída Q vai assumir obrigatoriamente nível lógico "0", qualquer que sejam as condições de J, K e CK.

Para obedecer a tabela-verdade do flip-flop JK, os controles Preset e Clear devem ser mantidos em nível lógico "1".

## 2) CI 4027

Um bom exemplo de flip-flop JK master-slave da familia lógica CMOS é o CI 4027. Este CI contém 2 flip-flops sensíveis a borda de subida do pulso de CK.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_1_1783537045196.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=cjyqHXPBQHOVT3PuXoisiZR0RYY%3D&Expires=1784141845' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_2_1783537045203.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VydfMVkMCBTGmdowCbnAxG7SCX0%3D&Expires=1784141845' alt='OCR图片'/></div>

Pino 16 - Vcc

Pino 8 - Gnd

Cada flip-flop deste CI possui os controles assíncronos denominados SET e RESET. No CI 4027 estes controles são ativos em nível lógico "1" e atuam conforme a seguinte tabela:

<table border="1"><tr><td>J</td><td>K</td><td>CK</td><td>Set</td><td>Reset</td><td>Qf</td><td>$\overline{Q}_{f}$</td></tr><tr><td>X</td><td>X</td><td>X</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>X</td><td>X</td><td>X</td><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td></td><td>0</td><td>0</td><td>Qa</td><td>$\overline{Q}_{a}$</td></tr><tr><td>0</td><td>1</td><td></td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td></td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td></td><td>0</td><td>0</td><td>$\overline{Q}_{a}$</td><td>Qa</td></tr></table>

## 3) Divisores de frequência

Em certas aplicações práticas, necessitamos de circuitos divisores de frequência. Utilizando flip-flop JK master-slave, podemos construir este circuito da seguinte forma:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_1_1783537045208.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qdrRuJd0LiqlvZshZ2TDE9zuoNo%3D&Expires=1784141845' alt='OCR图片'/></div>

<div align="center">

Exemplo de um Circuito Divisor de Frequência

</div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_2_1783537045231.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YZ%2BYxmMxF72QG8gl%2BIjpF%2BKjhHE%3D&Expires=1784141845' alt='OCR图片'/></div>

<div align="center">

Diagrama de Tempos do Divisor de Frequência

</div>

## Metodologia

M1- Serão realizados testes em um dos flip-flops do CI 7476. Para tal, será colocada uma sequência de combinações lógicas nas entradas J e K, nos sinais de controle Preset e Clear e no sinal de Clock e serão observados e anotados os níveis lógicos de saída.

M2- Será realizado testes com o CI 4027 da mesma forma que CI 7476.

M3- O ensaio experimental de circuitos divisores de frequência será feito através da montagem de divisores de frequência por 4 utilizando-se os CIs 7476 e 4027. A frequência de entrada será fornecida por um gerador de onda quadrada com saída em nível TTL. Um osciloscópio será utilizado para medir o período da forma de onda na saída.

## Relação de Material:

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>fonte de alimentação de +5V</td></tr><tr><td>1</td><td>gerador de onda quadrada com nível lógico TTL</td></tr><tr><td>1</td><td>osciloscópio</td></tr><tr><td>1</td><td>CI 7400</td></tr><tr><td>1</td><td>CI 7476</td></tr><tr><td>1</td><td>CI 4027</td></tr><tr><td>3</td><td>LEDs</td></tr><tr><td>5</td><td>resistores de 1kΩ</td></tr><tr><td>3</td><td>chaves H-H</td></tr><tr><td></td><td>fios rígidos de 0,51 mm∅</td></tr></table>

<div align="center">

Praticando

</div>

P1- Utilizando o CI 7476, avaliar a tabela-verdade do flip-flop JK master-slave e a atuação dos controles Preset e Clear. Seguir a sequência de passos mostrada na tabela (RI-I) anotando os níveis lógicos das saídas $ Q e \overline{Q} $ .

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_1_1783537045237.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iLPiqO4aUe4p8y2B7i0sf3bZH%2Fs%3D&Expires=1784141845' alt='OCR图片'/></div>

Obs: Para fornecer pulsos de CK adequados, utilizar o circuito eliminador de ruído (veja a experiência 7.2).

P2- Utilizando o CI 4027, avaliar a tabela-verdade do flip-flop JK master-slave e a atuação dos controles Set e Reset. Seguir a sequência de passos mostrada na tabela (RI-II) anotando os níveis lógicos das saídas $ Q e \overline{Q} $ .

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_1_1783537045254.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=RaJQCATdZmbHQg1Abz%2BGQo8ovMw%3D&Expires=1784141845' alt='OCR图片'/></div>

P3- Montar um circuito divisor de frequência por 4 (utilizando o CI 7476) conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_2_1783537045260.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=k8EVeakaBfLge8rmxfb45YJQiRU%3D&Expires=1784141845' alt='OCR图片'/></div>

P4- Ajustar o gerador de onda quadrada (com nível TTL) na frequência de 4KHz. Utilizando o osciloscópio medir as formas de onda nas saídas $ Q_{0} $ e $ Q_{1}. $ (RI-IIIa)

P5- Montar um circuito divisor de frequência por 4 (utilizando o CI 4027) conforme o diagrama dado a seguir:

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_3_1783537045268.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=27gmLBYMVTj00PGiHn%2BApnZKlks%3D&Expires=1784141845' alt='OCR图片'/></div>

P6- Ajustar o gerador de onda quadrada (com nível TTL) na frequência de 4KHz. Utilizando o osciloscópio medir as formas de onda nas saídas $ Q_{0} $ e $ Q_{1}. $ (RI-IIIb)

## Questões

Q1. Utilizando CIs 4027, implementar um circuito divisor de frequência por 8.

Q2. Utilizando Cls 7476, implementar um circuito divisor de frequência por 6.

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

## Relatório Imediato Experiência 7.3

CI 7476 e CI 4027 (Flip-Flop JK Master-Slave)

## I - Ensaio do CI 7476

Para analisar o CI 7476, utilizou-se a montagem a seguir, através da qual, variando-se as combinações de entrada dos controles Preset (Pr), Clear (Clr) e comutando-se adequadamente o controle CK (conforme a tabela), foram observados os estados lógicos nas saídas.

Circuito lógico utilizado

<table border="1"><tr><td>J</td><td>K</td><td>CK</td><td>Pr</td><td>Clr</td><td>Q</td><td>Q</td></tr><tr><td>0</td><td>1</td><td></td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td></td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>0</td><td></td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td></td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td></td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>X</td><td>X</td><td>X</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>X</td><td>X</td><td>X</td><td>0</td><td>1</td><td></td><td></td></tr></table>

## II - Ensaio do CI 4027

Para analisar o CI 4027, utilizou-se a montagem a seguir, através da qual, variando-se as combinações de entrada, dos controles Set, Reset e comutando-se adequadamente o controle CK (conforme a tabela), foram observados os estados lógicos nas saídas.

Circuito lógico utilizado

<table border="1"><tr><td>J</td><td>K</td><td>CK</td><td>Set</td><td>Reset</td><td>Q</td><td>Q</td></tr><tr><td>1</td><td>0</td><td></td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td></td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>1</td><td></td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>0</td><td>0</td><td></td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>0</td><td></td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>X</td><td>X</td><td>X</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>X</td><td>X</td><td>X</td><td>1</td><td>0</td><td></td><td></td></tr></table>

## III - Divisores de Frequência

a) Utilizando o CI 7476, foi montado o circuito a seguir:

Circuito lógico utilizado

Ajustou-se o gerador de onda quadrada na frequência de 4KHz e com o osciloscópio, mediu-se o período da forma de onda na saída $ Q_{0} $ e na saída $ Q_{1}. $

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_1_1783537045280.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NKTmqsBkPE%2BSvo3KtlbOhl2BEzU%3D&Expires=1784141845' alt='OCR图片'/></div>

b) Utilizando o CI 4027 foi montado o circuito a seguir:

## Circuito lógico utilizado

Ajustou-se o gerador de onda quadrada na frequência de 4KHz e com o osciloscópio, mediu-se o período da forma de onda na saída $ Q_{0} $ e na saída $ Q_{1}. $

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709025709dc857192e160417e%2Fcrop_1_1783537045290.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=AxjAXjDYgLvV18v1Kn2%2FpShSEJY%3D&Expires=1784141845' alt='OCR图片'/></div>

Conclusão:___

