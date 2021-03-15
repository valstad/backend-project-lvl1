import { getRandomInt } from '../util.js';

const getRightAnswer = (a, b, op) => op(a, b).toString();

const getRandomIntFromZero = (number) => getRandomInt(0, number);

export default () => {
  const operators = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
  ];
  const operatorsSymbol = ['+', '-', '*'];
  const operatorsQuantity = operators.length;
  const maxNumbersValue = 10;
  const a = getRandomIntFromZero(maxNumbersValue);
  const b = getRandomIntFromZero(maxNumbersValue);
  const randomOperator = getRandomIntFromZero(operatorsQuantity);
  return [
    `Question: ${a} ${operatorsSymbol[randomOperator]} ${b}\nYour answer: `,
    getRightAnswer(a, b, operators[randomOperator]),
  ];
};
