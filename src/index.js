import getInput from './cli.js';
import brainEvenMove from './games/brain-even-game.js';
import brainCalcMove from './games/brain-calc-game.js';
import brainGcdMove from './games/brain-gcd-game.js';
import brainProgressionMove from './games/brain-progression-game.js';

const gamesMap = {
  brainEven: brainEvenMove,
  brainCalc: brainCalcMove,
  brainGcd: brainGcdMove,
  brainProgression: brainProgressionMove,
};

const rulesMap = {
  brainEven: 'Answer "yes" if the number is even, otherwise answer "no".',
  brainCalc: 'What is the result of the expression?',
  brainGcd: 'Find the greatest common divisor of given numbers.',
  brainProgression: 'What number is missing in the progression?',
};

const startGame = (gameType) => {
  console.log('Welcome to the Brain Games!');
  const userName = getInput('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rulesMap[gameType]);

  let points = 0;
  const maxPoints = 3;

  while (points < maxPoints) {
    const [answer, rightAnswer] = gamesMap[gameType]();
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
    points += 1;
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default (g) => startGame(g);
