console.log();

//Comparing two different data type the data type automatically change the data type. So, we need to be sure that the data type should be same before comparing. So in this case the typescript comes in handy because it doesnot allow to compare different data types.

//The reason is that an euquality check == and <= work differently. Comparisions convert null to a number, treating it as 0. That's why (3) null >= 0 is true and (1) null > 0 is false.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0);//All come zero

//Comparission and equality check are different 

//=== Strict Check "checks value and datatype"

console.log("2" === 2);