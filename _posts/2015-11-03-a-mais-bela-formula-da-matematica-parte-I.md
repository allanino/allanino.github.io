---
layout: post    
title:  "A mais bela fórmula da Matemática (Parte I)"
description: "Notas sobre um seminário"
date:   2015-11-03 18:00:00
tags: [math, portuguese]
categories: math
math: true
comments: true
image:
    feature: star_trail_f.jpg
---

Há alguns anos, enquanto ainda cursava a graduação, proferi um seminário entitulado "A mais bela fórmula da Matemática". Muitos amigos não puderam comparecer e solicitaram uma transcrição do seminário, a qual agora forneço, com apenas 7 anos de atraso.

O texto está divido em duas partes mais ou menos independentes, a depender de seus conhecimentos prévios. Nesta primeira parte falaremos sobre o número de Euler e veremos o que o torna tão especial. Na segunda parte (a ser postada) estudaremos a fórmula de Euler propriamente, uma belíssima ligação entre o número de Euler e as funções trigonométricas obtida com o auxílio dos números complexos.

Como última observação antes de começarmos, quero deixar claro que a maioria dos desenvolvimentos que farei foram tirados de outras fontes, todavia os devidos créditos serão dados.

<figure>
    <a href="http://www.amazon.com/Dr-Eulers-Fabulous-Formula-Mathematical/dp/0691150370" >
        <img src="http://press.princeton.edu/images/k8129.gif" style="width:60%">
    </a>
    <figcaption>Capa do livro de Paul J. Nahin, o qual contém várias aplicações da "Fabulosa Fórmula do Dr. Euler".</figcaption>
</figure>

## I. O número de Euler
Por muito tempo fiquei intrigado com o uso do número \\( e = 2.7182818... \\) como base do chamado logaritmo natural. Como poderia essa base ser natural? Por que esse número em particular? Como um número irracional pode ser mais natural que qualquer número natural? Encontrei uma resposta satisfatória no trabalho do próprio Euler, apresentado de forma magistral no livro <a href="http://www.amazon.com/Euler-Master-Dolciani-Mathematical-Expositions/dp/0883853280/">Euler: The Master of Us All</a> de William Dunham.

Nosso ponto de partida é a operação de potenciação. Mais especificamente analisaremos potências do tipo \\( a^{\omega} \\) com \\( \omega \\) "pequeno", ou seja, \\( \omega \rightarrow 0 \\) na linguagem mais moderna da teoria dos limites. Na época de Euler, o Cálculo Diferencial e Integral ainda não havia passado pelo processo de formalização que veio a tornar-se o padrão, através do conceito de limites, de modo que Euler utiliza o conceito de infinitesimais: grandezas infinitamente pequenas. Em homenagem a Euler, evitarei o uso de limites neste artigo, utilizando de forma intuitiva e não rigorosa o conceito de infinitesimal. Ainda seguindo Euler, utilizarei como símbolos para essas grandezas infinitesimais as letras gregas \\( \psi \\) e \\( \omega \\).

Observe que \\( a^{\omega} \\) irá se aproximar cada vez mais de \\( 1 \\) à medida que o valor de \\( \omega \\) aproximar-se de \\( 0 \\). Ou seja, podemos escrever
\\[ a^{\omega} = 1 + \psi \implies \psi = a^{\omega} - 1, \tag{1}\label{eq:1} \\]
com \\( \psi \rightarrow 0 \\) sempre que \\( \omega \rightarrow 0 \\).

Tomemos \\( a = 2 \\) e façamos \\( \omega \\) cada vez menor. Obtemos a seguinte tabela:

<div style="overflow:auto; margin-top:-72px;">
<table align="center">
    <thead>
        <tr>
            <th>  \( \omega \) </th>
            <th>  \( 2^\omega \) </th>
            <th> \( \psi \) </th>
            <th> \( k = \frac{\psi}{\omega} \) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>  \( 0.1 \) </td>
            <td>  \( 1.071773463  \) </td>
            <td>  \( 0.071773463  \) </td>
            <td> \( 0.717734625 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.01 \) </td>
            <td>  \( 1.006955550  \) </td>
            <td>  \( 0.006955550  \) </td>
            <td> \( 0.695555006 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.001 \) </td>
            <td>  \( 1.000693387  \) </td>
            <td>  \( 0.000693387  \) </td>
            <td> \( 0.693387463 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.0001 \) </td>
            <td>  \( 1.000069317 \) </td>
            <td>  \( 0.000069317 \) </td>
            <td> \( 0.693171204 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.00001 \) </td>
            <td>  \( 1.000006931 \) </td>
            <td>  \( 0.000006931 \) </td>
            <td> \( 0.693149583 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.000001 \) </td>
            <td>  \( 1.000000693 \) </td>
            <td>  \( 0.000000693 \) </td>
            <td> \( 0.693147421 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.0000001 \) </td>
            <td>  \( 1.000000069 \) </td>
            <td>  \( 0.000000069 \) </td>
            <td> \( 0.693147204 \) </td>    
        </tr>
    </tbody>
