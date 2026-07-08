---
title: Exp5.1 - Codificador Decimal-Binário e Decodificador BCD - Decimal.
description: Implementar um circuito lógico codificador decimal para binário.
---

## Objetivos

- Implementar um circuito lógico codificador decimal para binário.

- Verificar o funcionamento de um decodificador BCD para decimal.

- Verificar o funcionamento de um CI decodificador BCD para decimal.

- Praticar a utilização de CI decodificadores em circuitos digitais.

## Preparação

## Conceitos

## 1) Codificador

É um circuito que recebe as informações de uma forma e através de um código as convertem para outra forma mais adequada para ser transmitida ou processada.

Exemplo: Considere um sistema digital que possui um teclado com as teclas numeradas de zero a nove para entradas de dados. Ao apertar uma das teclas, um certo número binário deve ser gerado para que o sistema possa identificar a tecla acionada. O circuito capaz de realizar esta tarefa é chamado de codificador.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902195373cef49d95fa44af%2Fcrop_1_1783534812480.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=mJl91XJIuE7pgV4DVlna57gDh4I%3D&Expires=1784139612' alt='OCR图片'/></div>

## 2) Decodificador

Quando um sistema digital completa uma operação o resultado encontra-se de forma binária e muitas vezes codificado, porém ao apresentá-lo ao operador é usual utilizar a forma decimal. O circuito responsável em converter a informação binária para decimal recebe o nome de decodificador binário/decimal.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902195373cef49d95fa44af%2Fcrop_1_1783534812568.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=maKy6hrSGEqEODlz2I7sLCjEv8k%3D&Expires=1784139612' alt='OCR图片'/></div>

## Metodologia

M1- Será implementado, com portas lógicas, um codificador decimal/binário para codificar algarismos de 1 a 6 em binário.

M2- Será implementado, com portas lógicas, um decodificador binário/decimal de 2 entradas e 4 saídas.

M3- Será analisado o funcionamento do circuito integrado 7442, decodificador BCD para decimal.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>1</td><td>fonte de tensão de 5V</td></tr><tr><td>1</td><td>matriz de contatos</td></tr><tr><td>1</td><td>multimetro</td></tr><tr><td>1</td><td>CI 7404</td></tr><tr><td>1</td><td>CI 7408</td></tr><tr><td>2</td><td>CI 7432</td></tr><tr><td>1</td><td>CI 7442</td></tr><tr><td>10</td><td>LEDs ou matriz de leds</td></tr><tr><td>10</td><td>resistores de 1kΩ</td></tr><tr><td>2</td><td>cabos banana-banana</td></tr><tr><td>-</td><td>fios rígidos 0,51 mm</td></tr></table>

## Praticando

P1- No sistema seguinte, ao pressionar uma das teclas o codificador identifica a tecla pressionada e responde entregando na sua saída o número binário correspondente a ela. Analisar cuidadosamente a tabela verdade do sistema e escrever as equações das saídas.(RI-I)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902195373cef49d95fa44af%2Fcrop_1_1783534812574.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=jDZDe8fQ%2FmxMv8YwIZgvKBiSy4Q%3D&Expires=1784139612' alt='OCR图片'/></div>

<table border="1"><tr><td colspan="6">Entradas</td><td colspan="3">Saídas</td></tr><tr><td>$E_{1}$</td><td>$E_{2}$</td><td>$E_{3}$</td><td>$E_{4}$</td><td>$E_{5}$</td><td>$E_{6}$</td><td>$b_{1}$</td><td>$b_{2}$</td><td>$b_{3}$</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>

P2- A partir das expressões obtidas desenhar o circuito lógico do codificador. (RI-II)

P3- Implementar o circuito elaborado no item anterior usando as portas disponíveis.

P4- Ligar a fonte de alimentação e aplicar níveis lógicos às entradas $ E_{1}, E_{2}, E_{3}, E_{4}, E_{5}, e E_{6} $ do circuito, conforme as indicações das linhas da tabela verdade. Cada linha indica a situação em que uma tecla foi pressionada. Para cada situação de entrada verificar os estados lógicos das saídas $ b_{1}, b_{2} e b_{3} $ através de um provador lógico ou um voltimetro. (RI-III)

P5- No sistema abaixo, o número binário colocado em A e B é indicado como nível alto somente em uma das linhas de saída, realizando desta forma a conversão bináriodecimal. Analisar cuidadosamente a tabela verdade do sistema e escrever as equações da saída. (RI-IV)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902195373cef49d95fa44af%2Fcrop_2_1783534812581.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=TusdDVNgcEx5d7nzbsbRyzlxEqA%3D&Expires=1784139612' alt='OCR图片'/></div>

P6- A partir das expressões obtidas desenhar o circuito lógico do sistema. (RI-V)

P7- Implementar o circuito elaborado no item anterior usando as portas disponíveis.

P8- Ligar a fonte de alimentação. Aplicar níveis lógicos às entradas A e B do circuito conforme as indicações das linhas da tabela. Para cada condição de entrada verificar os estados lógicos das saídas $ S_{0}, S_{1}, S_{2} \in S_{3} $ , através de um provador lógico ou um voltimetro. (RI-VI)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902195373cef49d95fa44af%2Fcrop_1_1783534812600.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=zFaGsCUgMQ3jlBjMHehaTZns4TM%3D&Expires=1784139612' alt='OCR图片'/></div>

