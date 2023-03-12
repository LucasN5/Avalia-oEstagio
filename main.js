/* 1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?

Resposta: 13 */


/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; */


const num = parseInt(prompt("Digite um número inteiro:"));

let sequencia1 = 0;
let sequencia2 = 1;
let sequencia3 = 0;
let isFibonacci = false;

while (sequencia3 <= num) {
  if (num === sequencia3) {
    isFibonacci = true;
    break;
  }
  fib3 = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib3;
}

if (isFibonacci) {
  console.log(num + " Faz parte da Fibonacci");
} else {
  console.log(num + " Não faz parte de Fibonacci.");
}



/* 3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, R: 9

b) 2, 4, 8, 16, 32, 64, R: 124

c) 0, 1, 4, 9, 16, 25, 36, R: 49

d) 4, 16, 36, 64, R: 100

e) 1, 1, 2, 3, 5, 8, R: 13

f) 2,10, 12, 16, 17, 18, 19, R: 27 */




/* 4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?



IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado. 

R: O caminhão é quem vai estar mais proximo de ribeirão preto. Pois mesmo que o carro
seja mais rapido e não tenha obstaculos em seu caminho. o mesmo está se afastando da
cidade, enquanto o caminhão está se aproximando. */


/* 5) Escreva um programa que inverta os caracteres de um string.



IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse; */

let str = "Inverter";
let reversoStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversoStr += str[i];
}

console.log(reversoStr);


