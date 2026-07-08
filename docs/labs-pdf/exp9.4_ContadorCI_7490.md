---
title: Exp9.4 - Circuito Integrado Contador 7490
description: Estudar e utilizar o CI contador 7490
---

## Objetivos

- Estudar e utilizar o CI contador 7490

Preparação

## Conceitos

A figura a seguir mostra o diagrama elétrico e a pinagem do CI 7490.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_1_1783547250813.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gwmHkd8eo2MORgIxbaQ8JICdctQ%3D&Expires=1784152050' alt='OCR图片'/></div>

Este circuito possui internamente um divisor por 2 (contador módulo 2) e um divisor por 5 (contador módulo 5). Seus flip-flops são sensíveis à borda de descida do pulso de clock . Os dois circuitos divisores podem ser utilizados independentemente, mas, o controle de RESET é comum a ambos. Se as duas entradas $ R_{0} $ são colocadas em nível lógico "1", todas as saídas vão para "0" e, se as entradas $ R_{9} $ são colocadas em nível lógico "1", a saída fica igual a 1001.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_2_1783547250875.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=baKdc%2B8yA%2F1C%2FqX06o7U2v%2By3Ts%3D&Expires=1784152050' alt='OCR图片'/></div>

<table border="1"><tr><td>CK</td><td>R01</td><td>R02</td><td>R91</td><td>R92</td><td>QD</td><td>QC</td><td>QB</td><td>QA</td></tr><tr><td></td><td>X</td><td>0</td><td>X</td><td>0</td><td colspan="4">Contagem</td></tr><tr><td></td><td>0</td><td>X</td><td>0</td><td>X</td><td colspan="4">Contagem</td></tr><tr><td>X</td><td>1</td><td>1</td><td>X</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>X</td><td>1</td><td>1</td><td>0</td><td>X</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>X</td><td>X</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>X</td><td>0</td><td>X</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr></table>

Este CI pode operar em três modos:

## a) Modo 1: Contador de década

Neste caso, a entrada CKB deve ser ligada externamente à saída $ Q_{A} $ e os pulsos de clock devem ser aplicados à entrada CKA.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_1_1783547250880.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8hz0POlqlfLbh3jgtY688md2DiY%3D&Expires=1784152050' alt='OCR图片'/></div>

<div align="center">

Modo 1

</div>

<table border="1"><tr><td>$Q_{D}$</td><td>$Q_{C}$</td><td>$Q_{B}$</td><td>$Q_{A}$</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td></tr></table>

<div align="center">

b) Modo 2: Divisor simétrico por 10

</div>

Neste caso, deve-se conectar a saída $ Q_{D} $ externamente à entrada CKA e os pulsos de clock devem ser aplicados na entrada CKB. A saída $ Q_{A} $ fornecerá uma onda quadrada simétrica com 1/10 da frequência do sinal CKB.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_2_1783547250889.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=hlopdJjUHc90nDZXWkSu3l%2BMJk4%3D&Expires=1784152050' alt='OCR图片'/></div>

<div align="center">

Modo 2

</div>

<table border="1"><tr><td>$Q_{D}$</td><td>$Q_{C}$</td><td>$Q_{B}$</td><td>$Q_{A}$</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td></tr></table>

## c) Modo 3: Divisor por 2 e/ou divisor por 5

Neste caso, não há necessidade de ligações externas. Para o divisor por 2 utiliza-se CKA como entrada e $ Q_{A} $ como saída. Para o divisor por 5 utiliza-se CKB como entrada $ e Q_{D} $ como saída.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_1_1783547250895.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=eShvsn7A2dR4%2F77sG6dADdGCVOk%3D&Expires=1784152050' alt='OCR图片'/></div>

<table border="1"><tr><td>$Q_{D}$</td><td>$Q_{C}$</td><td>$Q_{B}$</td><td>$Q_{A}$</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td><td rowspan="3"></td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td></tr></table>

<div align="center">

Exemplo de utilização - Contador Crescente Módulo 6 (0 a 5)

</div>

<table border="1"><tr><td></td><td>QD</td><td>QC</td><td>QB</td><td>QA</td><td>Estado</td></tr><tr><td>Estado inicial</td><td>0</td><td>0</td><td>0</td><td>0</td><td>$\textcircled{0}$</td></tr><tr><td>Após 1º CK</td><td>0</td><td>0</td><td>0</td><td>1</td><td>$\textcircled{1}$</td></tr><tr><td>Após 2º CK</td><td>0</td><td>0</td><td>1</td><td>0</td><td>$\textcircled{2}$</td></tr><tr><td>Após 3º CK</td><td>0</td><td>0</td><td>1</td><td>1</td><td>$\textcircled{3}$</td></tr><tr><td>Após 4º CK</td><td>0</td><td>1</td><td>0</td><td>0</td><td>$\textcircled{4}$</td></tr><tr><td>Após 5º CK</td><td>0</td><td>1</td><td>0</td><td>1</td><td>$\textcircled{5}$</td></tr><tr><td>Após 6º CK</td><td>0</td><td>1</td><td>1</td><td>0</td><td>Retornar para $\textcircled{0}$</td></tr></table>

