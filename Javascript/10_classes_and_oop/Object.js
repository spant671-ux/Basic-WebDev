function multiplyByFive(num){
    return num*5;
}

multiplyByFive.power = 2;
console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("sans", 25)
const tea = createUser('tea', 250)

chai.printMe()
