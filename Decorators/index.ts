//Decorators

//Decorators are used for annotations and a meta-programming syntax
//class
//method
//property
//parameter
//accessor

function simpleClassDecorator (constructor: Function) {
  console.log("Class Decorator called");
}

@simpleClassDecorator
class MyClass {
  constructor() {
    console.log("My Class");
  }
}

const myclassInstance = new MyClass();