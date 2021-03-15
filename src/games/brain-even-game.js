import { getRandomInt } from '../util.js';

const getRightAnswer = (n) => (n % 2 === 0 ? 'yes' : 'no');

export default () => {
  const minNumbersValue = 1;
  const maxNumbersValue = 19;
  const n = getRandomInt(minNumbersValue, maxNumbersValue);
  return [
    `Question: ${n}\nYour answer: `,
    getRightAnswer(n),
  ];
};
