//Index Signature

//Allow you to define types for dynamic property keys

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Ritik", "Typescript"];

let myStr: string = myArray[0];