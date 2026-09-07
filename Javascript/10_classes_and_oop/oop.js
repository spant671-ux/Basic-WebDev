const user = {
    username: 'sans',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from the databse.");
        //console.log(`Username: ${this.username}`);
        console.log(this)
    } 
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIN){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIN = isLoggedIN;

    return this;
}

const userOne = new User('sans', 7, true);
const userTwo = new User("santosh", 10, false)
console.log(userOne);
console.log(userTwo);


