---
title: Exp4.5 - Controle de uma Ponte Rolante
description: Sistema digital para controlar os movimentos de uma ponte rolante.
---
## Objetivos

- Analisar as etapas de elaboração de um circuito combinacional usado para controlar os movimentos de uma ponte rolante.

- Usar a tabela-verdade para descrever a lógica do sistema de controle.

- Implementar o circuito usando portas lógicas.

## Preparação

## Conceitos

## 1) Projeto

Sistema digital para controlar os movimentos de uma ponte rolante.

## a) Descrição do sistema

Deseja-se construir um circuito lógico para controlar os movimentos de uma ponte rolante, que se restringem em movimento para a esquerda e movimento para a direita.

Os movimentos são controlados através de um painel que contém dois botões normalmente abertos. Um deles serve para movimentar o carro da ponte para a esquerda e o outro para a direita. Como medida de segurança, nas extremidades devem ser instalados sensores de fim de curso.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709021211da12096acd5d4018%2Fcrop_1_1783534347384.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=1s3OYwoGxood208lPffnGfSSwac%3D&Expires=1784139147' alt='OCR图片'/></div>

## b) Variáveis de entrada

(E) → Botão que determina o movimento para a esquerda

(D) → Botão que determina o movimento para a direita

(Se) → Sensor de fim de curso da extremidade da esquerda

(Sd) → Sensor de fim de curso da extremidade da direita

Variáveis de saída

(Me) → Motor ligado para a esquerda

(Md) → Motor ligado para a direita

Determinação da lógica utilizada

E = 1 → botão do movimento para a esquerda **acionado**

$\overline{E} = 0 →$ botão do movimento para a esquerda **não acionado**

D = 1 → botão do movimento para a direita **acionado**

$\overline{D} = 0 →$ botão do movimento para a direita **não acionado**

Se = 1 → sensor de fim de curso da esquerda **acionado**

$\overline{Se} = 0 →$ sensor de fim de curso da esquerda **não acionado**

Sd = 1 → sensor de fim de curso da direita **acionado**

$\overline{Sd} = 0 →$ sensor de fim de curso da direita **não acionado**

Me = 1 → motor **ligado**, tracionando para a esquerda

$\overline{Me} = 0 →$ motor **desligado**

Md = 1 → motor **ligado**, tracionando para a direita

$\overline{Md} = 0 →$ motor **desligado**

<table border="1"><tr><td colspan="4">Entrada</td><td colspan="2">Saída</td></tr><tr><td>E</td><td>D</td><td>Se</td><td>Sd</td><td>Me</td><td>Md</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr></table>

$$
\mathrm {M d} = \overline {{\mathrm {E}}}. \mathrm {D}. \overline {{\mathrm {S e}}}. \overline {{\mathrm {S d}}} + \overline {{\mathrm {E}}}. \mathrm {D}. \mathrm {S e}. \overline {{\mathrm {S d}}}
$$

$$
\mathrm {M d} = \overline {{\mathrm {E}}}. \mathrm {D}. \overline {{\mathrm {S d}}}. (\overline {{\mathrm {S e}}} + \mathrm {S e})
$$

$$
\mathrm {M d} = \overline {{\mathrm {E}}}. \mathrm {D}. \overline {{\mathrm {S d}}}
$$

$$
\mathrm {M d} = \overline {{\mathrm {E}}}. \mathrm {D}. \overline {{\mathrm {S d}}}
$$

$$
M e = E. \overline {{D}}. \overline {{S e}}. \overline {{S d}} + E. \overline {{D}}. \overline {{S e}}. S d
$$

$$
\mathrm {M e} = \mathrm {E}. \overline {{\mathrm {D}}}. \overline {{\mathrm {S e}}}. (\overline {{\mathrm {S d}}} + \mathrm {S d})
$$

$$
M e = E. \bar {D}. \bar {S} e
$$

$$
M e = E. \overline {{D}}. \overline {{S e}}
$$

## Metodologia

M1- Para mostrar um exemplo de aplicação de circuitos combinacionais, serão analisadas, passo a passo as fase de desenvolvimento de um projeto. No caso, o projeto escolhido foi um circuito para controlar os movimentos de uma ponte rolante para a esquerda ou para a direita, levando em conta sensores de fim de curso. No final, o circuito será implementado para comprovar se o funcionamento encontra-se de acordo com o projetado.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão de 5V</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 7411</td></tr><tr><td>2</td><td>LEDs</td></tr><tr><td>2</td><td>resistores de 1kΩ</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos 0,51 mm∅</td></tr></table>

Praticando

P1- Elaborar o diagrama de blocos do sistema. (RI-I)

P2- Elaborar o circuito lógico das expressões do sistema.(RI-II)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709021211da12096acd5d4018%2Fcrop_1_1783534347505.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eGIEgd32gtuNlzCbHj%2BZp4qd9wA%3D&Expires=1784139147' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709021211da12096acd5d4018%2Fcrop_2_1783534347513.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Gq9UvQtWhO4m14gR0TGaNEBahaY%3D&Expires=1784139147' alt='OCR图片'/></div>

P3- Implementar o circuito usando as portas disponíveis.

P4- Ligar a fonte de alimentação.

P5- Aplicar níveis lógicos às entradas E, D, Sd e Se do circuito, conforme a sequência e conteúdo das linhas da tabela-verdade. Para cada condição de entrada, verificar os estados lógicos das saídas Md e Me através de um voltímetro, ou usando um provador lógico. Com o resultado, completar a tabela. (RI-III)

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

Relatório Imediato da Experiência 4.5

Controle de uma Ponte Rolante

I- Diagrama de blocos do sistema projetado

## II- Diagrama do circuito projetado

O circuito foi construído usando portas AND e portas NOT, interligadas conforme o diagrama seguinte.

## III- Tabela verdade

Tomando para análise apenas algumas linhas da tabela-verdade, têm-se para as linhas 9,12 e 14, as seguinte situações:

<table border="1"><tr><td></td><td colspan="4">Entradas</td><td colspan="2">Saídas</td></tr><tr><td>Linhas</td><td>E</td><td>D</td><td>Se</td><td>Sd</td><td>Me</td><td>Md</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>2</td><td>0</td><td>0</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>3</td><td>0</td><td>0</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>4</td><td>0</td><td>0</td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>5</td><td>0</td><td>1</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>6</td><td>0</td><td>1</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>7</td><td>0</td><td>1</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>8</td><td>0</td><td>1</td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>9</td><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>10</td><td>1</td><td>0</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>11</td><td>1</td><td>0</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>12</td><td>1</td><td>0</td><td>1</td><td>1</td><td></td><td></td></tr><tr><td>13</td><td>1</td><td>1</td><td>0</td><td>0</td><td></td><td></td></tr><tr><td>14</td><td>1</td><td>1</td><td>0</td><td>1</td><td></td><td></td></tr><tr><td>15</td><td>1</td><td>1</td><td>1</td><td>0</td><td></td><td></td></tr><tr><td>16</td><td>1</td><td>1</td><td>1</td><td>1</td><td></td><td></td></tr></table>

<div align="center">

linha 9:

</div>

<div align="center">

linha 12:

</div>

<div align="center">

Linha 14:

</div>

---
- https://ocr.z.ai/