</table>
</div>

Observe que à medida que diminuímos \\( \omega \\), \\( \psi \\) também diminui. Se definirmos a proporção entre o segundo e o primeiro como \\( k = \frac{\psi}{\omega} \\), vemos que essa proporção parece se aproximar de um valor constante, \\( k \approx 0.693 \\) (alguns reconhecerão esse número!).

Vejamos como a tabela fica para \\( a = 5 \\):

<div style="overflow:auto; margin-top:-72px;">
<table align="center">
    <thead>
        <tr>
            <th>  \( \omega \) </th>
            <th>  \( 5^\omega \) </th>
            <th> \( \psi \) </th>
            <th> \( k = \frac{\psi}{\omega} \) </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>  \( 0.1 \) </td>
            <td>  \( 1.174618943  \) </td>
            <td>  \( 0.174618943  \) </td>
            <td> \( 1.746189431 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.01 \) </td>
            <td>  \( 1.016224591  \) </td>
            <td>  \( 0.016224591  \) </td>
            <td> \( 1.622459127 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.001 \) </td>
            <td>  \( 1.001610734  \) </td>
            <td>  \( 0.001610734  \) </td>
            <td> \( 1.610733753 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.0001 \) </td>
            <td>  \( 1.000160957 \) </td>
            <td>  \( 0.000160957 \) </td>
            <td> \( 1.609567434 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.00001 \) </td>
            <td>  \( 1.000016095 \) </td>
            <td>  \( 0.000016095 \) </td>
            <td> \( 1.609450864 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.000001 \) </td>
            <td>  \( 1.000001609 \) </td>
            <td>  \( 0.000001609 \) </td>
            <td> \( 1.609439208 \) </td>    
        </tr>
        <tr>
            <td>  \( 0.0000001 \) </td>
            <td>  \( 1.000000161 \) </td>
            <td>  \( 0.000000161 \) </td>
            <td> \( 1.609438043 \) </td>    
        </tr>
    </tbody>
</table>
</div>
<!-- <p>
\begin{array}{|c|c|c|c|} \hline
\omega &amp; \psi &amp; k = \frac{\psi}{\omega} \\\hline
1 &amp; 4 &amp; 4; \\
0.1 &amp; 0.174618943 &amp; 1.746189431 \\
0.01 &amp; 0.016224591 &amp; 1.622459127 \\
0.001 &amp; 0.001610734 &amp; 1.610733753 \\
0.0001 &amp; 0.000160957 &amp; 1.609567434 \\
0.00001 &amp; 0.000016095 &amp; 1.609450864 \\
0.000001 &amp; 0.000001609 &amp; 1.609439208 \\
0.0000001 &amp; 0.000000161 &amp; 1.609438043 \\\hline
\end{array}
</p> -->

A razão \\( k \\) é diferente para \\( a =5 \\), mas ela parece se aproximar de um valor determinado, assim como no caso \\( a = 2 \\).

Tendo em vista que \\( k = \frac{\psi}{\omega} \implies \psi = k \omega \\), podemos reescrever a equação \\( (\ref{eq:1}) \\) como:
\\[ a^\omega = 1 + k \omega.\tag{2}\label{eq:2} \\]
Podemos, a partir dessa equação, isolar \\( a \\):
\\[ a = \left ( 1 + k \omega \right ) ^ {\frac{1}{\omega}}, \\]
onde extraímos a raiz \\( \omega \\)-ésima da equação \\( (\ref{eq:2}) \\).

