import readlineSync from 'readline-sync';

export default (q) => {
  const answer = readlineSync.question(q);
  return answer;
};
