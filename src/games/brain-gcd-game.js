import getInput from '../cli.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getRightAnswer = (a, b) => gcd(a, b).toString();

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const initMove = () => {
  const maxNumberA = 10;
  const maxNumberB = 100;
  const a = getRandomInt(maxNumberA);
  const b = getRandomInt(maxNumberB);
  return [
    getInput(`Question: ${a} ${b}\nYour answer: `),
    getRightAnswer(a, b),
  ];
};

export default () => initMove();
