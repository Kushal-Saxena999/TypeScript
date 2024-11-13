//Keyof Operator

interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;
let m: PersonKeys = "age";
console.log(m)