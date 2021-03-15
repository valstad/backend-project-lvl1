import { getRandomInt } from '../util.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

const getRightAnswer = (n) => isPrime(n);

export default () => {
  const maxNumbersValue = 100;
  const minNumbersValue = 2;
  const n = getRandomInt(minNumbersValue, maxNumbersValue);
  return [
    `Question: ${n}\nYour answer: `,
    getRightAnswer(n),
  ];
};
