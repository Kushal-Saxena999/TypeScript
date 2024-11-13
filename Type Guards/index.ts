//Type Guards
//Type Guards allow you to create more specific type checks

function isString(value: any): value is string {
  return typeof value == "string";
}

function checking(value: string | number) {
  if (isString(value)) {
    console.log("Yes its string");
  }else {
    console.log("Number");
  }
}

checking(2)