//Type Assertions

let someValue: any = "This is a String";

let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length; 