const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Mike', 'Tomas', 'Henry', 'Maks', 'Alex', 'Victor', 'James', 'Tod', 'Roland', 'Freddie', 'Keanu'];
const femaleNames = ['Ann', 'Kate', 'Helen', 'Barbara', 'Anastasia', 'Victoria', 'Sandra', 'Mila', 'Mara', 'Nadin'];
const lastName = ['Underwood', 'Anderson', 'Ericson', 'Gates', 'Hilton', 'Depp', 'Torvaldson'];
let people = [];

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

for (let i = 0; i < 20; i++) {
  let obj = {};
  obj.gender = randChoice(genders);
  obj.firstName = (obj.gender == 'M') ? randChoice(maleNames) : randChoice(femaleNames);
  obj.lastName = lastName[Math.floor(Math.random() * lastName.length)];
  obj.age = Math.floor(18 + Math.random() * (75 + 1 - 18));
  people.push(obj);
};

fs.writeFile('people.json', JSON.stringify(people), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
