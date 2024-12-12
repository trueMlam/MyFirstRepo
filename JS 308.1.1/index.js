let n1 = 13;
let n2 = 17;
let n3 = 20;
let n4 = 25;

const isDivisibleByFive = (n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0);
console.log(`Are all numbers divisible by 5? ${isDivisibleByFive}`);

const isFirstLarger = (n1 > n4);
console.log(`Is the first number larger than the last? ${isFirstLarger}`);

let result = (n2 - n1) * n3 % n4;
console.log(`Result of the arithmetic chain ((n2 - n1) * n3 % n4): ${result}`);

const isUnder25 = (n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25);
console.log(`Are all numbers under 25? ${isUnder25}`);

let tripDistance = 1500;
let fuelPrice = 3;
let fuelBudget = 175;

let speed55 = 55;
let speed60 = 60;
let speed75 = 75;

let mpg55 = 30;
let mpg60 = 28;
let mpg75 = 23;

function calculateFuelNeeded(distance, mpg) {
    return distance / mpg;
}

function calculateCost(fuelNeeded, pricePerGallon) {
    return fuelNeeded * pricePerGallon;
}

function calculateTime(distance, speed) {
    return distance / speed;
}

let fuelNeeded55 = calculateFuelNeeded(tripDistance, mpg55);
let fuelNeeded60 = calculateFuelNeeded(tripDistance, mpg60);
let fuelNeeded75 = calculateFuelNeeded(tripDistance, mpg75);

let cost55 = calculateCost(fuelNeeded55, fuelPrice);
let cost60 = calculateCost(fuelNeeded60, fuelPrice);
let cost75 = calculateCost(fuelNeeded75, fuelPrice);

let time55 = calculateTime(tripDistance, speed55);
let time60 = calculateTime(tripDistance, speed60);
let time75 = calculateTime(tripDistance, speed75);

console.log(`At 55 mph: Fuel needed = ${fuelNeeded55} gallons, Cost = $${cost55}, Time = ${time55} hours`);
console.log(`At 60 mph: Fuel needed = ${fuelNeeded60} gallons, Cost = $${cost60}, Time = ${time60} hours`);
console.log(`At 75 mph: Fuel needed = ${fuelNeeded75} gallons, Cost = $${cost75}, Time = ${time75} hours`);

console.log(`Is budget sufficient at 55 mph? ${fuelBudget >= cost55}`);
console.log(`Is budget sufficient at 60 mph? ${fuelBudget >= cost60}`);
console.log(`Is budget sufficient at 75 mph? ${fuelBudget >= cost75}`);