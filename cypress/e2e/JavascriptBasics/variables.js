//var old way
//scope of variable

var x=10;
function test(){
    var y=20;
    x=30;
}
test();
console.log(x)
//console.log(y)
//scope of y is within function hence will get error y is not defined

var browser="chrome";
var browser="firefox";
browser="edge";
console.log(browser)


//let
//scope block

let name="Madhuri";
function nameTest(){
    name="Ashish"
}

nameTest();
console.log(name)

let user="Mads";
// let user="Ashu"; redelcare is not allowed
user="Ashu"
console.log(user)

//const is like final in java
const day=7;
//day=8;
//console.log("line number 38 error assignemnet to constant variable"+day)

