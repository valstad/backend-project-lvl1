import readlineSync from 'readline-sync';

const getInput = (q) => readlineSync.question(q);

const getRightAnswer = (n) => (n % 2 === 0 ? 'yes' : 'no');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const initMove = (maxNum) => {
  const n = getRandomInt(maxNum);
  return [
    getInput(`Question: ${n}\nYour answer: `),
    getRightAnswer(n),
  ];
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getInput('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let points = 0;
  const maxNumber = 10;
  const maxPoints = 3;

  while (points < maxPoints) {
    const [answer, rightAnswer] = initMove(maxNumber);
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    points += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default () => startGame();
