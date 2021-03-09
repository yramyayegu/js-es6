// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const obj = [
  { name: "ramya", email: "yramyayegu@hmil.com" },
  { name: "ramya", email: "yramyayegu@hmil.com" },
  { name: "siva", email: "siva@hmil.com" }
];
let nor = normal(obj);
let es = es6(obj)

console.log('Normal Function')
console.log(nor)

console.log("=====================")

console.log('ES6 Function')
console.log(es)


function normal(obj){
const temp = [];
Object.values(obj).map(item => {
  if (temp.includes(item.name)) {
    let c = obj.indexOf(item);
    obj.splice(c, 1);
  } else {
    temp.push(item.name);
  }
});
  return obj;
}
function es6(obj)
{
  const c = obj.map(JSON.stringify);
  const myset = new Set(c);
  const x = Array.from(myset).map(JSON.parse);
 
  return obj;
}