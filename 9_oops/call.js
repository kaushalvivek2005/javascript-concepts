function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
        
}

function CreateUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const karan = new CreateUser("karan", "karan@gc.in", "234")
console.log(karan);
