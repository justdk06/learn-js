// let myName = 'Dharmendra       '
// let myChannel = 'Chai      '

// console.log(myName.length);


let myHeros = ['thor','Spiderman']

let heroPower = {
    thor: 'hammmer',
    spiderman:'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh say hello`);
}
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()

const User = {
    name: 'Hitesh',
    email: 'hitesh@google.com'
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'ChaiAurCode.  '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
'hitesh'.trueLength()
'iceTea'.trueLength()