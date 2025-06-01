const user = {
    username: 'Dharmendra',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
    }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let username = 'Dharmendra'
//     console.log(this)

// chai()

// const chai = function(){
//     let username = 'Dharmendra'
//     console.log(this)
// }

// const chai = () => {
//     let username = 'Dharmendra'
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => ({username: 'Dharmendra'})

// console.log(addTwo(3, 4))

const myArray = [2,3,5,6]
myArray.forEach()