const User = {
    _email: "ka@kamal.li",
    _password: "h6m",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

const kamal = Object.create(User)
console.log(kamal.email);
console.log(kamal.password);

