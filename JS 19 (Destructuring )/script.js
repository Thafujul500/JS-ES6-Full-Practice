// Destructuring

// Object Destructuring

let user = {
    id : 101,
    age : 35,
    name : "Shakib",
    education : {
        degree : "Honors"
    }
}

// let requiredName = user["name"];
// console.log(requiredName);

let { name : userName } = user;
console.log(userName);

let { name : title } = user;
console.log(title);


let {education : {degree : x}}  = user;
console.log("User Degree : " + x );



// Arry Destructuring


let number = [1,2,3,4,5,6,7,8,9,10]


// let [a,b] = number;
// console.log(a,b); => 1,2

let [, a , , , , b] = number;

console.log(a,b);  // => 2,6


let number2 = [1,2,[3,4,5,6],7]


let [ , , [ , p , q ]] = number2;
console.log(p,q);

let num1 = 500;
let num2 = 1000;


[num2,num1] = [num1,num2]

console.log(`num1 = ${num1} & num2 = ${num2}` );




















