import getInput from './cli.js';
import brainEven from './games/brain-even-game.js';
import brainCalc from './games/brain-calc-game.js';
import brainGcd from './games/brain-gcd-game.js';
import brainProgression from './games/brain-progression-game.js';
import brainPrime from './games/brain-prime-game.js';

const gameTypes = {
  'brain-even': brainEven,
  'brain-calc': brainCalc,
  'brain-gcd': brainGcd,
  'brain-progression': brainProgression,
  'brain-prime': brainPrime,
};

const rulesText = {
  'brain-even': 'Answer "yes" if the number is even, otherwise answer "no".',
  'brain-calc': 'What is the result of the expression?',
  'brain-gcd': 'Find the greatest common divisor of given numbers.',
  'brain-progression': 'What number is missing in the progression?',
  'brain-prime': 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

export default () => {
  const gameType = process.argv[1].split('/').reverse()[0];
  console.log('Welcome to the Brain Games!');
  const userName = getInput('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesText[gameType]);

  let points = 0;
  const maxPoints = 3;
  const generateMove = gameTypes[gameType];

  while (points < maxPoints) {
    const [question, rightAnswer] = generateMove();
    const userAnswer = getInput(question);
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    points += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
