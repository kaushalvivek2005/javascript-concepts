class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}
const kaushal = new User ("ka@kaushal.amp", "3h4")
console.log(kaushal.email);
console.log(kaushal.password)
