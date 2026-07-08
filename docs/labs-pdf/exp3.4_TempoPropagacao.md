---
title: Exp3.4 - Tempo de Propagação
description: Conhecer as tensões características de entrada e saída das portas lógicas TTL e CMOS.
---

## Objetivos

- Conhecer características de portas lógicas referentes à propagação de sinais.

- Praticar medidas de tensão, interligação de componentes e familiarização com montagen de circuitos lógicos.

- Identificar níveis lógicos analisando-se as tensões presentes em pontos solicitados dos circuitos.

- Construir e interpretar gráficos e tabelas.

- Analisar formas de ondas com a finalidade de medir o tempo de atraso.

## Preparação

## Conceitos

1) Tempo de propagação é o tempo que a porta leva para executar a operação lógica. A resposta de saída de uma porta não é instantânea em relação à entrada. Existe um atraso que é denominado tempo de propagação.

Nos manualis, estes valores são encontrados como $ t_{P_{LH}} $ e $ t_{P_{HL}} $ e são definidos como:

<table border="1"><tr><td colspan="2">Símbolo</td><td>Definição</td></tr><tr><td>$t_{P_{LH}}$</td><td>Tempo de propagação do nível baixo para nível alto.</td><td>É o tempo que decorre entre a transição do sinal de entrada e a transição do sinal de saída do nível baixo para nível alto.</td></tr><tr><td>$t_{P_{HL}}$</td><td>Tempo de propagação do nível alto para o nível baixo.</td><td>É o tempo que decorre entre a transição do sinal de saída do nível alto para nível baixo.</td></tr></table>

<div align="center">

2) Valores típicos para as diversas séries TTL e CMOS

</div>

<table border="1"><tr><td>Série TTL</td><td>Tempo de Propagação</td><td>Série CMOS</td><td>Tempo de Propagação</td></tr><tr><td>54/74</td><td>10ns</td><td rowspan="2">54C/74C</td><td>Vcc=4.5V 9-19ns</td></tr><tr><td>54L</td><td>33ns</td><td>Vcc=6V 8-16ns</td></tr><tr><td>54H/74H</td><td>6ns</td><td rowspan="2">54HC/74HC</td><td>Vcc=5V 50-90ns</td></tr><tr><td>54LS/74LS</td><td>9,5ns</td><td>Vcc=10V 30-60ns</td></tr><tr><td>54S/74S</td><td>3ns</td><td rowspan="3">40XX</td><td>Vcc=5V 50-90ns</td></tr><tr><td>54ALS/74ALS</td><td>4ns</td><td>Vcc=10V 30-60ns</td></tr><tr><td>54AS/74AS</td><td>1,5ns</td><td>Vcc=15V 25-50ns</td></tr></table>

## Metodologia

M1- Para verificar o tempo de propagação das portas lógicas, serão utilizados um gerador de funções para fornecer uma onda quadrada de 5Vp/1MHz à entrada de uma porta lógica, e um osciloscópio de dois canais, para monitorar os sinais de entrada e saída.

M2- Com os dois canais do osciloscópio operando ao mesmo tempo, canal 1 conectado à entrada e canal 2 à saída, será medida o quanto um sinal está deslocado do outro (defasagem dos sinais). O intervalo de tempo encontrado reflete o tempo de propagação. Dependendo da capacidade de varredura do osciloscópio será necessário utilizar várias portas conectadas em série. Neste caso, o tempo encontrado será dividido pelo número de portas utilizadas.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão para 5V</td></tr><tr><td>1</td><td>gerador de ondas quadradas</td></tr><tr><td>1</td><td>osciloscópio/20MHz</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 4069 ou 74HC04</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos de 0,51 mm∅</td></tr></table>

## Praticando

P1- Ajustar o gerador de funções para fornecer em sua saída uma onda quadrada de $ \mathrm{V m i n}=0 \mathrm{V e V m a x}=5 \mathrm{V} $ (nível baixo 0 e nível alto 5V).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_1_1783523786414.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=p2gEPGHYB63o%2FHG4lWId%2BFsqPtA%3D&Expires=1784128586' alt='OCR图片'/></div>

Atenção ! O ajuste deve ser feito com o acoplamento do osciloscópio na posição DC

Utilizar o ajuste de off-set do gerador de funções, caso verificar nível negativo na onda quadrada.

P2- Fixar o Cl 7404 na base de montagem e fazer as ligações necessárias de alimentação.

- Usar a fonte de tensão ajustada em 5V.

- Ligar o positivo da fonte ao pino 14 do Cl.

- Ligar o negativo da fonte ao pino 7 do Cl.

P3- Completar as ligações conforme o diagrama seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_2_1783523786419.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=L6Pg3iQ4yu6LCr%2FRvjPvEy4o0YM%3D&Expires=1784128586' alt='OCR图片'/></div>

P4- Ligar o canal 1 do osciloscópio à entrada (pino 1) e o canal 2 à saída da última porta (pino 8). Não esquecer de ativar a função duplo traço do osciloscópio.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_3_1783523786428.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=3hus3L5vCgW2sO6AtsooZlfFdR0%3D&Expires=1784128586' alt='OCR图片'/></div>

