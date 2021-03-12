import getInput from '../cli.js';

const getRightAnswer = (n) => (n % 2 === 0 ? 'yes' : 'no');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const initMove = () => {
  const maxNumber = 10;
  const n = getRandomInt(maxNumber);
  return [
    getInput(`Question: ${n}\nYour answer: `),
    getRightAnswer(n),
  ];
};

export default () => initMove();
