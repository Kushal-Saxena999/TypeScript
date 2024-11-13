//Class

// class Person {
//   name?: string;

//   //constructor
//   constructor(name?: string) {
//     this.name = name;
//   }
// }

// const person1 = new Person();

// const person2 = new Person("Typescript");

// console.log(person1);
// console.log(person2);

//In above as we can see name is public

// class Person {
//   name: string;

//   //constructor
//   constructor(name?: string) {
//     this.name = name;
//   }
// }

// const person1 = new Person("Typescript");

// console.log(person1.name);




// class Person {
//   public name: string;
//   private age: number;
//   protected address:string

//   //constructor
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   //getter for age
//   public getAge(): number {
//     return this.age;
//   }
// }

// const person1 = new Person("Typescript", 22);

// console.log(person1.name);
// console.log(person1.getAge());



// class Person {
//   public name: string;
//   private age: number;
//   protected address:string

//   //constructor
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   //getter for age
//   public getAge(): number {
//     return this.age;
//   }
// }

// class Manager extends Person{
//   constructor(age:number){
//     this.address//can't be accessible 
//   }
// }

// const person1 = new Person("Typescript", 22);

// console.log(person1.name);
// console.log(person1.getAge());


// class Person {
//   public name: string;
//   private age: number;
//   protected address:string;
//   readonly birthdate: string;

//   //constructor
//   constructor(name: string, age: number, address: string, birthDate:string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.birthdate = birthDate;
//   }
//   //getter for age
//   public getAge(): number {
//     return this.age;
//   }
// }

// const person1 = new Person("Typescript", 22, "India", "3 May,2003");

// console.log(person1.name);
// console.log(person1.getAge());
// person1.birthdate = "4 May,2005";//This is readOnly we can't over write

//But if we remove readonly then we can overwrite


class Person {
  public name: string;
  private age: number;
  protected address:string;
  readonly birthdate: string;

  //constructor
  constructor(name: string, age: number, address: string, birthDate:string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.birthdate = birthDate;
  }
  //getter for age
  public getAge(): number {
    return this.age;
  }
  //setter
  public setAddress(address: string): void {
    this.address = address;
  }
}

const person1 = new Person("Typescript", 22, "India", "3 May,2003");

console.log(person1);
console.log(person1.name);
console.log(person1.getAge());
person1.birthdate = "4 May,2005";
person1.setAddress("LA");
person1.setAddress("Las Vegas");



