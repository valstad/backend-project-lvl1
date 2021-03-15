import { getRandomInt } from '../util.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getRightAnswer = (a, b) => gcd(a, b).toString();

export default () => {
  const minNumberA = 3;
  const maxNumberA = 10;
  const minNumberB = 10;
  const maxNumberB = 100;
  const a = getRandomInt(minNumberA, maxNumberA);
  const b = getRandomInt(minNumberB, maxNumberB);
  return [
    `Question: ${a} ${b}\nYour answer: `,
    getRightAnswer(a, b),
  ];
};
