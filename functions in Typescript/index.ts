
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 2));

// Function Expression

const multiply = function (a: number, b: number): number {
  return a * b;
}

console.log(multiply(2, 2));


// Arrow Functions
const subtract = (a:number,b:number):number => {
  return a - b;
};

function greet(name: string, greeting: string): string{
  return greeting ? `${greeting}, ${name}` : `Hello, ${name}`
}

console.log(greet("Ritik"));
console.log(greet("Ritik", "Welcome to ts"));

//Rest Parameters
function sum(...numbers: number[]): number{
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4,12,12));

//we can also check type

type Operation = (a: number, b:number) => number;

const add: Operation = (a, b) => a + b;