P5- Girar a chave seletora da base de tempos do osciloscópio até encontrar a posição mais adequada para visualizar as duas ondas: A onda referente à tensão de entrada e a referente à tensão de saída.

Obs: Em alguns casos, pode ser necessário aumentar ou diminuir um pouco a frequência do gerador, para se obter as formas de onda melhor ajustadas na tela do osciloscópio.

P6- Desenhar as duas formas de onda juntas . Anotar também o valor da defasagem $ t_{P_{LH}} $ $ e t_{P_{HL}} $ que existem entre elas. (RI-I)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_1_1783523786443.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=KgWk3aEPo%2BrsEAUPnQERhwIhLZM%3D&Expires=1784128586' alt='OCR图片'/></div>

P7- Calcular o tempo de propagação $ \left( t_{P_{HL}}/6 \mathrm{e} t_{P_{LH}}/6 \right). $ (RI-I)

P8- Desligar todos os instrumentos (gerador de onda quadrada, osciloscópio e fonte de alimentação).

P9- Trocar o CI 7404 hexa-inversor TTL da familia CMOS. O CI 74C04 ou CD 4069. Completar as ligações conforme o diagrama seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_2_1783523786459.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ivqG8l3tUpltKdSBa5xettI%2FEr8%3D&Expires=1784128586' alt='OCR图片'/></div>

P10- Ligar primeiro a fonte de alimentação (pinos 7 e 14), depois os demais pinos e instrumentos.

P11- Manter o gerador de onda quadrada conectado ao pino 1 do CI, ajustado para fornecer a onda quadrada de 0 a 5V e frequência de 500KHz.

P12- Ligar o canal 1 do osciloscópio à entrada (pino 1) e o canal 2 à saída ( pino 4).

P13- Girar a chave seletora da base de tempos do osciloscópio até encontrar a posição mais adequada para visualizar as duas ondas.

P14- Desenhar as duas formas de onda juntas. Anotar o valor da defasagem existente entreelas. (RI-II)

Não esqueça que o tempo de atraso medido refere-se ao atraso de 2 portas.

P15- A partir do tempo de atraso encontrado para as duas'portas juntas, calcular o tempo de atraso de uma única porta.(RI-II)


## Questões

Q1- Explicar como funciona o circuito seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_1_1783523786487.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Gf%2Fy39jXXsd%2BEfi7QYwnmWwg7MM%3D&Expires=1784128586' alt='OCR图片'/></div>

Q2- Mostrar que para o circuito da questão anterior vale a expressão:

$$
f o = \frac {1}{3 \times \left(t _ {P _ {L H}} + t _ {P _ {H L}}\right)}
$$


<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>N°</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

Relatório Imediato da Experiência 3.4

Tempo de Propagação

## I - Tempo de Propagação TTL

Para avaliar o tempo de propagação de uma porta TTL, foi utilizada uma medida indireta. Seis portas inversoras foram colocadas em cascata (a saída de uma conectada à entrada de outra); à entrada da primeira inversora foi injetada uma onda quadrada com nível baixo de 0V, nível alto de 5V/1MHz. Usando os dois canais do osciloscópio, entre a entrada e saída do circuito foi possivel medir o atraso provocado por 6 portas. O tempo referente a uma única porta foi encontrado, dividindo-se o tempo total de atraso por 6.

Circuito utilizado

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_1_1783523786521.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BbvuGd7GJU19LpboiSz0OD7CeME%3D&Expires=1784128586' alt='OCR图片'/></div>

Formas de onda observadas no osciloscópio


Cálculo do tempo de propagação

$$
t _ {P _ {H L} (\mathrm {u m a p o r t a})} = \frac {t _ {P _ {H L}}}{6} = 
$$

$$
t _ {P _ {\mathrm {L H}} (\mathrm {u m a p o r t a})} = \frac {t _ {P _ {\mathrm {L H}}}}{6} = 
$$

## II - Tempo de Propagação CMOS

Para avaliar o tempo de propagação de uma porta CMOS foi utilizado o mesmo método da seção anterior, porém usando apenas duas portas inversoras ligadas em série.

Circuito utilizado

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070823155056757c51b5104bce%2Fcrop_1_1783523786537.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pYN0t510xMLtiBmF1FVw%2F7rZRRM%3D&Expires=1784128586' alt='OCR图片'/></div>

Formas de onda observadas no osciloscópio

Cálculo do tempo de propagação

$$
t _ {P _ {H L} (\mathrm {u m a p o r t a})} = \frac {t _ {P _ {H L}}}{2} = \underline {{}} = \underline {{}}
$$

$$
t _ {P _ {\mathrm {L H}} (\mathrm {u m a p o r t a})} = \frac {t _ {P _ {\mathrm {L H}}}}{2} = \underline {{\quad}} = \underline {{\quad}}
$$

---
- https://ocr.z.ai/