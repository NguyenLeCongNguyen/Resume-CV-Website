// function Person() {
//   return (
//     <div class="animals">
//       <h1>hello world</h1>
//       <p>Old:23</p>
//     </div>
//   );
// }

// ReactDOM.render(<Person />, document.querySelector("#p1"));

// toán tử Spread
const countSum = (number) => number * 2;
console.log(countSum(2));

const numbers = [1, 2, 3];
console.log(numbers);

const person = {
  name: "Elias",
};
const newPerson = {
  ...person,
  nameNew: "Brad",
  age: 23,
};
console.log(newPerson);
// toán tử Rest
const filter = (...args) => {
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
// Kỹ thuật desctructuring

var personOne = {
  name: "Elias",
  age: 23,
};
({ name, age } = personOne);
console.log(name);
console.log(age);

// Bài 10: ES6 - Primitive types và reference types
const personTwo = {
  name: "Elias",
};
const newPersonTwo = {
  ...personTwo,
};
personTwo.name = "Brad";
console.log(newPersonTwo);
// Bài 11: ES6 - Array functions
