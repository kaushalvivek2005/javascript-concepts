//  ES6

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const kaushal = new Teacher("kaushal", "kaushal@it.in", "324")
// kaushal.addCourse()
kaushal.logMe()

const kaushal2 = new User("kaushal2")
kaushal2.logMe()


console.log(kaushal instanceof Teacher);
console.log(kaushal instanceof User);