Para calcularmos uma potência \\( x \\) qualquer de \\( a \\), não necessariamente infinitesimal, podemos fazer
\\[ a^x = \left ( 1 + k \omega \right ) ^ {\frac{x}{\omega}}. \\]
Observe que \\( j = \frac{x}{\omega} \rightarrow \infty \\), dada a natureza infinitesimal de \\( \omega \\) (um número finito divido por uma quantidade suficientemente próxima de zero terá como resultado um número tão grande quanto quisermos). Podemos escrever também \\( \omega = \frac{x}{j} \\) e substituir na equação acima, junto com a definição de \\( j \\), o que nos dá
\\[ a^x = \left ( 1 + \frac{kx}{j} \right ) ^ j. \tag{3}\label{eq:3} \\]

Nossa intenção é aplicar o Teorema Binomial à essa última equação. No entanto, utilizaremos uma versão com os coeficientes binomiais simplificados (cancelando grande parte dos fatoriais) e que por sinal continua válida para a generalização da fórmula binomial com potência real demonstrada por Newton pela primeira vez. O Teorema Binomial nos diz que, dado \\( n \in \mathbb{N} \\) e \\( x,y \in \mathbb{R} \\):
\\[
(x+y)^n = {n \choose 0 } x^n + {n \choose 1 }x^{n-1}y^1 + {n \choose 2 }x^{n-2}y^2 + {n \choose 3 }x^{n-3}y^3 + \cdots = \\\
\frac{n!}{0!n!}x^n + \frac{n!}{1!(n-1)!}x^{n-1}y^1 + \frac{n!}{2!(n-2)!}x^{n-2}y^2 + \frac{n!}{3!(n-3)}x^{n-3}y^3 + \cdots = \\\
1x^n + \frac{n(n-1)!}{1!(n-1)!}x^{n-1}y^1 + \frac{n(n-1)(n-2)!}{2!(n-2)!}x^{n-2}y^2 + \frac{n(n-1)(n-2)(n-3)!}{3!(n-3)!}x^{n-3}y^3 + \cdots = \\\
x^n + \frac{n}{1!}x^{n-1}y^1 + \frac{n(n-1)}{2!}x^{n-2}y^2 + \frac{n(n-1)(n-2)}{3!}x^{n-3}y^3 + \cdots
\\]

Aplicando o Teorema Binomial na forma acima com \\( n = j \\), \\( x = 1 \\) e \\( y = \frac{kx}{j} \\), obtemos:
\\[
a^x = 1 + \frac{j}{1!} \cdot \frac{kx}{j} + \frac{j(j-1)}{2!} \cdot \frac{k^2x^2}{j^2} +  \frac{j(j-1)(j-2)}{3!} \cdot \frac{k^3x^3}{j^3} \\\
+  \frac{j(j-1)(j-2)(j-3)}{4!} \cdot \frac{k^4x^4}{j^4} + \dots =\\\
= 1 + \frac{j}{j} \cdot \frac{kx}{1!}+
\frac{j(j-1)}{j^2} \cdot \frac{k^2x^2}{2!}+  \frac{j(j-1)(j-2)}{j^3}
\cdot \frac{k^3x^3}{3!} \\\
+  \frac{j(j-1)(j-2)(j-3)}{j^4} \cdot \frac{k^4x^4}{4!} + \dots =\\\
= 1 + \frac{j}{j} \cdot \frac{kx}{1!}+  \frac{j}{j} \left ( \frac{j-1}{j} \right ) \cdot \frac{k^2x^2}{2!}+\\\
\frac{j}{j} \left ( \frac{j-1}{j} \right ) \left ( \frac{j-2}{j} \right )
\cdot \frac{k^3x^3}{3!}\\\
+\frac{j}{j} \left ( \frac{j-1}{j} \right ) \left ( \frac{j-2}{j} \right ) \left ( \frac{j-3}{j} \right ) \cdot \frac{k^4x^4}{4!} + \dots =\\\
= 1 + 1 \cdot \frac{kx}{1!}+ 1 \left ( 1- \frac{1}{j} \right ) \cdot \frac{k^2x^2}{2!}+\\\
1 \left ( 1- \frac{1}{j} \right ) \left (1 - \frac{2}{j} \right )
\cdot \frac{k^3x^3}{3!}\\\
+ 1 \left ( 1 - \frac{1}{j}
\right ) \left ( 1- \frac{2}{j} \right ) \left ( 1- \frac{3}{j} \right )
 \cdot \frac{k^4x^4}{4!} + \dots
\\]

