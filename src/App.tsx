import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent:boolean;
let hobbies:string[]; 
//tuple contains a fix amount of values and types. the example below can contain 1 number and 1 string.
let role:[number, string];
//How to define objects? Do not declare object as a type since it can contain multiple types within that object.
type Person= {
  name:string;
  age: number | string; //defines it as number or string
  //age?: number;
}
let person: Person = {
  name: "Rob",
  age: 30,
  //if declared in the type above without a "?", the type is required for object initiation. 
}
//Assign the types below is multiple groups
let lotsOfPeople: Person[];

//How do we assign functions?
// let printName: (name:string) => void;

function printName(name: string) {
  console.log(name)
}
printName("Rob")

//If you want to provide any type, use keyword any. If yo dont know what type it will be, you could include unknown. 
//Void returns undefined and never returns nothing.

//type vs interface: both can be extended and pass down properties from one type to another but in different ways.
//You can also extend properties from type to interface using extends and interface to type using "&."
type X = {
  a: string;
  b: number;
} 
type Y = X & {
  c: string;
  d: number;
}
// let y: Y = {
//   c: "word",
//   d: 42
// }

interface Person2 {
  name: string;
  age: number;
}

interface Guy extends Person2 {
  profession: string;
}

const App = () => {
  return (
    <div className="App">
      Hello World.
    </div>
  );
}

export default App;
