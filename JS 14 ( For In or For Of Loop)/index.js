// for in or for of loop

let numbers = [1,2,3,4,5,6,7,8,9,10]

for(let myArry of numbers){
    console.log(myArry);
}

for(let myArry in numbers){
    console.log(`${myArry} : ${numbers[myArry]}`);
}

let country = {
    Bangladesh : "Dhaka",
    India : "Nayadilli",
    Nepal : "Katmunddu"
}

for(var city in country){
    console.log(city + " : " + country[city]);
    
}