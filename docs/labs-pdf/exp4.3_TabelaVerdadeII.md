---
title: Exp4.3 - Circuito Lógico de uma Tabela Verdade
description: Elaborar o circuito de comutação de uma tabela verdade.
---

## Objetivos

- Elaborar o circuito de comutação de uma tabela verdade.

- Preencher a tabela-verdade de um circuito combinacional.

- Familiarização com montagens de circuitos lógicos.

- Vivenciar na prática, a aplicação de conceitos teóricos.

## Preparação

## Conceitos

## 1) Tabela-verdade x expressão lógica

Quando se escreve a expressão lógica diretamente da tabela-verdade, a expressão obtida não se encontra da forma adequada para implementar o circuito digital referente a ela. É necessário simplificá-la.

## 2) Simplificação de uma expressão lógica

A simplificação pode ser feita usando os Postulados, Propriedades e Teoremas ou através de métodos específicos como o método de Veitch-Karnaugh.

Exemplo: Simplificação usando as propriedades e postulados.

Supondo que um sistema digital apresente a tabela-verdade abaixo, onde se verifica a seguinte expressão:

$$
S = A. \bar {B}. C. + \bar {A}. \bar {B}. C + \bar {A}. B. \bar {C} + \bar {A}. B. C
$$

As variáveis comuns devem ser colocadas em evidência para aplicação dos postulados. Expressão simplificada

<table border="1"><tr><td>A</td><td>B</td><td>C</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709020254a3b0bf2ef6054342%2Fcrop_1_1783533789883.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=vneoVjoE7jUR38qMfNLYwzz4MG4%3D&Expires=1784138589' alt='OCR图片'/></div>

## 3) Implementando o circuito digital

A expressão simplificada fornece as informações necessárias para implementar o circuito digital, assim as barras significam a necessidade de se usar portas inversoras para complementar aquelas variáveis, os pontos (.) significam uso de portas AND (E) e os sinais de adição (+), significam uso de uma ou mais portas OR (OU).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709020254a3b0bf2ef6054342%2Fcrop_2_1783533789938.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3e45zkL7GhDTlCbw5aSebfaqV1o%3D&Expires=1784138589' alt='OCR图片'/></div>

## Metodologia

M1- Para praticar a implementação de um circuito lógico a partir de uma tabela-verdade será solicitado escrever a expressão lógica de uma determinada tabela-verdade, a simplificação da expressão e a partir da expressão obtida, determinar as portas lógicas que irão compor o circuito.

M2- Em seguida, o circuito será testado para verificar se o seu funcionamento corresponde com o esperado.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão para 5V</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>1</td><td>CI 7432</td></tr><tr><td>1</td><td>LED</td></tr><tr><td>1</td><td>resistor de 1kΩ</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos 0,51 mm∅</td></tr></table>

<div align="center">

Praticando

</div>

P1- Supondo que um sistema seja representado pela tabela-verdade seguinte, escrever a expressão lógica do sistema.(RI-I).

<table border="1"><tr><td>A</td><td>B</td><td>C</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td></tr></table>

P2- Simplificar a expressão. (RI-II)

P3- Desenhar os diagrams de pinagem dos Cls que serão utilizados.(RI-III)

P4- Elaborar o circuito lógico a partir da expressão obtida. (RI-IV)

P5- Fixar os Cls sobre a matriz de contatos de forma adequada.

P6- Conectar os pinos de alimentação dos Cls à fonte de 5V. Os pinos 7 ao conector negativo (-) e os pinos 14 ao positivo (+) da fonte.

P7- Completar as ligações conforme o diagrama elaborado em P4. (RI-IV)

P8- Ligar a fonte de alimentação.

P9- Aplicar níveis lógicos às entradas A, B e C do circuito. Para cada condição de entrada, verificar o estado lógico da saída S através de um voltimetro ou provador lógico. (RI-V)

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

Circuito Lógico de uma Tabela Verdade

## I-Expressão lógica

Analisando as linhas da tabela-verdade apresentada, chega-se à expressão lógica:

<table border="1"><tr><td>A</td><td>B</td><td>C</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td></tr></table>

S=

## II- Expressão lógica simplificada

Aplicando-se propriedades e postulados, tem-se a expressão lógica simplificada.

S=

## III - Diagramas de conexão

Os diagramas abaixo mostram como identificar os pinos dos CIs que serão utilizados na montagem.

## IV- Circuito lógico

Diagrama esquemático do circuito elaborado a partir da expressão simplificada.

## V - Tabela verdade obtida experimentalmente

Ao terminar a montagem, a alimentação foi ligada e iniciou-se o teste de lógica do circuito. Variando-se os níveis lógicos das entradas A, B e C conforme as linhas da tabela, obteve-se o seguinte resultado:

<table border="1"><tr><td>A</td><td>B</td><td>C</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td></td></tr></table>

Conclusao:

---
- https://ocr.z.ai/