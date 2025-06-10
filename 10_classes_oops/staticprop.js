class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const hitesh = new User('hitesh');
// console.log(hitesh.createId()); // ❌ This would still be invalid because static methods are called on class

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iPhone', 'i@Phone.com');
console.log(Teacher.createId()); // ✅ Call on class, not on instance