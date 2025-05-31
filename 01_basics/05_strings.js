const name = 'Dharmendra'
const repoCount = 50


// console.log(name + repoCount + ' Value');

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Dharmendra kr.')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

const newStringOne = '   Dharmendra.  '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://dharmendra.com/dharmendra%20Kumar'

console.log(url.replace('%20', '-'))

console.log(url.includes('dharmendra'))

console.log(gameName.split('-'))