import getInput from '../cli.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const initMove = () => {
  const maxNumber = 10;
  const seqLen = 10;
  const first = getRandomInt(maxNumber);
  const step = getRandomInt(maxNumber);
  const seq = [];

  for (let i = first; i < first + step * seqLen; i += step) {
    seq.push(i);
  }

  const hiddenNumberIndex = getRandomInt(seqLen);
  const answer = seq[hiddenNumberIndex].toString();
  seq[hiddenNumberIndex] = '..';

  const seqString = seq.join(' ');
  return [
    getInput(`Question: ${seqString}\nYour answer: `),
    answer,
  ];
};

export default () => initMove();
