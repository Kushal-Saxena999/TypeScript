// let inferredNumber = 42;

// //infers in TS

// type User = {
//   name: string;
//   age: number;
// };

// const ritik: User = { name: "Ritik", age: 22};


let inferredNumber = 42; // TypeScript infers this as 'number'

type User = {
  name: string;
  age: number;
};

const ritik: User = { name: "Ritik", age: 22 };

// Function to greet the user
function greetUser(user: User): string {
  return `Hello, my name is ${user.name} and I am ${user.age} years old.`;
}

// Using the function
console.log(greetUser(ritik)); // Output: Hello, my name is Ritik and I am 22 years old.(This code is by Ai)

//Operations are as follows

type Vehicle = {
  make: string;
  model: string;
}

type Car = Vehicle & {  //Union of types
  isElectric: boolean;
};

const myCar: Car = {
  make: "Tesla",
  model: "Model S",
  isElectric: true,
};

// let Person: string | object = "Ritik";

// Person = {
//   name: "Ritik"
// }

//If any value doesn't came from the api

let Person: string | undefined = "Ritik";

Person = undefined;

//Interface

interface User {
  name: string;
  age: number;
}

let Person1: User = {
  age: 22,
  name: "Ritik",
};

interface VehicleInterface {
  make: string;
  model: string;
}

interface CarInterface extends Vehicle{
  isElectric: boolean;
}

const iCar: Car = {
  make: "Te",
  model: "T",
  isElectric: true
}

//Please check optional fields of above cases