// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 2342456437456832n



// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ['shaktiman', 'naagraj', 'doga']

let myObj = {
    name: 'Dharmendra',
    age: 22,
}

const myFunction = function() {
    console.log("Hello World")
}

console.log(typeof heros);

// console.log(typeof bigNumber);
console.log(typeof anotherId);

// documnentation link :- https://262.ecma-international.org/5.1/#sec-11.4.3






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)


// let myYoutubename = 'Dhamrndra-06dotcom'

// let anothername = myYoutubename
// anothername = 'Dharmendra-iitm'

// console.log(anothername)
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = 'dharmendra@google.com'
console.log(userOne.email);
console.log(userTwo.email);
