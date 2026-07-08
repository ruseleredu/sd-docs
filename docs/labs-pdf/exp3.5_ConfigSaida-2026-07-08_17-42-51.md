---
title: Exp3.5 - Configurações de Saída
description: Conhecer as configurações de saída das portas lógicas TTL.
---

## Objetivos

- Conhecer as configurações de saída das portas lógicas TTL.

- Conhecer as diferenças básicas nos modos de operação das portas com saída Totem Pole, Coletor Aberto e Tri-state.

- Praticar interligação de componentes e familiarização com montagens de circuitos lógicos.

- Construir circuitos, analisar o funcionamento e interpretar resultados.

## Preparação

## Conceitos

## 1) Estágios de saída.

Quanto ao estágio de saída, as portas TTL apresentam-se em três configurações: totem pole, coletor aberto e tri-state.

## Saída Totem Pole

As portas com saída Totem Pole são mais comuns e nos circuitos digitais. Nesta configuração, a saída de uma porta pode ser ligada às entradas de outras portas diretamente sem a necessidade de qualquer outro cuidado, apenas obedecendo a condição de fan-out (número máximo de portas que pode ser conectado a uma única saída).

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_1_1783532521425.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=ij1gD33%2Bjk91OSgc%2BU0RKfPM0BU%3D&Expires=1784137321' alt='OCR图片'/></div>

Interligação de portas com saída totem pole

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_2_1783532521481.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=QvyVtDg5xJRjbhUK3TEHP1y%2FXaE%3D&Expires=1784137321' alt='OCR图片'/></div>

Configuração de saída totem pole

## Saída Coletor Aberto

Como o próprio nome diz, a saída da porta é o coletor de um transistor que se encontra aberto, isto é, sem estar ligado a nenhum ponto. Para que o mesmo funcione, é necessário fazer a ligação de um resistor externo entre a saída e o Vcc. Tal resistor é denominado "pull-up" (Rp). Em geral, o seu valor encontra-se entre a faixa de 500 a $2\mathrm{k}\Omega$.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_1_1783532521488.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=6sU6i%2BIx42pO60zIqTA%2FRAJMFgM%3D&Expires=1784137321' alt='OCR图片'/></div>

Circuito digital utilizando portas com saídas coletor aberto

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_2_1783532521501.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=%2BGcPd%2B3hnUem%2Ft6HQMxCj3xAzII%3D&Expires=1784137321' alt='OCR图片'/></div>

Configuração de saída coletor aberto

## Saída Tri-State

As portas com saidas tri-state possuem, além das entradas normais, uma entrada a mais que serve de controle da saída, determinando funcionamento normal ou tri-state ("Z").

Na situação de tri-state a saída apresenta-se com alta impedância, podendo ser comparada, como se a saída estivesse desligada do circuito.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_3_1783532521721.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=XWGEg5eT1Hpqp7Fv1sKXO1Xz9KQ%3D&Expires=1784137321' alt='OCR图片'/></div>

Seguidor com saída tri-state

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_4_1783532521731.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jeK%2B83Wkq2pE29jnJsDZjsFfg%2Fc%3D&Expires=1784137321' alt='OCR图片'/></div>

<div align="center">

Circuito usando portas com saída tri-state

</div>


## 2) Seguidor ou buffer

O seguidor, também conhecido como buffer, é uma porta que não executa nenhuma operação booleana; serve apenas para aumentar os níveis de corrente e/ou tensão do sinal lógico, conforme requerido pela aplicação.

## 3) Lógica de fiação

Com as portas que utilizam saidas em coletor aberto, é possivel realizar a chamada lógica de fiação ou lógica de ponto, onde o produto lógico é efetuado sem a necessidade de se usar uma porta lógica. Para tanto, basta interconectar todas as saidas das portas a um único resistor de "pull-up". Assim, pode se dizer que a função AND é efetuada no ponto de interligação ou na fiação.

## Metodologia

M1- Para estudar as configurações de saída das portas lógicas TTL, serão realizados testes de componentes com saídas coletor aberto e com saídas três estados e fazendo-se uma breve comparação com a saída totem pole.

M2- Também, serão implementados circuitos que executam lógica de fio e um circuito para tráfego de dados, constituindo um barramento simples de dados.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão 5V</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 7405</td></tr><tr><td>1</td><td>CI 74126</td></tr><tr><td>1</td><td>resistor de 1kΩ</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos de 0,51 mm∅</td></tr></table>

P1- Usando uma das portas do CI 7405, implementar o circuito conforme a figura abaixo.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_1_1783532521759.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EWT70%2BtXwKVG6mvPN4%2FMzneZbCM%3D&Expires=1784137321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_2_1783532521765.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=EMuObdb9ruAV4YEitL6j7M%2FK0Kw%3D&Expires=1784137321' alt='OCR图片'/></div>

P2- Iniciar a montagem fazendo a alimentação do CI:

- conectar o terminal da tensão positiva de 5V ao pino 14;

- conectar o terminal negativo da fonte (terra do circuito) ao pino 7 do CI;

- P3- Ligar a fonte de alimentação, em seguida, medir a tensão no pino 2, para as situações de A= 0V e A= 5V . Preencher a tabela 1. (RI-I)

