---
title: Exp4.2 - Tabela-Verdade de um Circuito Combinacional
description: Implementar um circuito combinacional usando portas lógicas.
---

## Objetivos

- Implementar um circuito combinacional usando portas lógicas.

- Familiarização com montagens de circuitos lógicos.

- Preencher a tabela-verdade de um circuito combinacional.

- Vivenciar na prática, a aplicação de conceitos teóricos.

## Preparação

## Conceitos

## 1) Níveis Lógicos TTL

Para colocar o nível lógico "1" na entrada de uma porta lógica, ligar o terminal correspondente ao (+) da fonte de alimentação de 5Vcc.

Para colocar o nível lógico "0" na entrada de uma porta lógica, ligar o terminal correspondente ao (-) da fonte de alimentação (terra do circuito lógico).

## 2) Escrevendo uma Expressão lógica

A expressão lógica $ S=\overline{A}.\overline{B}.C+\overline{A}.B.C+A.\overline{B}.C $ está escrita como uma soma de produtos. No exemplo abaixo, para escrever a expressão lógica como soma de produtos, utilizam-se todas as linhas onde as células da coluna S possuem o conteúdo "1".

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090156478ae3f24f31f440ca%2Fcrop_1_1783533422610.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YsNwDjULkZw45vkDPFHap7G1lJA%3D&Expires=1784138222' alt='OCR图片'/></div>

Da primeira linha marcada, escreve-se o produto $ \overline{{A}}.\overline{{B}}.C $ , pois $ A=0 $ , $ B=0 $ e $ C=1 $ . As variáveis iguais a zero recebem uma barra sobre elas. Da segunda linha, escreve-se $ \overline{{A}}.B. C $ , pois $ A=0 $ , $ B=1 $ e $ C=1 $ e da tercera linha, $ A.\overline{{B}}.C $ , pois $ A=1 $ , $ B=0 $ e $ C=1 $ .

A expressão se completa através da operação OU (+) que efetua a soma dos produtos.

$$
S = \overline {{\mathrm {A}}}. \overline {{\mathrm {B}}}. C + \overline {{\mathrm {A}}}. B. C + A. \overline {{\mathrm {B}}}. C
$$

## Metodologia

M1- Para estudar o comportamento de um certo circuito lógico combinacional, o circuito será implementado, e o seu funcionamento será registrado em uma tabela, denominada tabela-verdade do circuito. O resultado será utilizado para escrever a expressão lógica do circuito.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão de 5V</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>1</td><td>CI 7432</td></tr><tr><td>1</td><td>LED</td></tr><tr><td>1</td><td>resistor de 1kΩ</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos 0,51 mm∅</td></tr></table>

P1- Construir o circuito seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090156478ae3f24f31f440ca%2Fcrop_1_1783533422678.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=maEHna8AddCGtvx310bS6sc5vDU%3D&Expires=1784138222' alt='OCR图片'/></div>

P2- Variar os estados lógicos das entradas A, Be C conforme a tabela. Verificar o estado lógico na saída S com um multimetro ou um provador lógico. (RI-I)

P3- Elaborar a expressão lógica do circuito a partir da tabela obtida. (RI-II)

P4- Escrever no próprio circuito, em cada uma das saídas, a expressão lógica naquele ponto. Compare a expressão obtida na última saída do circuito com a obtida no item P3. Faça um comentário a respeito. (RI-III)

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

Relatório Imediato da Experiência 4.2

Tabela-Verdade de um Circuito Combinacional

## I - Tabela-Verdade

A tabela abaixo mostra o comportamento da saída S do circuito em relação às combinações lógicas das entradas A, B e C.

Circuito lógico utilizado

<table border="1"><tr><td>A</td><td>B</td><td>C</td><td>S</td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></table>

## II - Expressão Lógica

A expressão lógica do circuito foi escrita usando-se as regras da lógica positiva, onde as linhas da tabela-verdade, referentes à saída com nível lógico "1", aparecem na expressão como parcelas "AND" (E) que se relacionam entre si através da operação OR (OU). Em algumas parcelas, as variáveis A, B ou C aparecem barradas. Isto acontece quando, na tabela-verdade, o conteúdo das células referentes a elas estão preenchido com "0".

## III - Expressão Lógica Simplificada

No próprio circuito, escrevendo-se a expressão em cada uma das saídas das portas lógicas, na última porta obtém-se a expressão:

S = ___

Comentário: ___

---
- https://ocr.z.ai/