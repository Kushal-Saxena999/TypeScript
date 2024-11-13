//Generics

//create components that can work with data type while still maintaining type

// function identity<T>{arg: T}: T {
//   return arg;
// }

// let numberIdentity = identity<number>(42)
// let string = identity<string>("42")

// interface Pair<T, U> {
//   first: T;
//   second: U;
// }

// let numberString:Pair<number,string> = {
//   first: 1,
//   second: "one",
// };

// let booleanStringPair: Pair<string, boolean> = {
//   first: "Is Boolean",
//   second: "true",
// };



//Now we create the data structure and see the abstraction

class Stack<T> {
  private items: T[] = [];
  push(item: T): void {
    this.items.push(item);
  }
  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();
numberStack.push(1);
console.log(numberStack);
console.log(numberStack.pop());

const stringBack = new Stack<string>();
stringStack.push(1);

//In this we can also perform enque, deque, isempty and every sorts of operations.
