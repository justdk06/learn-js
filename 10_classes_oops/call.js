function SetUsername(username){
    // comples DB class
    this.username = username
    console.log('called');
    
}

function createUser(username, email, password){
    SetUsername(username)

    this.email = email
    this.password = password
}

const chai = new createUser('Chai', ' chai@fb.com', '123')
console.log(chai)