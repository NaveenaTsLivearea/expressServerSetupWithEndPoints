const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();
app.use(cors());

app.use(require("./router"));

app.use(express.json());

const port = process.env.PORT || 5050;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// console.log("First call");

// async function callMethod() {
//   try {
//     let funRes = await promiseEx();
//     console.log(funRes);
//   } catch (e) {
//     console.log(e);
//   }
// }

// callMethod();

// console.log("Third call");

// async function promiseEx() {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve("Second call");
//     }, 500);
//   });
// }

// let person = {
//   name: "Some Name",
//   age: 34,
//   city: "Bengaluru",
// };

// console.log(person.city);
// const { name, age } = person;

// console.log(name, age);

// let firstArray = [34, 24, 67, 67];
// let secondArray = [45, 56, 12];

// let array1 = ["one", "two", "three"];
// let array2 = ["four", "five"];

//array1.push(...array2); // Adds array2 items to end of array
//array1.unshift(...array2) //Adds array2 items to beginning of array

// let arr = [...firstArray, ...secondArray];
// console.log(arr);

// doSomething("add", 3, 4, 6);

// function doSomething(operation, ...rest) {
//   console.log(operation);
//   console.log(...rest);

//   console.log(rest[0]);
// }
