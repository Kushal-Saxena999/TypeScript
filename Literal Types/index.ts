//Literal types in typescript

//String Literal type//number // object //boolean //mix

type Greeting = |"Hello" | "Hi" | "Kya haal chaal";

function greet(greeting: Greeting){
  console.log(greeting);
}

greet("kya haaal chal");