Após o $ 6^{\circ} $ pulso de clock, este contador deve voltar ao estado inicial 0. Observando-se a tabela do contador de décadas, percebe-se que é possivel utilizar as saídas $ Q_{C}eQ_{B} $ para fornecer o RESET, desta forma o contador irá reiniciar o seu ciclo de contagem.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_2_1783547250900.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=d%2F3wptqwG8mau9U6f3AhPT78%2BfI%3D&Expires=1784152050' alt='OCR图片'/></div>

<div align="center">

Contador crescente módulo 6 com CI 7490

</div>

## Metodologia

M1- Será montado um contador de década utilizando o Cl 7490. Fornecendo pulsos de clock, a sequência de contagem será acompanhada por um display de 7 segmentos.

M2- Em seguida, será montado circuito divisor de frequência por 10 simétrico. Com o osciloscópio, será verificada a divisão da frequência de uma onda quadrada fornecida por um gerador de funções.

M3- A verificação experimental de um contador de módulo 60 será realizada pela interligação adequada de um contador de década com um contador crescente módulo 6. A sequência de contagem será monitorada através de dois displays.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>fonte de alimentação de +5V</td></tr><tr><td>1</td><td>CI 7400</td></tr><tr><td>2</td><td>CI 7490</td></tr><tr><td>2</td><td>CI 7447</td></tr><tr><td>2</td><td>display de 7-segmentos tipo anodo comum</td></tr><tr><td>2</td><td>resistores de 1kΩ</td></tr><tr><td>14</td><td>resistores de 330Ω</td></tr><tr><td>1</td><td>chave H-H</td></tr><tr><td>1</td><td>gerador de onda quadrada com saída TTL</td></tr><tr><td>1</td><td>Osciloscópio</td></tr><tr><td>-</td><td>fios rígidos 0,51 mm∅</td></tr></table>

P1- Montar um contador de década conforme diagrama dado a seguir. Verificar a sequência de contagem através de um display (RI-I)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_1_1783547250919.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=I6cWwvHQSHC13AEH8YljcNH0pDU%3D&Expires=1784152050' alt='OCR图片'/></div>

Obs: Para fornecer pulsos de clock adequados, utilizar o circuito eliminador de ruído.

P2- Montar um circuito divisor de frequência por 10 simétrico, conforme diagrama dado a seguir. Utilizando o gerador de onda quadrada com saída TTL, ajustar a frequência em 10kHz e injetar na entrada CKB. Acompanhar com o osciloscópio o sinal nas saídas $ Q_{A} $ e $ Q_{D} $ (RI-II)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_2_1783547250936.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6OlwKOfURI8LL57MweVx6V%2FVrNY%3D&Expires=1784152050' alt='OCR图片'/></div>


P3- Montar um contador módulo 60 conforme diagrama de blocos dado a seguir. Acompanhar nos displays, a sequência de contagem, conforme se aplicam pulsos de clock ao circuito (RI-III).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090547140b1f5b5e2d134b9d%2Fcrop_1_1783547250951.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fcSryqQiQpBFpMMSVRzvtiY%2BwfM%3D&Expires=1784152050' alt='OCR图片'/></div>

Q1. Utilizando o CI 7490, elabore um circuito divisor de frequência por 6. Explique.

Q2. Elabore com o CI 7490 um contador módulo 1000.

Q3. Projetar um contador módulo 24

Q4. Pesquisar as características do CI 4029

<table border="1"><tr><td colspan="2">Instituição:</td></tr><tr><td colspan="2">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="2">Prof.: Data: Conceito:</td></tr><tr><td>Nome</td><td>Nº</td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>

## Relatório Imediato

## I - Contador de Décadas com 7490

Para obter um contador de década com o 7490, conectou-se externamente a entrada CKB à saída $ Q_{A} $ e os pulsos de clock foram aplicados à entrada CKA.

<table border="1"><tr><td></td><td>Display</td></tr><tr><td>Estado inicial</td><td></td></tr><tr><td>Após 1° CK</td><td></td></tr><tr><td>Após 2° CK</td><td></td></tr><tr><td>Após 3° CK</td><td></td></tr><tr><td>Após 4° CK</td><td></td></tr><tr><td>Após 5° CK</td><td></td></tr><tr><td>Após 6° CK</td><td></td></tr><tr><td>Após 7° CK</td><td></td></tr><tr><td>Após 8° CK</td><td></td></tr><tr><td>Após 9° CK</td><td></td></tr><tr><td>Após 10° CK</td><td></td></tr></table>

Circuito lógico utilizado

## II - Divisor de Frequências por 10 Simétrico

Neste caso, ligou-se a saída $ Q_{D} $ à entrada CKA e os pulsos de clock foram aplicados à entrada CKB.

<div align="center">

Circuito lógico utilizado

</div>

Em seguida mediu-se, através do osciloscópio, as frequencias nas saídas $ Q_{D} $ e $ Q_{A} $ :

$$
\begin{array}{l} F _ {Q _ {D}} = \mathrm {H z} \\ F _ {Q _ {A}} = \mathrm {H z} \\ \end{array}
$$

A saída $ Q_{A} $ forneceu uma onda quadrada simétrica de frequência igual a ___ da frequência do sinal aplicado em CKB.

## III - Contador Módulo 60

60. Utilizou-se o diagrama em blocos a seguir, como base para projetar o contador de módulo

Montou-se, então, o seguinte circuito:

Observou-se, então, que o contador realiza a contagem de ___ a ___.

Comentários: ___