- não esquecer que a fonte deve estar ajustada para fornecer 5 Vcc.

P4- Acrescentar um resistor de "pull-up" (1k $ \Omega $) à saída do inversor (pino 2). Refazer as medidas no ponto Y, para $ A=0V $ e $ A=5V $ . Preencher a tabela 2. (RI-I)

OBS:Notar que o resistor de "pull-up" deve ser ligado entre Vcc e o pino 2.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_3_1783532521775.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Von%2BUqZHjEqbWmNqm4YSjwfARes%3D&Expires=1784137321' alt='OCR图片'/></div>

P5- Desligar a fonte de alimentação e modificar o circuito conforme o diagrama seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_4_1783532521780.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=HarJ6Zg%2BpYfSnUm1GeLcAwBRdeQ%3D&Expires=1784137321' alt='OCR图片'/></div>

P6- Ligar a alimentação. Variar os níveis lógicos das entradas A e B e com um voltimetro verificar o estado lógico da saída Y. (RI-II)

P7- Desligar a chave geral da fonte de alimentação. Substituir o CI pelo CI 74126 (4 seguidores com saída tri-state).

P8- Fazer as ligações necessárias de forma que os pinos A e C sejam utilizados como entradas e Y comjo saída.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_1_1783532521787.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=GCuaWAtM1slBfQ2jGjq6xiGwywY%3D&Expires=1784137321' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_2_1783532521793.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zEvhyPkenfszPLIq6UvWkvAxDF0%3D&Expires=1784137321' alt='OCR图片'/></div>

P8- Ligar a fonte de alimentação. Trocar os níveis lógicos das entradas de forma a passar por todas as situações possíveis. Completar a tabela-verdade (RI-III)

P9- Completar a montagem anterior para obter o circuito seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_3_1783532521803.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=b6Rx%2F9l87TPSN2rbhIlhNpAxW%2Fw%3D&Expires=1784137321' alt='OCR图片'/></div>

<div align="center">

P10- Preencher a tabela-verdade. (RI-IV)

</div>

Q1. Cite tres exemplos de Cls com coletor aberto.

Q2. Implementar a expressão $ S=A.B+C.D+E $ , usando a lógica de fiação.

Q3. Cite tres exemplos de Cls com saída tri-state.

Q4. Elaborar um circuito lógico para ser usado juntamente com as entradas de controle das portas tri-state, com a finalidade de evitar conflitos de sinais no barramento esquematizado a seguir.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F20260709014139584e16c6c3624cb5%2Fcrop_4_1783532521829.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=iXNwMpp1G4UqRTZm5BXGIh9wXnY%3D&Expires=1784137321' alt='OCR图片'/></div>

Q5. Explicar o comportamento de uma porta tri-state, quando a entrada de controle encontra-se em aberto.

Q6. Explicar o que pode acontecer quando mais de uma saída tri-state em um barramento, estiver ativada ao mesmo tempo.

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>


## Relatório

## I) Saída Open Colector (Coletor Aberto)

Para verificar a operação de uma porta TTL com saída em coletor aberto, foi utilizada uma das portas do CI 7405 que contém seis inversores deste tipo.

Circuito sem o resistor de "pull-up"

<div align="center">

Tabela 1

</div>

<table border="1"><tr><td>Entrada</td><td>Saída</td></tr><tr><td>A</td><td>Y</td></tr><tr><td>0</td><td></td></tr><tr><td>1</td><td></td></tr></table>

Circuito com o resistor de "pull-up"

<div align="center">

Tabela 2

</div>

<table border="1"><tr><td>Entrada</td><td>Saída</td></tr><tr><td>A</td><td>Y</td></tr><tr><td>0</td><td></td></tr><tr><td>1</td><td></td></tr></table>

Analisando as duas tabelas, verifica-se que é necessário utilizar o resistor de "pull-up" nas saidas das portas em coletor aberto, pois ___

## II - Lógica de Fiação

O circuito abaixo foi construído com a finalidade de mostrar que usando portas com saída em coletor aberto, é possível executar a função lógica ___ através de um fio.

Circuito utilizado

<table border="1"><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>C</td><td>A</td><td>Y</td></tr><tr><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td></td></tr></table>

Através da tabela-verdade podemos concluir que o circuito executa a seguinte função lógica:

Y=___

## III - SaídaTri-state

Para conhecer o funcionamento de uma porta com saída tri-state foi utilizado o circuito abaixo, construído com um dos seguidores do CI 74126. A porta utilizada, além das entradas normais, possui uma entrada de controle que serve para ___

Para a porta entrar em operação normal, o terminal de controle deve ser mantido em nível

lógico ___, caso contrário a saída permanecerá no

___

<table border="1"><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>C</td><td>A</td><td>Y</td></tr><tr><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td></td></tr></table>

## IV - Barramento de dados

O circuito abaixo mostra a configuração de um barramento de dados unidirecional construído com portas tri-state. A porta inversora, no circuito, tem a finalidade de ___

Circuito utilizado

<table><tr><td colspan="3">Entradas</td><td>Saída</td></tr><tr><td>C</td><td>B</td><td>A</td><td>Y</td></tr><tr><td>0</td><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td></td></tr></table>

---
- https://ocr.z.ai/