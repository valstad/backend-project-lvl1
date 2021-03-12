#!/usr/bin/env node
import sayName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = sayName('May I have your name? ');

console.log(`Hello, ${userName}!`);
