// var i=10//parent data
// function show() {
//     var j=20
//     console.log(j);
// }
// show()


////nested function
// function show() {
//     var j="i am tanu"
//     console.log(j);//outer function
//     function innerfun() {
//         var k="i am 18"
//         console.log(k);//inner function
//         ///closure
//         console.log(j);
//     } 
//     innerfun();
// }
// show()

// let a = 4;
// function myFunction() {
//   console.log(a*a);
// }
// myFunction()

// function name() {
//     a=4
// }
// name()
// console.log(a);

// let counter = 0;
// function add() {
//   counter += 1;
//   console.log(counter);//output-1,2,3
// }
// add();
// add();
// add();
// console.log(counter);//output-3

// let counter = 0;
// function add() {
//   let counter = 0;
//   counter += 1;
// //   console.log(counter);////output-1,1,1
// }
// add();
// add();
// add();
// console.log(counter);////output-0


// // function add() {
//     let counter = 0;
//     function plus() {counter += 1;}
//     plus();   
//     console.log(counter);
//   }
//   add()

// const add = (function () {
//     let counter = 0;
//     return function () {counter += 1; return counter}
//   })();
//   console.log(add());
//   add();
//   add();

