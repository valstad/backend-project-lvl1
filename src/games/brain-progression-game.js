import getInput from '../cli.js';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const initMove = () => {
  const maxNumber = 10;
  const minFirst = 2;
  const minStep = 3;
  const minHidden = 0;
  const seqLen = 10;
  const first = getRandomInt(minFirst, maxNumber);
  const step = getRandomInt(minStep, maxNumber);
  const seq = [];

  for (let i = first; i < first + step * seqLen; i += step) {
    seq.push(i);
  }

  const hiddenNumberIndex = getRandomInt(minHidden, seqLen);

  const answer = seq[hiddenNumberIndex].toString();
  seq[hiddenNumberIndex] = '..';
  const seqString = seq.join(' ');
  return [
    getInput(`Question: ${seqString}\nYour answer: `),
    answer,
  ];
};

export default () => initMove();
