// Switch used in redux
// break controls the control flow if break is not there it will print all expect default
const month = 3
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feburary");
        break;
    default:    
        console.log("default case match")
        break;
    }

// falsy value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value
// "0", "false", " ", [], {}, function(){}

//Checking the empty array
if(userEmail.length === 0) {
    console.log("Array is Empty")
}

//checking the empty object
const obj = {}

//Checking the keys. It returns the array of key
if(Object.keys(obj).length === 0){
    console.log("Object is empty.")
}

//Nullish Coalescing Operator (??): null undefined ==to put flag value instead of null undefined

let val1l

// val1 = 5 ?? 10 
// val1 = undefined ?? 10 
// val1 = null ?? 10 
val1 = null ?? 10 ?? 20

console.log(val1)