Agora, se lembrarmos que \\( j \rightarrow \infty \\), veremos que os termos \\( \frac{1}{j} \\), \\( \frac{2}{j} \\), \\( \frac{3}{j} \\), \\( \frac{4}{j}, \dots \rightarrow 0 \\), e a monstruosidade acima se reduz a:
\\[
a^x =  1 + kx + \frac{k^2x^2}{2!} + \frac{k^3x^3}{3!} + \frac{k^4x^4}{4!} + \dots \tag{4}\label{eq:4}
\\]

Fazendo \\( x = 1 \\), imediatamente obtemos o valor de \\( a \\) em função apenas de \\( k \\):
\\[
a = 1 + k+ \frac{k^2}{2!} + \frac{k^3}{3!} + \frac{k^4}{4!} + \dots \tag{5}\label{eq:5}
\\]

Como exemplo, fazendo \\( k = 0.693 \\) e utilizando os quatro primeiros termos dessa equação, obtemos \\( a = 1.9982 \\), valor bem próximo de \\( 2 \\).

De todos os valores possíveis de \\( k \\), qual seria aquele mais "natural"? Qual valor de \\( k \\) faria o cálculo de \\( a^x \\) mais fácil? Se pegarmos \\( k = 0 \\), obteremos \\( a = 1 \\) e, obviamente, todas as potências serão fáceis de calcular, mas seria tudo muito sem graça! O próximo candidato seria \\( k = 1 \\), e aqui as coisas ficam interessantes! O valor de \\( a \\) correspondente à \\( k = 1 \\) tem até uma letra especial para representá-lo: \\( e \\). O número de Euler finalmente dá as caras!

Vejamos quais consequências podemos extrair do fato de que \\( k = 1 \\) corresponde ao número de Euler, estabelendo seu caráter especial:


1. Se fizermos \\( k = 1 \\) na equação \\( (\ref{eq:5}) \\), temos:
\\[
e = 1 + 1 + \frac{1}{2!} + \frac{1}{3!} + \frac{1}{4!} + \dots \tag{6}\label{eq:6}
\\]

2. Se fizermos \\( k = 1 \\) na equação \\( (\ref{eq:2}) \\), temos:
\\[
e^\omega = 1 + \omega,
\\]
ou seja, é muito fácil calcular o valor de  \\( e^\omega \\) para \\( \omega \\) infinitesimal.

3. Se fizermos \\( k = 1 \\) na equação \\( (\ref{eq:3}) \\), temos:
\\[
e^x = \left ( 1 + \frac{x}{j} \right ) ^ j, \quad j \to \infty.
\\]
Tomando \\( x = 1 \\) e utilizando a linguagem moderna dos limites, temos:
\\[
e = \lim_{j \to \infty} \left ( 1 + \frac{1}{j} \right ) ^ j.
\\]
Essa última fórmula é geralmente utilizada como definição do número de Euler em textos de Cálculo.

4. Finalmente, se fizermos \\( k = 1 \\) na equação \\( (\ref{eq:4}) \\), temos:
\\[
e^x =  1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \dots \tag{7}\label{eq:7},
\\]
e vemos que é fácil calcular \\( e^x \\) também para \\( x \\) não infinitesimal. De fato, mais do que isso, podemos estimar o erro quando utilizamos \\( (\ref{eq:3}) \\) para valores pequenos, mas não infinitesimais de \\( \omega \\).

Aconselho o leitor a utilizar uma calculadora científica, uma planilha ou até mesmo alguma linguagem de programação para obter estimativas para o número de Euler e suas potências através das equações listadas acima. Como exemplo, graças aos fatoriais em  \\( (\ref{eq:6}) \\), basta somarmos \\( 7 \\) termos para obtermos um valor correto até a terceira casa decimal:
\\[
e \approx 2.718.
\\]
Um valor mais preciso seria
\\[
e = 2.718281828459045235360287471352662497757247\dots
\\]

Caso queira ouvir os \\( 5000 \\) primeiros dígitos de \\( e \\), eu fiz um vídeo:

<div class="aspect-ratio" align="center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ItzSD-Ejis8" frameborder="0" allowfullscreen></iframe>
</div>

### Relação com potências em outras bases

Compare a equação \\( (\ref{eq:7}) \\) com a \\( (\ref{eq:4}) \\). O lado direito das duas são praticamente iguais! Basta trocarmos \\( x \\) por \\(k \\) na equação \\( (\ref{eq:7}) \\) , ou seja:
\\[
e^k =  1 + k + \frac{k^2}{2!} + \frac{k^3}{3!} + \frac{k^4}{4!} + \dots = a.
\\]

