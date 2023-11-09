// Arry Filter


let Numbers = [1,2,3,4,5,6,7,8,9]


let result = Numbers.filter((value,index,arry)=> {
    return value > 6;

})

console.log(result);
console.log(Numbers);