// singleton 

// object literals


const mySym = Symbol('key1')
const JsUser = {
    name: 'Dharmndra','full name': 'Dharmendra',
    [mySym]: 'mykey1',
    age: 18,
    location: 'Jaipur',
    email: 'dharmendra@google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// console.log(JsUser.email)
// console.log(JsUser['email'])
// console.log(JsUser['full name'])
// console.log(JsUser[mySym])

JsUser.email = 'dharmendra@chatgpt.com'
// Object.freeze(JsUser)
JsUser.email = 'dharmendra@microsoft.com'
// console.log(JsUser);

JsUser.greeting = function(){
    console.log('Hello JS user');
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


