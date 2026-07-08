---
title: Exp4.4 - Circuitos XOR (OU-Exclusivo) e XNOR (Coincidência)
description: Construir a tabela-verdade de um circuito XOR (OU-Exclusivo) e um circuito XNOR (Coincidência).
---

# Experiência 4.4: Circuitos XOR (OU-Exclusivo) e XNOR (Coincidência)

## Objetivos

- Verificar, na prática, as propriedades da função XOR (OU-Exclusivo).

- Implementar funções lógicas por meio de portas OU-Exclusivo.

- Construir a tabela-verdade de um circuito XOR (OU-Exclusivo) e um circuito XNOR (Coincidência).

## Preparação

## Conceitos

## 1) Circuito XOR (OU-Exclusivo)

Por se tratar de uma operação muito comum em eletrônica digital, o circuito XOR recebe simbologia própria e pode ser trabalhado como uma porta lógica individual.

Ex.: Um sistema com dois interruptores para acender a luz de um corredor tem o seu funcionamento de acordo com a operação XOR. A lâmpada poderá ser acesa através do primeiro "ou" do segundo interruptor e vice-versa, mas nunca através do acionamento de ambos ao mesmo tempo, assim prevalece a exclusividade.

Circuito Combinacional XOR (OU-Exclusivo) e expressão lógica.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_2_1783534098436.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=FoorB6nIuK4KOjQxa9VzsU3gFiA%3D&Expires=1784138898' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_3_1783534098456.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=aC9Eot8y%2FPSXRTf3DvZqVQ2sep4%3D&Expires=1784138898' alt='OCR图片'/></div>

Símbolo da porta, notação da expressão lógica XOR e tabela-verdade.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_1_1783534098469.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=7Qw1%2BMv4QLWoCWxciTmUmFUVGf4%3D&Expires=1784138898' alt='OCR图片'/></div>

<table border="1"><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td></tr></table>

$$
S = A \oplus B
$$

## 2) Circuito XNOR (Coincidência)

Também apresenta simbologia própria como as portas lógicas, porém trata-se de um circuito combinacional.

A figura abaixo mostra a configuração do circuito combinacional XNOR (Coincidência) e expressão lógica correspondente.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_2_1783534098496.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Rb2zAFuEWCBPd13AT2CFAQUrsP0%3D&Expires=1784138898' alt='OCR图片'/></div>

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_3_1783534098509.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=BXZCtwtNeXHe94bv9dstd7IKPVY%3D&Expires=1784138898' alt='OCR图片'/></div>

Simbolo da porta, notação da expressão lógica XNOR e tabela verdade.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_4_1783534098521.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2qXs3%2BBbkVuuhiuWsSSJbqg6Xu8%3D&Expires=1784138898' alt='OCR图片'/></div>

$$
S = A \odot B
$$

<table border="1"><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>1</td><td>1</td></tr></table>

## 3) Propriedades da funções XOR e XNOR

1) A $ \oplus $ 0 = A

1) A $ \odot $ 0 $ = \overline{{A}} $

2) $ \mathrm{A} \oplus1=\overline{\mathrm{A}} $

2) A $ \odot $ 1 = A

3) A $ \oplus $ A=0

3) A $ \odot $ A =1

4) $ A\oplus \overline{A}=1 $

4) $ A\odot \overline{A}=0 $

5) A $ \odot $ A $ \odot $... $ \odot $ A = A

para um número par de A

6) A $ \oplus $ A $ \oplus $ $ \dots $ $ \oplus $ A = A

para um número par de A

para um número impar de A

6) A $ \odot $ A $ \odot $... $ \odot $ A = 0

para um número impar de A

7) $ \overline{{A \oplus B}}=A\odot B $

7) $ \overline{{A \odot B}}=A\oplus B $

## 4) Bit de paridade

É um bit a mais transmitido junto com a informação com a finalidade de indicar se o número total de bits iguais a "1" presente na informação é par (paridade par) ou impar (paridade impar). Assim, quando a informação chegar destino, a paridade é testada. Se a paridade não corresponder, significa que houve erro durante a transmissão e os dados deverão ser enviados novamente.

## Metodologia

