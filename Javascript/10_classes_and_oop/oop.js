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

const promise1 = new Promise()
const date = new Date()


