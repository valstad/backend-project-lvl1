import getInput from '../cli.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const getRightAnswer = (n) => isPrime(n);

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const initMove = () => {
  const maxNumber = 100;
  const minNumber = 2;
  const n = getRandomInt(minNumber, maxNumber);
  return [
    getInput(`Question: ${n}\nYour answer: `),
    getRightAnswer(n),
  ];
};

export default () => initMove();
