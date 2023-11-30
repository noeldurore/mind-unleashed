// Filename: sophisticated_program.js
// Content: A sophisticated and elaborate program

// Importing required libraries
const readline = require('readline');

// Creating readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to compute the factorial of a number recursively
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to calculate the sum of the first n numbers
function sum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Main program logic
function main() {
  console.log("Welcome to the sophisticated program!");

  rl.question("Enter a number: ", (answer) => {
    const num = parseInt(answer);

    console.log(`The factorial of ${num} is: ${factorial(num)}`);
    console.log(`The sum of the first ${num} numbers is: ${sum(num)}`);

    if (isPrime(num)) {
      console.log(`${num} is a prime number.`);
    } else {
      console.log(`${num} is not a prime number.`);
    }

    const person = new Person("John", 30);
    person.sayHello();

    rl.close();
  });
}

// Execute the main program
main();