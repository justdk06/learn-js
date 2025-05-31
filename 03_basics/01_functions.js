// function sayMyName(){
//     console.log('D');
//     console.log('H');
//     console.log('A');
//     console.log('R');
//     console.log('M');
//     console.log('E');
//     console.log('N');
//     console.log('D');
//     console.log('R');
//     console.log('A');
// }

// sayMyName()

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = 'sam'){
    if(!username){
       console.log('Please enter the username: ');
       return 
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage('Dharmendra'))


function calculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: 'Dharmendra',
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: 'sam',
    price: 399
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300, 400, 500]));