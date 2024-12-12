import { calcMaxStack } from './calc.js';
import { fact, trampoline } from './fact.js';
import { addPrimes, primeCheck } from './prime.js';

calcMaxStack()

console.log("fact 5 =", fact(5))

let primeBox=document.getElementById('primeBox');
addPrimes(69,primeBox);
