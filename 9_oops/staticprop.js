class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `${Math.floor(Math.random()*10)}`
    }
}

const kaushal = new User("kaushal")
// console.log(kaushal.createId());
console.log(User.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone.com")
iphone.logMe()