<div align="center">

Entradas do Decodificador

</div>

P10- Ligar a fonte de alimentação. Aplicar níveis lógicos às entradas do circuito (pinos 15, 14, 13 e 12), conforme as indicações das linhas da tabela. Para cada condição de entrada verificar os estados lógicos das saídas através dos LEDs instalados em cada uma das saídas. (RI-VII)

P11- Supondo que devido a um mau contato ocorra a seguinte situação de entrada:

$ D_{0}=(\mathrm{sem conexão}), D_{1}=1, D_{2}=1 \mathrm{e} D_{3}=0 $ verificar na prática a consequência desta irregularidade. (RI-VIII).

## Questões

Q1. Procurar nos manuals très CIs codificadores. Explicar as principais diferenças entre eles.

Q2. Estudar o sistema abaixo e explicar o seu funcionamento.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902195373cef49d95fa44af%2Fcrop_2_1783534812700.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=H794f2KSb4zdTttaIcyUdDpLAko%3D&Expires=1784139612' alt='OCR图片'/></div>

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td></td><td>Nome</td><td>Nº</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

## Relatório Imediato da Experiência 5.1

## I- Equações de saída do codificador

Através da tabela verdade do codificador foram extraídas as seguinte expressões lógicas de saída:

<table border="1"><tr><td colspan="6">Entradas</td><td colspan="3">Saídas</td></tr><tr><td>$E_{1}$</td><td>$E_{2}$</td><td>$E_{3}$</td><td>$E_{4}$</td><td>$E_{5}$</td><td>$E_{6}$</td><td>$b_{1}$</td><td>$b_{2}$</td><td>$b_{3}$</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>

b₁= ...

b₂ = ...

b₃ = ...

## II- Circuito lógico do codificador

A partir das expressões lógicas chegou-se ao circuito lógico a seguir:

## III- Tabela verdade do circuito prático

Ao ensaiar o circuito lógico, utilizando apenas uma das entradas ativas por vez, obteve-se os seguintes níveis lógicos nas saídas:

<table border="1"><tr><td colspan="6">Entradas</td><td colspan="3">Saidas</td></tr><tr><td>$E_{1}$</td><td>$E_{2}$</td><td>$E_{3}$</td><td>$E_{4}$</td><td>$E_{5}$</td><td>$E_{6}$</td><td>$b_{1}$</td><td>$b_{2}$</td><td>$b_{3}$</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td></tr><tr><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td><td></td><td></td><td></td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td></td><td></td><td></td></tr></table>

Para mais de uma entrada ativa no mesmo instante observa-se que as saídas ___

## IV- Equações de saída do decodificador

Como o decodificador possui 4 saídas, 4 expressões foram escritas a partir do conteúdo da tabela verdade.

<table border="1"><tr><td colspan="2">Entradas</td><td colspan="4">Saídas</td></tr><tr><td>A</td><td>B</td><td>S0</td><td>S1</td><td>S2</td><td>S3</td></tr><tr><td>0</td><td>0</td><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></table>

$ S_{0}= $ ...

$ S_{1}= $ ...

$ S_{2}= $ ...

$ S_{3}= $ ...

## V- Circuito lógico do decodificador

No esquema abaixo verifica-se que o circuito total é formado por circuitos menores, cada um deles refere-se a uma expressão lógica, porém todos possuem as entradas A e B em comum.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F2026070902195373cef49d95fa44af%2Fcrop_1_1783534812708.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=76E5Mb1EBEmMbv%2F5BfWgVMY9R%2F0%3D&Expires=1784139612' alt='OCR图片'/></div>

## VI- Tabela verdade do circuito prático

A tabela abaixo mostra os estados lógicos das saídas obtidos durante o ensáio do circuito decodificador.

<table border="1"><tr><td colspan="2">Entradas</td><td colspan="4">Saídas</td></tr><tr><td>A</td><td>B</td><td>S0</td><td>S1</td><td>S2</td><td>S3</td></tr><tr><td>0</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>0</td><td>1</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td></td><td></td><td></td><td></td></tr></table>

## VII- Tabela verdade do CI 7442

Para ensaiar o CI 7442 aplicou-se nas entradas DCBA, níveis lógicos referentes à sequência binária de 0000 a 1111 e obteve-se os seguints resultados nas saídas:

<table border="1"><tr><td rowspan="2">N°</td><td colspan="4">Entradas</td><td colspan="10">Saídas</td></tr><tr><td>D</td><td>C</td><td>B</td><td>A</td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>2</td><td>0</td><td>0</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>3</td><td>0</td><td>0</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>4</td><td>0</td><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>5</td><td>0</td><td>1</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>6</td><td>0</td><td>1</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>7</td><td>0</td><td>1</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>8</td><td>1</td><td>0</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>9</td><td>1</td><td>0</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td rowspan="6">INVALIDOS</td><td>1</td><td>0</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>0</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>1</td><td>1</td><td>1</td><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>


## VIII- Terminal aberto

Para verificar o comportamento do CI quando um terminal encontra-se em aberto foi simulada a seguinte situação de entrada: $ D_{0} = (\text{sem conexao}), $ $ D_{1}=1, $ $ D_{2}=1eD_{3}=0. $ Nesta situação verifica-se que ___

---
- https://ocr.z.ai/