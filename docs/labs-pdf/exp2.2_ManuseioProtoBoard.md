---
title: Exp2.2 - Utilização da Matriz de Contatos
description: Conhecer a organização de uma matriz de contatos.
---

## Objetivos

- Conhecer a organização de uma matriz de contatos.

- Aprender a utilizar uma matriz de contatos como base para fixação de componentes em montagens de circuitos eletrônicos digitais.

- Praticar a interligação de componentes sobre matriz de contatos.

- Praticar a medida de tensão elétrica. nos diversos pontos de um circuito digital.

## Preparação

## Conceitos

## 1) Matriz de Contatos

Uma grande parte dos circuitos eletrônicos, especialmente os digitais, quando em fase de criação ou desenvolvimento, são ensaiados sobre uma base chamada matriz de contatos.

A matriz de contatos é formada, basicamente, por uma peça plástica moldada com espaços internos próprios para a acomodação de conectores metálicos. Os conectores metálicos são acessados através dos pequenos furos que cobrem a superfície da peça plástica.

Os pequenos furos servem para a fixação e conexão dos componentes eletrônicos. Quando encaixados, os terminais dos componentes ficam presos entre duas lâminas que constitem os conectores metálicos.

Durante uma montagem, primeiro os componentes são fixados sobre a matriz, depois, através de pedaços de fios rígidos de diâmetro apropriado, as demais interligações são efetuadas. Assim, sobre a matriz pode-se montar desde circuitos simples até os mais complexos sem a necessidade de soldar os componentes.

Existem muitos modelos de matriz de contatos, uns com mais, outros com menos pontos de interligação, porém, a organização dos contatos obedece sempre a um mesmo padrão.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_1_1783531010193.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=m6FOTneSmCFFf2E7pBns1SaWFic%3D&Expires=1784135810' alt='OCR图片'/></div>

Pode-se observar nesta figura que a matriz é composta por dois tipos de blocos de contatos (bloco 1 e bloco 2). No bloco 1 cada 5 furos dão acesso ao mesmo conector metálico, localizado internamente à base plástica. No bloco 2, os furos estão organizados visualmente em grupos de 5 mas, só visualmente, pois internamente, todos os pontos de uma mesma linha estão interligados entre si.

Normalmente as linhas do bloco 2 são utilizadas como barramento de distribuição de alimentação, ou seja, pode-se adotar uma das linhas como Gnd e outra como Vcc.

No comércio, encontra-se modelos de diversos fabricantes, tais como Celis, Shakomiko e outros Entre os modelos importados a marca Proto-board é a mais conhecida.

## 2) Alimentando um Circuito

Todo circuito eletrônico para funcionar necessita de uma fonte de energia que, na maioria dos casos se resume em uma fonte de tensão. A fonte de tensão se encarrega de fornecer a tensão elétrica adequada e necessária para o correto funcionamento do circuito

Muitas vezes esta fonte de tensão elétrica é referida como fonte de alimentação do circuito. Assim, o termo "alimentar um circuito" significa ligar o circuito a uma fonte de tensão apropiada.

## 3) Diodo Emissor de Luz

O diodo emissor de luz (LED) é um componente que emite luz quando polarizado diretamente. Para polarizar um LED diretamente liga-se o catodo ao terra do circuito e o anodo ao positivo, juntamente com uma resistência série que tem como finalidade a limitação de corrente através da junção.

Quando em operação o LED apresenta uma queda de tensão $ (V_{\gamma}) $ ,da ordem de 1,7 a 2,1V entre seus terminais e deve passar por ele uma corrente de aproximadamente 10mA a fim de que este possa emitir uma luminosidade ideal.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_2_1783531010200.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=d6fyxhW3JSD9o1BotDHKREIGt8U%3D&Expires=1784135810' alt='OCR图片'/></div>

## Metodologia

