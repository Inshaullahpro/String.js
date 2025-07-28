const name  = "kundi";
const repoCount = 56 ;

console.log(name + repoCount + " value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('inshaullah');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
// console.log(gameName.indexOf('h'));
console.log(game.Name.indexOf('h'));


const newString = gameName.substring(8, 3)
console.log(newString);

const anotherString = gameName.slice(-8, 5);
console.log(anotherString);

const newStringOne  = '  inshaullah  ';
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://inshaullah.com/insha20%kundi";
console.log(url.replace('20% ', '-'));
console.log(url.includes('insha'));
console.log(gameName.split('-'));
