
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const message = document.querySelector("#message");

let prhases = [
  `A vida trará coisas boas se tiver paciência.`, 
  `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`,
  `Não compense na ira o que lhe falta na razão.`,
  `Defeitos e virtudes são apenas dois lados da mesma moeda.`,
  `A maior de todas as torres começa no solo.`,
  `Não há que ser forte. Há que ser flexível.`,
  `Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?`,
  `Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.`,
  `A juventude não é uma época da vida, é um estado de espírito.`,
  `Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.`,
  `Siga os bons e aprenda com eles.`,
  `Não importa o tamanho da montanha, ela não pode tapar o sol.`,
  `O bom-senso vale mais do que muito conhecimento.`,
  `Quem quer colher rosas tem de estar preparado para suportar os espinhos.`,
  `São os nossos amigos que nos ensinam as mais valiosas lições.`,
  `Aquele que se importa com o sentimento dos outros, não é um tolo.`,
  `A adversidade é um espelho que reflete o verdadeiro eu.`,
  `Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.`,
  `O riso é a menor distância entre duas pessoas.`,
  `Se você se sente só é porque construiu muros ao invés de pontes.`,
  `Amizade e Amor são coisas que se unem num piscar de olhos.`,
  `A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.`,
  `Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.`,
  `Sem o fogo do entusiasmo, não há o calor da vitória.`,
  `Quem olha para fora sonha; quem olha para dentro acorda.`,
  `Todas as coisas são difíceis antes de se tornarem fáceis.`,
  `As pessoas esquecerão o que você disse e o que você fez… mas nunca esquecerão como se sentiram.`,
  `Espere pelo mais sábio dos conselhos: o tempo.`,
  `Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.`,
  `A paciência na adversidade é sinal de um coração sensível.`
]

btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);

function handleTryClick() {
  
  randomPrhases = Math.floor(Math.random() * prhases.length);

  handleMessage();
  handleResetClick();
  
}

function handleMessage() {
  
  message.innerHTML = prhases[randomPrhases];
}

function handleResetClick() {
 toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide"); 
  screen2.classList.toggle("hide");
}


