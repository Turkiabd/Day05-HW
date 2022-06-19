console.log(
  "---------------------------------HW-------------------------------------------------"
);
// array can save any type of data or set inside of set
let arryDets = [
  { name: "Turki", height: 170, gender: "male", mass: 73, eyeCol: "black" },
  { name: "mohammed", height: 190, gender: "male", mass: 78, eyeCol: "black" },
  { name: "yuta", height: 160, gender: "male", mass: 89, eyeCol: "blue" },
  { name: "thena", height: 158, gender: "female", mass: 59, eyeCol: "brown" },
];

console.log("--------------------- map --------------------------");

//names
let names = arryDets.map(function (person) {
  return person.name;
});
console.log(names);

//heights
let heights = arryDets.map(function (person) {
  return person.height;
});
console.log(heights);
console.log("");

console.log("--------------------- reduce ------------------------");

let sumHe = arryDets.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.mass;
}, 0);
console.log(sumHe);

let sumNames = arryDets.reduce(function (a, currValue) {
  return a + currValue.name;
});

console.log("--------------------- filter ------------------------");

let massLarge = arryDets.filter(function (massCh) {
  return massCh.mass > 100;
});
console.log(massLarge);
console.log("--------------------------");
let gendFemale = arryDets.filter(function (gen) {
  return gen.gender === "female";
});
console.log(gendFemale);

console.log("--------------------- sort ------------------------");

let nameSort = arryDets.sort((a, b) => a.name - b.name);
console.log(nameSort);
console.log("--------------------------");

let genSort = arryDets.sort((a, b) => a.gender - b.gender);
console.log(genSort);

console.log("--------------------- every ------------------------");
// return boolean

let eve = arryDets.every(function (eyes) {
  return eyes.eyeCol === "blue";
});
console.log(eve);
console.log("--------------------------");
let genEvery = arryDets.every(function (g) {
  return g.gender === "male";
});
console.log(genEvery);

console.log("--------------------- some ------------------------");
// return boolean
let someChar = arryDets.some(function (gm) {
  return gm.gender === "male";
});
console.log(someChar);
console.log("--------------------------");

let massLess = arryDets.some(function (m) {
  return m.mass < 50;
});
console.log(massLess);
console.log("");

console.log("--------------------- API  ------------------------");

//   const breakingBad = document.getElementById("breakingbad");
// const btn_pic = document.getElementById("btn_pic");

// // event listner
// btn_pic.addEventListener("click", getChars);

// function getChars(){
//     fetch("https://breakingbadapi.com/api/characters")
//     .then((res) => res.json())
//     .then((data) => {
//         breakingbad.innerHtml = `<img src = "${data.img}"/>`;
//     });
// };

// ------------------------------------------------------
async function getData() {
  let data = await fetch("https://breakingbadapi.com/api/characters")
    .then((res) => res.json())
    .then((data) => data); // return data
  // console.log(data[0].url);
  console.log(data);
}
// let imgUrl= ()
getData();
