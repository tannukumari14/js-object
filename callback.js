// const mainfunction =(callback)=>{
//     setTimeout(()=>{
//         callback([2,3,4])
//     },2000)
// }
// const add=(array)=>{
//     let sum=0
//     for(let i of array){
//         sum+=i
//     }
//     console.log(sum);
// }
// mainfunction(add)

// function myFirst() {
// console.log("Hello");}
// function mySecond() {
// console.log("Goodbye");}
// myFirst();
// mySecond();

// function display(some){
//     console.log(some);
// }
// function mycalculator(num1,num2){
//     let sum=num1+num2
//     return sum    
// }
// let result=mycalculator(5,5)
// mycalculator(result)


// function myDisplayer(some) {
//     console.log(some);
//   }
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
//   let result = myCalculator(5, 5);
//   myDisplayer(result);

// function display(some){
//     console.log(some);
// }
// function calculator(num1,num2){
//     sum=num1+num2
//     console.log(sum);
// }
// calculator(5,5)

// function myDisplayer(some) {
// console.log(some);}
// function myCalculator(num1, num2, myCallback) {
// let sum = num1 + num2;
// myCallback(sum);}
// myCalculator(5, 5, myDisplayer);

function value(name,callback){
    console.log("hello",name); 
    return callback() 
}
function callme(){
    console.log("my name is tanu");
}
value("rohan",callme)


//example
//setTimeout
//setInterval
//synchounous aysynchounus
//then
//catch
//lagsigal scope
//this se create object  (how to crate object with this)