Então, podemos achar \\( a \\) em função de \\( k \\) com o intermédio de \\(e \\):
\\[
a = e^k,
\\]
e assim, vemos que \\( k \\) nada mais é do que o logaritmo natural de \\( a \\):
\\[
k = \ln{a} \tag{8}\label{eq:8}.
\\]

Os valores limites de \\( k \\) obtidos nas tabelas acima são reconhecidos como \\( \ln(2) = 0.6931471805599453... \\) e \\( \ln(5) = 1.6094379124341003
... \\).

Se você não está familiarizado com a função logaritmo, observer que ela é, por definição, justamente a função que nos fornece \\( k \\) dado \\( a \\). Seria interessante se tivéssemos um jeito fácil de calculá-la, não? Afinal, rapidamente encontramos problemas com a precisão dos cálculos se utilizarmos o método das tabelas acima. Fornecemos uma série para o cálculo do logaritmo na sessão bônus ao final, ainda seguindo Euler.

Antes, porém, deixaremos uma breve nota sobre a questão da convergência.

### Nota sobre somas infinitas e convergência

Devemos enfatizar que todas essas somas em  \\( (\ref{eq:4}) \\),  \\( (\ref{eq:5}) \\),  \\( (\ref{eq:6}) \\) e \\( (\ref{eq:7}) \\) são infinitas. Devemos sempre ser cuidadosos ao lidarmos com esse tipo de soma, devendo observar sob quais condições as somas fazem sentido, ou seja, quando (e se) elas convergem para um valor finito. Neste caso em particular, não é difícil provarmos que as somas em questão produzem resultados finitos para quaisquer \\( k, x \in \mathbb{R} \\), graças ao crescimento exponencial dos fatoriais nos denominadores, que crescem mais rapidamente que qualquer potência presente nos numeradores. Tudo isso pode ser demonstrado rigorosamente, mas demandaria ainda mais tempo deste breve seminário. Por hora, contemple \\( (\ref{eq:5}) \\) escrita da seguinte forma e observe como os denominadores crescem rapidamente:

\\[
e^x =  1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + \frac{x^5}{120} + \frac{x^6}{720} + \frac{x^7}{5040} + \frac{x^8}{40320} + \\\
    \frac{x^9}{362880} + \frac{x^{10}}{3628800} + \frac{x^{11}}{39916800} + \dots
\\]

Se tomarmos \\( x = 2 \\), por exemplo, o termo de potência \\( 11 \\) contribui com apenas \\( \frac{2^{11}}{39916800} = \frac{2048}{39916800} \approx 0.0000513\\) ao resultado final.

## Bônus: Uma série para a função logaritmo natural

Comecemos isolando \\( k \\) em \\( (\ref{eq:2}) \\):
\\[
k = \frac{a^\omega - 1}{\omega}
\\]
Para podermos aplicar o truque do binômio de Newton mais uma vez, façamos \\( a = 1 + x \\) e lembremos que, por \\( (\ref{eq:8}) \\), \\( k = \ln(a) = \ln(1 + x) \\), de modo que a equação acima fica
\\[
k = \ln(1 + x) = \frac{(1+x)^\omega - 1}{\omega} \tag{9}\label{eq:9}.
\\]
Agora, pelo binômio de Newton, temos:
\\[
(1+x)^\omega = 1 + \frac{\omega}{1!} \cdot x + \frac{\omega(\omega-1)}{2!} \cdot x^2 + \frac{\omega(\omega-1)(\omega -2)}{3!} \cdot x^3 \\\
+  \frac{\omega(\omega-1)(\omega-2)(\omega-3)}{4!} \cdot x^4 + \dots
\\]
Passando o número \\( 1 \\) para o lado esquerdo e dividindo os dois lados por \\( \omega \\), temos:
\\[
\frac{(1+x)^\omega -1}{\omega} = \frac{1}{1!} \cdot x + \frac{(\omega-1)}{2!} \cdot x^2 + \frac{(\omega-1)(\omega -2)}{3!} \cdot x^3 \\\
+  \frac{(\omega-1)(\omega-2)(\omega-3)}{4!} \cdot x^4 + \dots
\\]
Por outro lado,  \\( \omega \\) é um infinitesimal, ou seja, \\( \omega \to 0 \\), de modo que:

