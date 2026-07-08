---
title: Exp3.2 - Portas AND (E), NAND (NE), OR (OU) e NOR (NOU)
description: omprovar experimentalmente a operação das portas lógicas AND (E), NAND (NE), OR (OU) e NOR (NOU).
---


## Objetivos

- Comprovar experimentalmente a operação das portas lógicas AND (E), NAND (NE), OR (OU) e NOR (NOU).

- Conhecer as características físicas e elétricas dos CIs 7400, 7402, 7408 e 7432.

- Identificar níveis lógicos, analisando-se as tensões presentes nos pontos solicitados dos circuitos.

## Conceitos

1) Quadro de resumo das portas lógicas AND, NAND, OR e NOR.

<table border="1"><tr><td>Porta Lógica</td><td>Símbolo</td><td>Função Lógica</td><td colspan="3">Tabela Verdade</td></tr><tr><td rowspan="6">AND(E)</td><td rowspan="6">A-B-S</td><td rowspan="6">S=A.B</td><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan="6">NAND(NE)</td><td rowspan="6">A-B-S</td><td rowspan="6">S=A.B</td><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr><tr><td rowspan="6">OR(OU)</td><td rowspan="6">A-B-S</td><td rowspan="6">S=A+B</td><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td></tr><tr><td rowspan="6">NOR(NOU)</td><td rowspan="6">A-B-S</td><td rowspan="6">S=A+B</td><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></table>


<div align="center">

2) Diagramas de conexão de alguns Cls.

</div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_1_1783532282127.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=gUn%2FUFl06i8PFDMXc0TFfOaG0cg%3D&Expires=1784137082' alt='OCR图片'/></div>

<div align="center">

Obs.: ( * ) saída tipo coletor aberto

</div>

## Metodologia

M1- Para conhecer o funcionamento das portas lógicas AND (E), NAND (NE), OR (OU) e NOR (NOU) serão realizados testes de operação para cada uma delas. Os testes consistirão em determinar a tabela-verdade, transformar uma porta em outra, aumentar a capacidade de entrada de uma porta e para verificar o que acontece com a tensão de saída quando nada se encontra ligado à entrada da porta.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão de 5V</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7400</td></tr><tr><td>1</td><td>CI 7402</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>1</td><td>CI 7432</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos de 0,51 mm∅</td></tr></table>

Praticando

P1- Fixar o CI 7408 na matriz de contatos.

P2- Utilizar uma fonte previamente ajustada em 5V para alimentar o CI. Manter a fonte desligada durante a montagem.

P3- Ligar o terminal da tensão positiva de 5V ao pino 14.

P4- Ligar o terminal negativo da fonte (terra do circuito) ao pino 7 do CI.

P5- Escolher uma das 4 portas AND (E) do CI7408 para iniciar a pesquisa. Por exemplo, a porta ligada aos pinos 1, 2 e 3. Os pinos 1 e 2 são terminais de entrada e o pino 3 terminal de saída.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_1_1783532282146.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rUF2Okc%2F%2FlQ9T%2FoVbVmaCeiQXfA%3D&Expires=1784137082' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_2_1783532282151.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2FiAKUlJ6o2acn6xF6%2BbM%2FO15QX4%3D&Expires=1784137082' alt='OCR图片'/></div>

P6- Colocar os níveis lógicos (0,0), (0,1), (1,0) e (1,1) nas entradas da porta AND em questão.

- Para colocar uma entrada em nível lógico 0, basta ligar o terminal correspondente ao 0V ou seja ao terra do circuito (negativo da fonte de alimentação).

Da mesma forma, para colocar uma entrada em nível lógico 1, basta ligar o terminal correspondente a 5V que alimenta o circuito (positivo da fonte de alimentação).

P7- Usar um multimetro na escala $ V_{\mathrm{DC}} $ para analisar o nível lógico da saída, durante cada situação das entradas. (RI-I)

- Para realizar as medidas com o multimetro, o terminal comum deve estar ligado ao negativo da fonte de alimentação (terra do circuito) e o terminal positivo, ligado ao pino 3 do CI.

P8- Substituir o CI 7408 pelo CI 7400.

P9- Fazer o mesmo teste usando uma das porta do CI 7400. (RI-I)

P10- Ainda,seguindo o mesmo procedimento, testar uma das portas OU do Cl 7432 (RI-I)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_3_1783532282158.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=0NzO7kJUiNM809VxPqv6fHZnpOs%3D&Expires=1784137082' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_4_1783532282163.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=NfzQCpo7RPvJ90T02cljjcpnlqs%3D&Expires=1784137082' alt='OCR图片'/></div>

P11- Agora, testar uma das portas NOR (NOU) do CI 7402, porém observando a posição das portas que se encontram invertidas em relação às portas dos demais Cls utilizados.(RI-II)

P12- Usando um fio, unir as entradas A e B da porta NOU. Com esta ligação, tudo se passa como se a porta tivesse uma única entrada.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_5_1783532282171.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=pVBBgrnR1t4Jcik8Cfcyq1MEG7Q%3D&Expires=1784137082' alt='OCR图片'/></div>


