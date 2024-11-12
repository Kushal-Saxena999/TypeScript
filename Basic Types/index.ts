// Basic Types


//How to define Strings
let a1: string = "42";

//How to define Boolean
let a2: boolean =true;

//How to define Arrays
let array1:number[] = [1,2,3,4](In case of numbers Array)

let array2:string[] = ["1","2","3","4"]

// let array:boolean[] = [true]

let bigInt : bigint = 123123123123n;

//In case of objects
let user1 : { name: string; age: number} = {
  name: "Ritik",
  age: 22,
};

//OR

let user2 : object = {
  name: "Ritik",
  age: 22,
};

let user3: undefined = undefined;//it works

//In case of null

let user4: null = null;

//Tuples

let tuple: [number, number, boolean, number] = [1, 2, true, 3];
const [getter, setter] = useState(true)

//enum

enum Color{
  primary = "Red",
  secondary = "blue",
}

let myColor: Color = Color.primary;


//any

let anything: any = "Could be a string";
anything = 32;
// We avoid to use any because it creates complication in our code


//Unknown not sure what datatype will come
let notSure: unknown = 4;
if(typeof notSure === 'number'){
  notSure.toFixed(2);
}
if(typeof notSure === 'string'){
  notSure.charAt(1)
}

//Never

//for infinite
function infinite(): never {
  while (true) {}
}

//for Error Thrown
function infinite(message: string): never {
  throw new Error(message);
}

//void

function void(message: string): never {
  throw new Error(message);
}


function add(): void {
  console.log(2+2);
}