M1- Para verificar como a matriz de contatos está organizada serão medidas as resistências entre os furos destinados à instalação dos componentes. Os pontos que apresentarem resistência zero (ou muito próximo de zero) pertencerão a mesma linha ou coluna.

M2- Para realizar a fase de treinamento de colocação e retirada de componentes na base de montagem, alimentação do circuito e interligação de terminais, será utilizado como referência o circuito de um diodo emissor de luz.

M3- Em seguida um circuito integrado 7400 e vários componentes serão utilizados para montar um oscilador com frequência em torno de 1Hz.

## Relação de Material

<table border="1"><tr><td>Quantidade</td><td>Descrição</td></tr><tr><td>01</td><td>matriz de contatos</td></tr><tr><td>01</td><td>fonte de tensão CC ajustável ou fixa em +5V</td></tr><tr><td>01</td><td>multimetro analógico ou digital</td></tr><tr><td>01</td><td>alicate de corte pequeno</td></tr><tr><td>01</td><td>CI 7400</td></tr><tr><td>01</td><td>resistor de 150Ω</td></tr><tr><td>01</td><td>resistor de 330Ω</td></tr><tr><td>01</td><td>resistor 1kΩ</td></tr><tr><td>01</td><td>resistor de 2,2kΩ</td></tr><tr><td>01</td><td>LED</td></tr><tr><td>02</td><td>capacitorores de 220μF</td></tr><tr><td>--</td><td>fios rígidos de 0,51mm∅</td></tr></table>

Praticando

## Organização da matriz de contatos

P1- Colocar a chave seletora do multimetro na posição apropriada para medição de resistências ( $ \Omega $ ) e selecionar o fundo de escala mais baixo.

P2- Enrolar firmemente nas pontas de provas do multimetro, um pedaço de fio rígido. Em seguida, fazer uma laçada para garantir que os fios fiquem bem presos às pontas de provas Não esquecer, que as extremidades dos fios devem estar sem a capa plástica.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_1_1783531010219.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VLzcT49h27qrqM09IB67HzsnkG8%3D&Expires=1784135810' alt='OCR图片'/></div>

P3- Pesquisar a organização da matriz de contatos colocando os fios das pontas de provas, preparadas no item anterior, dentro dos furinhos da matriz, conforme a indicação do desenho abaixo.

Fazer as medidas em vários pontos diferentes da matriz. Quando dois pontos de contato pertencerem ao mesmo barramento o medidor irá indicar resistência aproximadamente zero. (RI-I)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_2_1783531010227.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=Gsn8oVChheQGE8F45ZWB7WbX734%3D&Expires=1784135810' alt='OCR图片'/></div>

## Polarização de um LED

P4- Ajustar uma fonte de tensão continua em 5V. Depois de feito o ajuste a fonte deve ser mantida desligada.

P5- Fixar na matriz de contatos o LED e o resistor de $ 3 3 0 \, \Omega $ formando um circuito série. Completar a ligação conforme o desenho abaixo. Para fazer estas ligações utilizar fio rígido de diâmetro apropriado, cortado do tamanho certo e com as extremidades desencapadas cerca de 5mm. Nunca desencapar muito mais de 5mm as extremidades de cada fio, pois as áreas desprotegidas pelo plástico podem provocar curto-circuito prejudicando a montagem e o funcionamento do circuito.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_3_1783531010234.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=8Y4biLcDHJbflJOH5Y8tU%2FfMpeg%3D&Expires=1784135810' alt='OCR图片'/></div>

P6- Utilizar dois cabos banana-banana para interligar a fonte de tensão com a matriz de contatos.

P7- Ligar a fonte de tensão anteriormente ajustada em 5V. Caso o LED não acender, conferir todas as ligações e verificar se o LED está ligado com a polarização correta. Em último caso substituir o LED. (RI-II)

## Prática de montagem - circuito oscilador

P8- Fixar o circuito integrado 7400 na matriz de contatos, conforme o exemplo abaixo, tomando o cuidado de verificar se todos os terminais estão na posição correta.