P13- Colocar as entradas que foram unidas, ligadas ao terra (nível lógico 0). Nesta condição, medir a saída para conhecer o seu estado lógico. Desligar as entradas do terra para em seguida ligá-las a +5V (nível lógico 1). Medir novamente a saída para conhecer o seu estado lógico.(RI-III)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_1_1783532282181.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ovXkklxvta9Hy6ffa%2B22GkMSqP4%3D&Expires=1784137082' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_2_1783532282187.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=YXYB6jLyYBGK%2BSH9INgXEqxH%2FZQ%3D&Expires=1784137082' alt='OCR图片'/></div>

P14- Verificar com o multimetro o estado lógico da saída de uma porta NOU, quando nada estiver ligado à entrada, quando apenas uma das entradas estiver ligada ao Gnd e quando apenas uma das entradas estiver ligada ao Vcc.(RI-IV)

## Questões

Q1- Elaborar a tabela-verdade para os circuitos seguinte.

<div align="center">

a)

</div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_3_1783532282198.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BwNo%2FTH9XG9cp75RUYtCkYZejlA%3D&Expires=1784137082' alt='OCR图片'/></div>

<div align="center">

b)

</div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_4_1783532282204.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=knmw%2F2LqnwW8RrdQmuHaflz2zdI%3D&Expires=1784137082' alt='OCR图片'/></div>

<div align="center">

C)

</div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_5_1783532282209.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jsu2DP5nvYHsGSEcuQj1E910sAE%3D&Expires=1784137082' alt='OCR图片'/></div>

<div align="center">

d)

</div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090137312dd9b704caf44c6a%2Fcrop_6_1783532282220.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=DPTm24LGROCW2MezP1bX3hQF1zU%3D&Expires=1784137082' alt='OCR图片'/></div>

Q2- Durante a montagem de um circuito digital, sobre a matriz de contatos, na falta de uma porta lógica AND do CI 7408, o CI 7411 pode ser utilizado como substituto? Explique.


<table border="1"><tr><td colspan="2">Instituição:</td></tr><tr><td colspan="2">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="2">Prof.: Data: Conceito:</td></tr><tr><td>Nome</td><td>Nº</td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr><tr><td></td><td></td></tr></table>

Relatório Imediato da Experiência 3.2

Portas AND (E), NAND (NE), OR (OU) e NOR (NOU)

## I - Testes de operação das portas AND (E) - CI 7408 e NAND (NE) - CI 7400

Os CIs foram alimentados com as tensões de 0 e 5 V, aplicadas aos pinos ___e___ , respectivamente.

Depois dos CIs estarem devidamente alimentados, para realizar o teste em cada um deles,

passou-se a colocar níveis lógicos às entradas das portas. Como nível lógico"0" foi utilizado ___ V,

ou seja, as entradas eram ligadas diretamente ao ___ Como nível lógico "1"

conectavam-se as entradas das portas ao ___.

<table border="1"><tr><td colspan="3">Tabela Verdade da Porta AND</td></tr><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0V</td><td>0V</td><td></td></tr><tr><td>0V</td><td>5V</td><td></td></tr><tr><td>5V</td><td>0V</td><td></td></tr><tr><td>5V</td><td>5V</td><td></td></tr></table>

<table border="1"><tr><td colspan="3">Tabela Verdade da Porta NAND</td></tr><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0V</td><td>0V</td><td></td></tr><tr><td>0V</td><td>5V</td><td></td></tr><tr><td>5V</td><td>0V</td><td></td></tr><tr><td>5V</td><td>5V</td><td></td></tr></table>

## II - Testes de operação das portas OR (OU) - CI7432 e NOR (NOU) - CI7402

O mesmo procedimento foi utilizado para determinar as tabelas-verdade das portas OR e NOR.

<table border="1"><tr><td colspan="3">Tabela Verdade da Porta OR</td></tr><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0V</td><td>0V</td><td></td></tr><tr><td>0V</td><td>5V</td><td></td></tr><tr><td>5V</td><td>0V</td><td></td></tr><tr><td>5V</td><td>5V</td><td></td></tr></table>

<table border="1"><tr><td colspan="3">Tabela Verdade da Porta NOR</td></tr><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0V</td><td>0V</td><td></td></tr><tr><td>0V</td><td>5V</td><td></td></tr><tr><td>5V</td><td>0V</td><td></td></tr><tr><td>5V</td><td>5V</td><td></td></tr></table>

## III - Inversora construída com porta NOR de duas entradas

Para transformar uma porta NOR em inversora, as entradas da porta foram conectadas entre si. Desta forma, garantie-se sempre o mesmo sinal lógico para ambas as entradas, eliminando-se assim as linhas intermediárias da tabela-verdade.

<table border="1"><tr><td>Entrada</td><td>Saída</td></tr><tr><td>A</td><td>S</td></tr><tr><td>0V</td><td></td></tr><tr><td>5V</td><td></td></tr></table>

## IV - Entradas flutuantes

Várias medidas foram efetuadas na saída de uma porta NOR, para verificar o nível lógico quando as entradas ou mesmo uma única entrada apresenta-se desligada no circuito . A tabela seguinte resume os resultados encontrados.

<table border="1"><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>Desligada</td><td>Desligada</td><td></td></tr><tr><td>Desligada</td><td>0V</td><td></td></tr><tr><td>Desligada</td><td>5V</td><td></td></tr></table>

Conclusão:___

---
- https://ocr.z.ai/