---
title: Exp3.3 - Tensões de Entrada e Saída
description: Conhecer as tensões características de entrada e saída das portas lógicas TTL e CMOS.
---

## Objetivos

- Conhecer as tensões características de entrada e saída das portas lógicas TTL e CMOS.

- Praticar medidas de tensão, interligação de componentes e familiarização com montagens de circuitos lógicos.

- Identificar níveis lógicos, analisando-se as tensões presentes em pontos solicitados dos circuitos.

- Construir e interpretar gráficos e tabelas.

## Preparação

## Conceitos

1) Ao consultar o manual do fabricante, referente a um determinado circuito integrado verifica-se a existência de muitas informações técnicas importantes. Entre elas estão as tensões de entrada e saída. Como exemplo, a tabela abaixo apresenta essas tensões para o inversor 7404 e 4069 à $ 2 5^{\circ} \mathrm{C} $ .

<table border="1"><tr><td>Família</td><td>Vcc</td><td>Entrada</td><td>Saída</td></tr><tr><td rowspan="2">TTL</td><td rowspan="2">5V</td><td>nível&quot;1&quot;=(min.)2,0volts</td><td>nível&quot;1&quot;=(min.)2,4volts</td></tr><tr><td>nível&quot;0&quot;=(máx.)0,8volts</td><td>nível&quot;0&quot;=(máx.)0,4volts</td></tr><tr><td rowspan="2">CMOS</td><td rowspan="2">10V</td><td>nível&quot;1&quot;=(min)3,5volts</td><td>nível&quot;1&quot;=(min)9,95volts</td></tr><tr><td>nível&quot;0&quot;=(máx)3,0volts</td><td>nível&quot;0&quot;=(máx)0,05volts</td></tr></table>

<div align="center">

Nos manualis, as tensões de entrada e saída aparecem representadas através dos símbolos, $ V_{\mathrm{IL}}, V_{\mathrm{IH}}, V_{\mathrm{OL}}, V_{\mathrm{OH}} $ e são definidas como:

</div>

<table border="1"><tr><td>Símbolo</td><td>Definição</td></tr><tr><td>VIL</td><td>é o valor de tensão que o fabricante garante ser reconhecido como nível lógico "0", na entrada da porta</td></tr><tr><td>VIH</td><td>é o valor de tensão que o fabricante garante ser reconhecido como nível lógico "1", na entrada de uma porta</td></tr><tr><td>VOL</td><td>é a tensão de saída correspondente ao nível lógico "0"</td></tr></table>

<table border="1"><tr><td>Símbolo</td><td>Definição</td></tr><tr><td>VOH</td><td>é a tensão de saída correspondente ao nível lógico "1"</td></tr><tr><td colspan="2">V= tensão elétrica I=input (entrada) L=low (baixo) H=high (alto)O=output (saída)</td></tr></table>

## 2) Da mesma forma, definem-se $ I_{IL}, I_{H}, I_{OL} $ e $ I_{OH} $

<table border="1"><tr><td>Símbolo</td><td>Definição</td></tr><tr><td>$I_{IL}$</td><td>é a corrente na entrada de uma porta quando esta encontra-se em nível lógico "0"</td></tr><tr><td>$I_{H}$</td><td>é a corrente na entrada de uma porta quando esta encontra-se em nível lógico "1"</td></tr><tr><td>$I_{OL}$</td><td>é a corrente na saída de uma porta quando esta encontra-se em nível lógico "0"</td></tr><tr><td>$I_{OH}$</td><td>é a corrente na saída de uma porta quando esta encontra-se em nível lógico "1"</td></tr><tr><td colspan="2">Obs.: A corrente é positiva (+) quando entra no pino especificado e negativa (-) quando sai pelo mesmo.</td></tr><tr><td colspan="2">I= Corrente elétrica I=input (entrada) L=low (baixo) H=high (alto)O=output (saída)</td></tr></table>

## Metodologia

M1- Para verificar os valores das tensões de entrada e saída que uma porta lógica TTL ou CMOS reconhece como nível lógico, será utilizado um potenciômetro como elemento auxiliar para o ajuste das tensões limites permitidas como níveis lógicos de entrada.

M2- Para cada tensão ajustada, na entrada da porta lógica, será medida a tensão de saída correspondente. Em seguida, será comparado o valor obtido com o valor do mesmo parâmetro, fornecido pelo fabricante.


## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão 5V</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 4069 ou 74HC04</td></tr><tr><td>1</td><td>potenciômetro - 1kΩ</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos de 0,51 mm Ø</td></tr></table>

## Praticando

P1- Fixar o Cl 7404 na matriz de contatos.

P2- Utilizar uma fonte tensão previamente ajustada em +5V para alimentar o Cl. Manter a chave geral da fonte desligada.

- Ligar a tensão positiva de +5V ao pino 14;

- Ligar o negativo da fonte (terra do circuito) ao pino 7 do Cl.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260708230129a198e97dd9b9437d%2Fcrop_1_1783522918021.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=WkV1YxOcExoZz2OfPDun1tC5Iws%3D&Expires=1784127718' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260708230129a198e97dd9b9437d%2Fcrop_2_1783522918079.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TeNd2igeGaTJbu2WmsIwvjfbLEA%3D&Expires=1784127718' alt='OCR图片'/></div>

P3- Completar a montagem conforme o desenho seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260708230129a198e97dd9b9437d%2Fcrop_1_1783522918128.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=xv0Zt73OR1Z8xt3e0dBYkmz%2BJa0%3D&Expires=1784127718' alt='OCR图片'/></div>

Obs: Notar que girando o eixo do potenciômetro, pode-se ajustar a tensão de entrada em qualquer valor entre 0V e Vcc.

