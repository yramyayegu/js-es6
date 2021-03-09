// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj = [
  { name: "ramya", email: "yramyayegu@hmil.com" },
  { name: "ramya", email: "yramyayegu@hmil.com" },
  { name: "siva", email: "siva@hmil.com" }
];

//console.log(obj)
const temp = [];
Object.values(obj).map(item => {
  if (temp.includes(item.name)) {
    let c = obj.indexOf(item);
    obj.splice(c, 1);
  } else {
    temp.push(item.name);
  }
});
//console.log(obj)

const data = [
  { name: "ramya", age: "26" },
  { name: "siva", age: "28" },
  { name: "ramya", age: "26" }
];

const c = data.map(JSON.stringify);

console.log(c);
const myset = new Set(c);
const x = Array.from(myset).map(JSON.parse);
console.log(x);