M1 - Os circuitos XOR e XNOR serão implementados com portas lógicas discretas. Em seguida será anotado os dados referentes ao funcionamento de cada um deles nas tabelas verdades correspondentes.

M2 - Serão realizadas montagens que utilizam circuitos integrados XOR.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão de 5V</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>1</td><td>CI 7432</td></tr><tr><td>1</td><td>CI 7486</td></tr><tr><td>1</td><td>LED</td></tr><tr><td>1</td><td>resistor de 1kΩ</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos 0,51mm∅</td></tr></table>

## Praticando

P1- Construir o circuito conforme o diagrama seguinte.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_1_1783534098542.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=x%2BgsoLNUF1kcZP%2FjBss5VMOAlM8%3D&Expires=1784138898' alt='OCR图片'/></div>

P2- Ligar a fonte de alimentação.

P3- Aplicar níveis lógicos às entradas A e B do circuito. Para cada condição de entrada verificar o estado lógico da saída S através de um provador lógico ou um voltimetro. (RI-I)

P4- Realizar os mesmos procedimentos para testar o próximo circuito. (RI-II)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_2_1783534098548.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=u1L3XkVeXiihQYYUjBnE90a36gc%3D&Expires=1784138898' alt='OCR图片'/></div>

P5- Fazer a montagem do circuito abaixo em seguida completar a tabela-verdade. (RI-III)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_3_1783534098582.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=2AFl6az42tmm6nYPNrAtpmjexBA%3D&Expires=1784138898' alt='OCR图片'/></div>

P6- Utilizar o CI 7486 para implementar o circuito gerador de paridade abaixo. (RI-IV)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_4_1783534098587.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=rDhTpPQSG6znyZtEdGBm0wmmmWc%3D&Expires=1784138898' alt='OCR图片'/></div>


P7- Usar o Cl 7486 para montar um circuito conversor de binário para código Gray, conforme a figura abaixo.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902080171eb38ffe52e4158%2Fcrop_1_1783534098694.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=fvEW1GKqeylH0lGBskRBvIsHxQA%3D&Expires=1784138898' alt='OCR图片'/></div>

<div align="center">

P8- Completar a tabela e verificar o funcionamento do circuito (RI-V)

</div>

## Questões

Q2. Fazer o diagrama lógico de um circuito verificador de paridade de 6 bits, com portas OU-Exclusivo.

Q3. O que significa paridade par e paridade impar?

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td colspan="2">Nome</td><td>Nº</td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr><tr><td colspan="2"></td><td></td></tr></table>

## Relatório

I - Circuito XOR e tabela verdade

Circuito lógico utilizado

<table border="1"><tr><td colspan="2">Entradas</td><td>Saída</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td></td></tr></table>

## II - Circuito XOR de três entradas e tabela-verdade

Para construir o circuito XOR de três entradas, foram utilizadas duas portas do CI 7486 interligadas conforme a configuração seguinte.

<table border="1"><tr><td>A</td><td>B</td><td>C</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td></td></tr></table>

Circuito lógico utilizado

III- Circuito XNOR de duas entradas e tabela-verdade

Circuito lógico utilizado

<table border="1"><tr><td colspan="2">Entradas</td><td>Saida</td></tr><tr><td>A</td><td>B</td><td>S</td></tr><tr><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td></td></tr></table>

## IV - Tabela verdade do circuito Gerador de Bit de Paridade

Para construir o circuito gerador de paridade, foram utilizadas três portas do CI 7486, que foram interligadas conforme o esquema elétrico abaixo.

Explicação do princípio de funcionamento do gerador de paridade.

---

<table border="1"><tr><td>A</td><td>B</td><td>C</td><td>D</td><td>S</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td></td></tr><tr><td>0</td><td>1</td><td>1</td><td>0</td><td></td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td></td></tr></table>

## V - Conversor de binário para código Gray

O código Gray tem como característica o fato de que os números de uma sequência binária escrita neste código, de um número para outro, apresentam apenas um algarismo diferente.

O circuito abaixo mostra a configuração de um codificador de binário para código Gray.

<table border="1"><tr><td colspan="5">Binário</td><td colspan="5">Código Gray</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td></tr></table>

---
- https://ocr.z.ai/
