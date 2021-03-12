import getInput from '../cli.js';

const getRightAnswer = (a, b, op) => op(a, b).toString();

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const operatorsQuantity = 3;
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;

const operators = [add, sub, mult];
const operatorsStr = ['+', '-', '*'];

const initMove = () => {
  const maxNumber = 10;
  const a = getRandomInt(maxNumber);
  const b = getRandomInt(maxNumber);
  const randomOperator = getRandomInt(operatorsQuantity);
  return [
    getInput(`Question: ${a} ${operatorsStr[randomOperator]} ${b}\nYour answer: `),
    getRightAnswer(a, b, operators[randomOperator]),
  ];
};

export default () => initMove();
