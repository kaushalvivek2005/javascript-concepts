//  ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `abc${this.password}xyz`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const kaushal = new User("Kaushal", "kaushal@it.in", "4546")

console.log(kaushal.encryptPassword())
console.log(kaushal.changeUsername());
console.log(kaushal);


//Behind the scene

function User2(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function(){
    return `abc${this.password}xyz`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const kaushal2 = new User2("Kaushal2", "kaushal2@it.in", "4686")

console.log(kaushal2.encryptPassword())
console.log(kaushal2.changeUsername());
console.log(kaushal2);