Com um pouco de pressão o circuito integrado se ajusta perfeitamente nos pontos de contatos. Os componentes sempre devem ser instalados cuidadosamente, um descuido durante esta operação poderá dobrar os terminais prejudicando as ligações que são feitas unicamente por contato.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_1_1783531010249.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kjNSpKy7Ytvx%2FJ9or02tgnap4rc%3D&Expires=1784135810' alt='OCR图片'/></div>

P9- Contar os pontos de contato que ainda restaram para cada terminal do circuito integrado - 4 pontos de contato para cada terminal. Caso esta situação não ocorrer é porque o circuito integrado foi instalado num local indevido.

Obs: Se for necessário retirar o CI (circuito integrado) da placa de montagem, utilizar uma ferramenta própria para esta atividade ou então utilizar uma pequena chave de fenda colocada cuidadosamente por baixo do circuito integrado, ora de um lado ora do outro, como uma alavanca, forçando aos poucos o CI para cima.

P10- Preparar a alimentação do CI ligando-se os seguinte terminais (pinos):

Pino 14 do CI com o conector (+)

Pino 07 do CI com o conector (-)

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_2_1783531010256.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=VdhDJtTjuyW3iFYC3PI4JssNhn4%3D&Expires=1784135810' alt='OCR图片'/></div>


P11- Completar o circuito conforme a figura seguinte. Para isto fazer as ligações necessárias com os fios rígidos, anotando no circuito as ligações realizadas a fim de certificar-se de que todas as ligações foram feitas.

<div style={{ textAlign: 'center' }}><img src='https://maas-watermark-prod-new.cn-wlcb.ufileos.com/ocr%2Fcrop%2F202607090116247112c9dd86524393%2Fcrop_1_1783531010276.png?UCloudPublicKey=TOKEN_6df395df-5d8c-4f69-90f8-a4fe46088958&Signature=kAKkFTKoDBQkQUIdDVzeE5MzVwA%3D&Expires=1784135810' alt='OCR图片'/></div>

<div align="center">

P12- Através de cabos banana-banana ligar o positivo da fonte de tensão de 5 V ao conector (+) da matriz de contatos e o negativo ao conector (-).

</div>

<div align="center">

P13- Ligar a fonte de alimentação e verificar o sinal de saida do circuito (pino 11) do CI. (RI-III)

</div>

<table border="1"><tr><td colspan="3">Instituição:</td></tr><tr><td colspan="3">Curso: Discipl.: Série/Turma:</td></tr><tr><td colspan="3">Prof.: Data: Conceito:</td></tr><tr><td></td><td>Nome</td><td>Nº</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>

Relatório Imediato da Experiência 2.2

Utilização da Matriz de Contatos

## I - Organização de uma Matriz de Contatos

Para verificar a organização da matriz de contatos, foram realizadas medidas de resistência entre os pontos que a formam. Quando dois ou mais pontos pertenciam a uma mesma linha ou mesma coluna, o medidor indicava resistência baixa, aproximadamente zero. Quando os pontos pertenciam a linhas ou colunas diferentes, o medidor indicava resistência infinita.

Com o resultado das medidas efetuadas chegou-se à seguinte configuração:

(Fazer no espaço reservado acima, o desenho esquemático da matriz de contatos, mostrando as ligações internas).

## II- Ligação de um Diodo Emissor de Luz

O desenho seguinte mostra, de forma esquemática, como os componentes foram interligados sobre a matriz de contatos, para compor o circuito polarizador do Diodo Emissor de Luz.

## III- Circuito Oscilador

Para praticar o uso da matriz de contatos foi construído um circuito oscilador com frequência em tomo de 1 Hz. Na prática, o oscilador apresentou a frequência de___Hz. Para determinar a frequência do oscilador foi utilizado o seguinte procedimento: ___

---

Tem-se a seguir, o desenho esquemático do circuito oscilador, mostrando todas as ligações efetuadas.

---
- https://ocr.z.ai/