P4- Ligar a alimentação (fonte) e em seguida ajustar o potenciômetro de tal forma que a tensão de entrada (Ve) seja 0V. Para fazer este ajuste, encostar a ponta de prova do voltimetro na escala , no pino 1 e girar o eixo do potenciômetro no sentido de diminuir a tensão de entrada até obter 0V. Em seguida, medir a tensão na saída ( pino 2). (RI-I)

P5- Girar o eixo do potenciômetro no sentido de aumentar a tensão de entrada para 0,8V. Medir a tensão de saída. (RI-I)

P6- Repetir o procedimento do item anterior para $ V_{e}=2 V $ e depois $ V_{e}=5 V. $ (RI-I)

P7- Com os valores obtidos, completar o gráfico e preencher os campos pontilhados. (RI-II)

P8- Trocar o CI 7404 hexa-inversor TTL por outro semelhante da familia CMOS. Por exemplo o CI4069 ou 74HC04.

P9- Ajustar a fonte de alimentação para fornecer 10Vcc ao Circuito Integrado.

P10- Medir a saída da porta inversora CMOS para os casos de Ve=0V, Ve=2,0V, Ve= 8V e Ve= 10V. (RI-III)

P11- Com os valores obtidos, completar o gráfico e preencher os campos pontilhados. (RI-IV)

## Questões

Q1- Fazer uma pesquisa sobre margem de ruído e como os ruídos interferem na operação das portas lógicas.

Q2- Para uma determinada condição de operação uma porta lógica inversora apresenta $ \mathrm{I}_{\mathrm{I L}}=-0. 4 \mathrm{m A}. $ Fazer um esquema e representar esta corrente atuando na porta lógica.


<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

Relatório Imediato da Experiência 3.3

Tensões de Entrada e Saída

## I-Tensões de entrada e saída TTL

a) Para verificar se uma porta inversora TTL responde de acordo com as especificações do fabricante, foi utilizado um potenciômetro de $ 1 \mathrm{k} \Omega $ para ajustar os valores mínimos e máximos de tensão permitidos como níveis lógicos de entrada, e um multimetro na escala $ V_{ \mathrm{D C}} $ para medir a tensão de saída.

A tabela abaixo mostra as tensões utilizadas como entrada e as respectivas tensões de saída

<table border="1"><tr><td>VIn(V)</td><td>0,0</td><td>0,4</td><td>0,8</td><td>1,4</td><td>1,8</td><td>2,0</td><td>2,5</td><td>3,0</td><td>4,0</td><td>5,0</td></tr><tr><td>VOut(V)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>0,8V</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>2,0V</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td>5,0V</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

Detalhes da ligação do potenciômetro

b) Comparando os valores medidos (tabela anterior) com os valores da folha de dados do CI ___ ,pode-se dizer que os valores obtidos experimentalmente estão ___

<table border="1"><tr><td>Tensão</td><td>Manual TTL</td></tr><tr><td>VOHmin.</td><td></td></tr><tr><td>VOLmax.</td><td></td></tr></table>

Valores obtidos do manual TTL

## II) Representação gráfica

As regiões A,B e C do gráfico abaixo representam respectivamente regiões de nível lógico

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260708230129a198e97dd9b9437d%2Fcrop_1_1783522918162.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ui9dfQ5OVQftJy0BRlvhYPWob0c%3D&Expires=1784127718' alt='OCR图片'/></div>

<div align="center">

Entrada

</div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260708230129a198e97dd9b9437d%2Fcrop_2_1783522918202.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=O9LZd4TT9V1uHNi2yaqQNxUYgNM%3D&Expires=1784127718' alt='OCR图片'/></div>

<div align="center">

Saída

</div>

## III - Tensões de entrada e saída CMOS

Umas das principais características da família CMOS refere-se à faixa de alimentação, que na maioria dos casos se estende de 3 a 15 V. Por este motivo, os níveis lógicos de entrada e saída dependem da alimentação utilizada A maioria dos manuals fornece parâmetros de referência para alimentação de 5 V e 10 V. Assim, para a tensão de alimentação de 10 V, e usando-se as tensões máximas e mínimas permitidas como nível lógico de entrada, foram obtidos os seguinte valores de tensão na saída

<table border="1"><tr><td></td><td>VIn(V)</td><td>0,0</td><td>0,5</td><td>1,0</td><td>1,8</td><td>2,0</td><td>3,0</td><td>4,0</td><td>4,2</td><td>4,5</td><td>6,0</td></tr><tr><td>Entrada</td><td>VOut(V)</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>0V</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2V</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>8V</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>10V</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

Comparando os valores medidos (tabela anterior) com os valores da folha de dados do CI

___,pode-se dizer que os valores obtidos experimentalmente estão

___.


<table border="1"><tr><td>Tensão</td><td>Manual CMOS</td></tr><tr><td>VOHmin.</td><td></td></tr><tr><td>VOLmax.</td><td></td></tr></table>

Valores obtidos do manual CMOS

## VI) Representação gráfica

As regiões A,B e C do gráfico abaixo representam respectivamente regiões de nível lógico

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260708230129a198e97dd9b9437d%2Fcrop_1_1783522918224.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=qS4p1I%2BHgWlHJ7OlXDmNte7ZBwA%3D&Expires=1784127718' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260708230129a198e97dd9b9437d%2Fcrop_2_1783522918232.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GNybzkiiD9YAAfFvTxYIs4sPmjQ%3D&Expires=1784127718' alt='OCR图片'/></div>

## V - Conclusão

Analisando os resultados das tabelas, pode-se concluir que existem níveis de tensão que não

podem ser utilizados , pois ___

- https://ocr.z.ai/