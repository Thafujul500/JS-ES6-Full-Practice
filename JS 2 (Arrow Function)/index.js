// JS class 2
// fat arrow function


// function number(){
//     return 10;
// }

// console.log(number(10));


// let number = () => {
//     return 20;
// }
// console.log(number());



// let num = () => console.log(20);;
// num();

// let num2 = (a) => {
//     return a
// };
// console.log(num2(500));;



// this keyword


let javaScript = {
    name : "JS",
    library : ["React","Anguler","View"],
    printLibrary : function (){
        this.library.forEach((a) => console.log(`${this.name} loves ${a}`));
    }
}

javaScript.printLibrary();

 










