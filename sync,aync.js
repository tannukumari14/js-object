///synchrouons it is depend on first function
// const func2=()=>{
//     console.log("func2 is starting");
// }
// const func1=()=>{
//     console.log("func1 is starting");
//     func2()
//     console.log("func1 is ending");
// }
// func1()


//aynchrouons
// const func2=()=>{
//     setTimeout(()=>{
//         console.log("func2 is starting")
//     },2000)
// }
// const func1=()=>{
//     console.log("func1 is starting");
//     func2()
//     console.log("func1 is ending");
// }
// func1()



function myDisplayer(something) {
    console.log(something);}
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);}
  myCalculator(5, 5, myDisplayer);