// Spred Operator

let myArry = [1,2,3]


// let newArray = [myArry[0],myArry[1],myArry[2]]

let newArray = [...myArry]
let anotherArray = [...myArry,4,5,6]

console.log(newArray);
console.log(anotherArray);


let sum = (x,y,z) => {
    console.log(`The sum is that : ${x+y+z}`);
}

// sum(myArry[0],myArry[1],myArry[2])
sum(...myArry)


let a = [1,2,3]
let b = [4,5,6]

let number = [...a,...b]
console.log("The new number : ",number);

let person1 = {
    name : "sdf",
    age : "fsd",
    roll : "sdfsdf",
}

let person2 = {
    name1 : "6516f",
    age1 : "86",
    roll1 : "78",
}

let pp = {...person1,...person2};
console.log("The new person : ",pp);