\\[
\ln(1 + x) = \frac{(1+x)^\omega -1}{\omega} = \frac{1}{1!} \cdot x + \frac{(0-1)}{2!} \cdot x^2 + \frac{(0-1)(0-2)}{3!} \cdot x^3 \\\
+  \frac{(0-1)(0-2)(-3)}{4!} \cdot x^4 + \dots = \\\
\frac{1}{1!} \cdot x + \frac{-1}{2} \cdot x^2 + \frac{(-1)(-2)}{1 \cdot 2 \cdot 3} \cdot x^3 \\\
+  \frac{(-1)(-2)(-3)}{1 \cdot 2 \cdot 3 \cdot 4} \cdot x^4 + \dots = \\\
x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots
\\]

Ou seja, temos:
\\[
\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \frac{x^5}{5} - \frac{x^6}{6} + \dots \tag{10}\label{eq:10}
\\]

Observamos que aqui não temos mais os fatoriais nos denominadores e, de fato, essa série não converge para qualquer \\( x \\), mas apenas para \\( -1 < x \leq 1 \\).
Faça  \\( x = 2\\), por exemplo, e veja como as somas parciais oscilam e parecem crescer casa vez mais em módulo:
\\[
s_1 = 2 \\\
s_2 = 2 - \frac{2^2}{2} = 0 \\\
s_3 = 2 - \frac{2^2}{2} + \frac{2^3}{3} = 2.666... \\\
s_4 = 2 - \frac{2^2}{2} + \frac{2^3}{3} - \frac{2^4}{4} = -1.333... \\\
s_5 = 2 - \frac{2^2}{2} + \frac{2^3}{3} - \frac{2^4}{4} + \frac{2^5}{5} = 5.066... \\\
s_6 = 2 - \frac{2^2}{2} + \frac{2^3}{3} - \frac{2^4}{4} + \frac{2^5}{5} - \frac{2^6}{6} = 5.6 \\\
s_7 = 2 - \frac{2^2}{2} + \frac{2^3}{3} - \frac{2^4}{4} + \frac{2^5}{5} - \frac{2^6}{6} + \frac{2^7}{7} = 12.6857142857... \\\
s_8 = 2 - \frac{2^2}{2} + \frac{2^3}{3} - \frac{2^4}{4} + \frac{2^5}{5} - \frac{2^6}{6} + \frac{2^7}{7} - \frac{2^8}{8} = -19.3142857143...
\\]
O valor correto é \\( \ln(1 + 2) = \ln(3) = 1.0986122886681098... \\).

Aqui, Euler mais uma vez traz luz ao problema, pois trocando \\( x \\) por \\( -x \\) em \\( (\ref{eq:10}) \\), temos:
\\[
\ln(1 - x) = -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} - \frac{x^5}{5} - \frac{x^6}{6} - \dots,
\\]
e, utilizando uma bem conhecida propriedade dos logaritmos:
\\[
\ln(1 + x) - \ln(1 - x) = \ln \left( \frac{1 + x}{1 - x} \right) = \left( x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \dots \right) \\\
- \left( -x - \frac{x^2}{2} - \frac{x^3}{3} - \frac{x^4}{4} + \dots \right) = 2 \left(x + \frac{x^3}{3} + \frac{x^5}{5} + \dots \right)
\\]

Vamos destacar este último resultado:
\\[
\ln \left( \frac{1 + x}{1 - x} \right) =  2 \left(x + \frac{x^3}{3} + \frac{x^5}{5} + \dots \right)
\\]

Fazendo \\( x = \frac{1}{2} \\), temos \\( \frac{1 + x}{1 - x} = \frac{1 + 1/2}{1 - 1/2} = 3 \\) e, pela última série obtida:
\\[
\ln(3) = \ln \left( \frac{1 + 1/2}{1 - 1/2} \right) =  2 \left(\frac{1}{2} + \frac{1}{2^3 3} + \frac{1}{2^5 5} + \frac{1}{2^7 7} \dots \right) = \\\ 1 + \frac{1}{12} + \frac{1}{80}  + \frac{1}{448} + \dots,
\\]
e agora a série converge para o valor correto de \\( \ln(3) \\). Somando apenas os quatro primeiros termos mostrados acima já obtemos \\( \ln(3) \approx 1.0981 \\), valor correto até a terceira casa decimal.

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
 "HTML-CSS": { linebreaks: { automatic: true } },
         SVG: { linebreaks: { automatic: true } }
});
</script>
