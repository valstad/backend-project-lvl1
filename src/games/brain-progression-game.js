import { getRandomInt } from '../util.js';

export default () => {
  const maxNumbersValue = 10;
  const minFirstNumber = 2;
  const minInterval = 3;
  const seqLen = 10;
  const maxIndexofHiddenNum = seqLen;
  const minIndexofHiddenNum = 0;
  const first = getRandomInt(minFirstNumber, maxNumbersValue);
  const step = getRandomInt(minInterval, maxNumbersValue);
  const seq = [];

  for (let i = first; i < first + step * seqLen; i += step) {
    seq.push(i);
  }
  const hiddenNumberIndex = getRandomInt(minIndexofHiddenNum, maxIndexofHiddenNum);
  const answer = seq[hiddenNumberIndex].toString();
  seq[hiddenNumberIndex] = '..';
  return [
    `Question: ${seq.join(' ')}\nYour answer: `,
    answer,
  ];
};
