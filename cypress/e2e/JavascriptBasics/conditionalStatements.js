function eligibleToVote(age){
    if(age>=18){
        console.log("old to vote")
    }
    else{
        console.log("sorry not eligible to vote")
    }
}

eligibleToVote(15)

function checkNum(num){
    if(num>0){
        console.log("Num is positive"+num)
    }
    else if(num<0){
        console.log("Num is negative"+num)
    }
    else{
        console.log("Num is zero")
    }
}
checkNum(-10)


let browser="abc";
if(browser=="chrome"){
    console.log("Launch chrome");
}
else if(browser=="edge"){
    console.log("Launch edge")
}
else if(browser=="firefox"){
    console.log("firefox")
}
else{
    console.log("Please pass right browser")
}

//switch
let brwoserName="xyz"
switch(brwoserName.toLowerCase().trim()){
    case "chrome":
        console.log("Launch chrome");
        break;
        case "firefox":
        console.log("Launch firefox");
        break;
        case "edge":
        console.log("Launch edge");
        break;
        default:
            console.log("Please pass right browser");
            throw new Error("Invalid browser")
}

